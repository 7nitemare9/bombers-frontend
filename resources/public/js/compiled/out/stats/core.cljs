(ns stats.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! timeout]]
            [clojure.string :as s]
           ); [figwheel.client :as fw :include-macros true])
  (:import [goog.net XhrIo]))


(enable-console-print!)
(def base-url (str "http://" (.-host (.-location js/window))))
(def base-stats (atom []))
(def forward-data (atom {}))
(def defender-data (atom {}))
(def goalie-data (atom {}))

(defn load-data []
  (reset! forward-data {:sort {:points :high} :stats (@base-stats :forwards)})
  (reset! forward-data (assoc @forward-data :stats (reverse (sort-by :points (:stats @forward-data)))))
  (reset! defender-data {:sort {:points :high} :stats (@base-stats :defenders)})
  (reset! defender-data (assoc @defender-data :stats (reverse (sort-by :points (:stats @defender-data)))))
  (reset! goalie-data {:sort {:save_percent :high} :stats (@base-stats :goalies)})
  (reset! goalie-data (assoc @goalie-data :stats (reverse (sort-by :save_percent (:stats @goalie-data))))))

(.log js/console (str "gebi " (pr-str (.getElementById js/document "forwards"))))

(go
  (while (= (.getElementById js/document "forwards") nil)
      (<! (timeout 16)))
  (.send XhrIo (str base-url "/statistics.json")
    (fn [res] (reset! base-stats (js->clj (.getResponseJson (.-target res)) :keywordize-keys true))
              (load-data))))

(def stats-order-ice [:name :points :goals :assists :plus_minus :shots :pims :hits
                      :takeaways :giveaways :shot_percent :games])

(def stats-order-goalie [:name :save_percent :GAA :goals_against :saves :shots_against :SO :games])

(def per-game-keys-ice [:points :goals :assists :plus_minus :shots :pims :hits :takeaways :giveaways])

(def switch-data (atom {:per false :total true}))

(defn per-game-stats [data]
  (loop [stats (:stats @data) out []]
    (if (empty? stats)
      out
      (recur (rest stats) (conj out
        (do
          (loop [stats-keys per-game-keys-ice stat (first stats) player {}]
            (if (empty? stats-keys)
              (conj player {:name (:name stat) :shot_percent (:shot_percent stat) :games (:games stat)})
              (do
                (recur (rest stats-keys) stat
                  (conj player {(first stats-keys) (/ ((first stats-keys) stat) (:games stat))})))))))))))

(defn switch-per-total []
  (if (:total @switch-data)
    (do
      (reset! forward-data (assoc @forward-data :stats (per-game-stats forward-data)))
      (reset! defender-data (assoc @defender-data :stats (per-game-stats defender-data)))
      (reset! switch-data {:per true :total false}))
    (do
     (load-data)
     (reset! switch-data {:per false :total true}))))

(defn sort-by-title-forwards [title]
  (if (= (list title) (keys (:sort @forward-data)))
    (if (= (title (:sort @forward-data)) :high)
      (reset! forward-data (assoc (assoc @forward-data :stats (sort-by title (:stats @forward-data))) :sort {title :low}))
      (reset! forward-data (assoc (assoc @forward-data :stats (reverse (sort-by title (:stats @forward-data)))) :sort {title :high})))
    (reset! forward-data (assoc (assoc @forward-data :stats (reverse (sort-by title (:stats @forward-data)))) :sort {title :high}))))

(defn sort-by-title-defenders [title]
  (if (= (list title) (keys (:sort @defender-data)))
    (if (= (title (:sort @defender-data)) :high)
      (reset! defender-data (assoc (assoc @defender-data :stats (sort-by title (:stats @defender-data))) :sort {title :low}))
      (reset! defender-data (assoc (assoc @defender-data :stats (reverse (sort-by title (:stats @defender-data)))) :sort {title :high})))
    (reset! defender-data (assoc (assoc @defender-data :stats (reverse (sort-by title (:stats @defender-data)))) :sort {title :high}))))

(defn sort-by-title-goalies [title]
  (if (= (list title) (keys (:sort @goalie-data)))
    (if (= (title (:sort @goalie-data)) :high)
      (reset! goalie-data (assoc (assoc @goalie-data :stats (sort-by title (:stats @goalie-data))) :sort {title :low}))
      (reset! goalie-data (assoc (assoc @goalie-data :stats (reverse (sort-by title (:stats @goalie-data)))) :sort {title :high})))
    (reset! goalie-data (assoc (assoc @goalie-data :stats (reverse (sort-by title (:stats @goalie-data)))) :sort {title :high}))))

(defn asort [m order]
  (let [order-map (apply hash-map (interleave order (range)))]
    (conj
      (sorted-map-by #(compare (order-map %1) (order-map %2))) ; empty map with the desired ordering
      (select-keys m order))))

(defn round [num]
  (if (or (= (rem num 1) 0) (string? num))
    num
    (.toFixed num 2)))

(defn forward-tableheader-th [title owner]
  (reify
    om/IRender
    (render [this]
      (dom/th #js {:onClick (fn [] (sort-by-title-forwards
                                    (second title))) :className "cr"} (if (= (list (second title)) (keys (second (first title))))
                                                                                      (if (= (vals (second (first title))) (list :high))
                                                                                     (s/replace (s/replace (s/replace (str (name (second title)) \u25bc) #"_" " ") #"percent" "%") #"plus.minus" "+/-")
                                                                                         (s/replace (s/replace (s/replace (str (name (second title)) \u25b2) #"_" " ") #"percent" "%") #"plus.minus" "+/-"))
                                                                                     (s/replace (s/replace (s/replace (name (second title)) #"_" " ") #"percent" "%") #"plus.minus" "+/-"))))))

(defn defender-tableheader-th [title owner]
  (reify
    om/IRender
    (render [this]
      (dom/th #js {:onClick (fn [] (sort-by-title-defenders
                                    (second title))) :className "cr"} (if (= (list (second title)) (keys (second (first title))))
                                                                                        (if (= (vals (second (first title))) (list :high))
                                                                                       (s/replace (s/replace (s/replace (str (name (second title)) \u25bc) #"_" " ") #"percent" "%") #"plus.minus" "+/-")
                                                                                           (s/replace (s/replace (s/replace (str (name (second title)) \u25b2) #"_" " ") #"percent" "%") #"plus.minus" "+/-"))
                                                                                       (s/replace (s/replace (s/replace (name (second title)) #"_" " ") #"percent" "%") #"plus.minus" "+/-"))))))

(defn goalie-tableheader-th [title owner]
  (reify
    om/IRender
    (render [this]
      (dom/th #js {:onClick (fn [] (sort-by-title-goalies
                                    (second title))) :className "cr"} (if (= (list (second title)) (keys (second (first title))))
                                                                                        (if (= (vals (second (first title))) (list :high))
                                                                                           (s/replace (s/replace (str (name (second title)) \u25bc) #"_" " ") #"percent" "%")
                                                                                           (s/replace (s/replace (str (name (second title)) \u25b2) #"_" " ") #"percent" "%"))
                                                                                       (s/replace (s/replace (name (second title)) #"_" " ") #"percent" "%"))))))
(defn forward-thead [titles owner]
  (reify
    om/IRender
    (render [this]
      (dom/thead nil
        (apply dom/tr #js {:className "team_head"}
          (om/build-all forward-tableheader-th
            (map (fn [v] (conj (vec (first titles)) v))(vec (:stats (second titles))))))))))

(defn defender-thead [titles owner]
  (reify
    om/IRender
    (render [this]
      (dom/thead nil
        (apply dom/tr #js {:className "team_head"}
          (om/build-all defender-tableheader-th
            (map (fn [v] (conj (vec (first titles)) v))(vec (:stats (second titles))))))))))

(defn goalie-thead [titles owner]
  (reify
    om/IRender
    (render [this]
      (dom/thead nil
        (apply dom/tr #js {:className "team_head"}
          (om/build-all goalie-tableheader-th
            (map (fn [v] (conj (vec (first titles)) v))(vec (:stats (second titles))))))))))

(defn stat-vals [sv owner]
  (reify
    om/IRender
    (render [this]
      (if (string? sv)
        (dom/td nil sv)
        (dom/td #js {:style #js {:textAlign "center"}} (round sv))))))

(defn row [player owner]
  (reify
    om/IRender
    (render [this]
      (if (:saves player)
        (apply dom/tr nil
          (om/build-all stat-vals (vals (asort player stats-order-goalie))))
        (apply dom/tr nil
          (om/build-all stat-vals (vals (asort player stats-order-ice))))))))

(defn content [players owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/tbody nil
        (om/build-all row players)))))

(defn forward-table [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/table nil
        (om/build forward-thead [{:srt (:sort data)} {:stats (keys (asort (first (:stats data)) stats-order-ice))}])
        (om/build content (:stats data))))))

(defn defender-table [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/table nil
        (om/build defender-thead [{:srt (:sort data)} {:stats (keys (asort (first (:stats data)) stats-order-ice))}])
        (om/build content (:stats data))))))


(defn goalie-table [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/table nil
        (om/build goalie-thead [{:srt (:sort data)} {:stats (keys (asort (first (:stats data)) stats-order-goalie))}])
        (om/build content (:stats data))))))

(defn switch [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:onClick (fn [] (switch-per-total))} (if (:total data) "Switch to per game"
                                                           "Switch to total stats")))))

(go (while (empty? @forward-data)
      (<! (timeout 16)))
 (om/root forward-table
  forward-data
  {:target (. js/document (getElementById "forwards"))})
 (om/root defender-table
  defender-data
   {:target (. js/document (getElementById "defenders"))})
 (om/root goalie-table
  goalie-data
  {:target (. js/document (getElementById "goalies"))})
 (om/root switch
   switch-data
   {:target (. js/document (getElementById "switch"))}))


;(fw/watch-and-reload :jsload-callback (fn [] (.log js/console "reloaded")))
