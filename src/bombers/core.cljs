(ns bombers.core
  (:require cljsjs.react)
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.string :as s]
            [cljs.core.async :refer [<! timeout put! >! chan take! sliding-buffer]]
            );[figwheel.client :as fw :include-macros true])
  (:import [goog.net XhrIo]))


(enable-console-print!)

;;Setup;;
;;;;;;;;;

(def base-url (str "http://" (.-host (.-location js/window))))

;Twitter;

(def app-data (atom []))
(defn get_tweets []
  (.send XhrIo (str base-url "/tweets.json")
    (fn [res] (reset! app-data (take 5 (js->clj
      (.getResponseJson (.-target res)) :keywordize-keys true))))))
(get_tweets)

;News;
(def all-news (atom []))
(def news-data (atom []))
(def old-news-data (atom []))
(.send goog.net.XhrIo (str base-url "/posts.json") (fn [res] (reset! all-news (js->clj (.getResponseJson (.-target res)) :keywordize-keys true))))
(def counter (atom 0))
(def pc (atom false))

;;Functions;;
;;;;;;;;;;;;;

;Twitter;

(defn find_links [string]
  (re-find #"http([^ ]*)" string))
 ; (re-seq #"(http:.*)\s|(http:.*)\z" string))

;News;
(defn group-together [numb vect]
  )

(defn yt2img [youtube]
  (str "http://img.youtube.com/vi/" (subs youtube 30) "/0.jpg"))

(defn fnt_size [string]
  (str (min 28 (/ 1000 (count string)))))

(defn oldnews_fnt_size [string]
  (str (min 16 (/ 600 (count string)))))

(defn index_of [arr item]
  (loop [a arr i 0]
    (if (= (first a) item)
      i
      (recur (next a)(inc i)))))

(defn set_active [array index]
  (update-in (vec (map #(assoc % :active 0) array)) [index :active] inc))

(defn background [news]
  (if (=  (:active news) 1)
    (quote "#232323")
    (quote "#333333"))
  )
(defn is_active [news style]
  (if (= (:active news) 1)
    (clj->js (merge style {:border-style "solid" :border-width "0px 1px 1px" :border-color "#FBB600" :box-shadow "-3px 3px 3px #222222"}))
    (clj->js style)))
(defn link_color [news]
  (if (= (:active news) 1)
    (quote "#FBB600")
    (quote "#966000")))

(defn inc_active [data]
    (if (< @counter 4)
      (reset! counter (inc @counter))
      (reset! counter 0))
    (set_active data @counter))

(defn slide [id]
  (if (= (.getElementById js/document id) nil)
   (.log js/console (pr-str id " does not exist yet"))
   (go (set! (.-transition (.-style (.getElementById js/document id))) "none")
    (set! (.-marginLeft (.-style (.getElementById js/document id))) "0px")
    (<! (timeout 5))
    (set! (.-transition (.-style (.getElementById js/document id))) "margin-left 1s")
    (set! (.-marginLeft (.-style (.getElementById js/document id))) "-650px"))))

;;DOM code;;
;;;;;;;;;;;;

;Twitter;

(defn tweet [tweet owner]
  (reify
    om/IRender
    (render [this]
      (dom/tr nil
        (dom/td nil
          (dom/img #js {:src (:profile_image_url (:user tweet)) :height "24" :width "24"}))
        (dom/td #js {:style #js {:textAlign "left" :textIndent "0%"}}
          (dom/a #js {:href (first (find_links (:text tweet))) :style #js {:font-size "11px" :margin "0.3% 3%" :display "inline-block"}}(:text tweet)))))))


(defn tweet_app [tweets owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "b_box" :style #js {:min-height "295px"}}
        (dom/div #js {:className "b_header"}
          (dom/img #js {:src "/assets/twitter.png"})
        (apply dom/table nil
          (om/build-all tweet tweets)))))))

(go (while (empty? @app-data); check if data is loaded
      (<! (timeout 16)))
  (om/root tweet_app
    app-data
    {:target (. js/document (getElementById "tweets"))}))
;News;

(defn other_news_links [news owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id (str "nl" (index_of @news-data news)) :style (is_active news {:background (background news) :text-align "center" :float "left" :width "18%"
                                :border-radius "0px 0px 4px 4px" :height "99%" :margin "-0.8% 0.8% 1% 0.8%" })
                    :onMouseEnter (fn [] (om/transact! news :active (fn [xs]
                                                                      (aset (aget (.getElementById js/document (str "nl" @counter)) "style") "border-style" "none")
                                                                      (aset (aget (.getElementById js/document (str "nl" @counter)) "style") "box-shadow" "0px 0px 0px #000000")
                                                                      (set! (.-background (.-style (.getElementById js/document (str "nl" @counter)))) "#333333")
                                                                      (set! (.-color (.-style (.getElementById js/document (str "nla" @counter)))) "#966000")
                                                                      (reset! counter (index_of @news-data @news))
                                                                      (reset! news-data (set_active @news-data @counter))
                                                                      (set! (.-background (.-style (.getElementById js/document (str "nl" @counter)))) "#232323")
                                                                      (set! (.-color (.-style (.getElementById js/document (str "nla" @counter)))) "#FBB600")
                                                                      (reset! counter (index_of @news-data @news))
                                                                      (quote 1))))
                    :onClick (fn [] (set! (.-href (.-location js/window)) (str "/posts/" (:id @news))))}
               (dom/br nil)
        (dom/a #js {:href (str "/posts/" (:id news)) :id (str "nla" (index_of @news-data news)) :style #js
                    {:color (link_color news) :text-decoration "none" :font-size "x-small" }} (:title news))))))

(defn other_news [data owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/div #js {:className "other_news" :style #js {:font-size "xx-small" :float "left" :height "70px"
                                                              :width "100%" :padding "5px" :color "#fff"
                                                              :background "rgba(50,50,50,255)" }}
        (om/build-all other_news_links data)))))

(defn top_news_render [post owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "title" :style #js {:margin-top "40px" :width "650px"}}
        (dom/a #js {:href (str "/posts/" (:id (first post))) :style #js {:font-family "Myriad" :font-weight "bold"
                                                              :font-size (fnt_size (:title (first post)))
                                                              :text-decoration "none" :color "#FBB600"
                                                              :text-shadow "black -3px 3px" }} (s/upper-case (:title (first post))))
         ;(dom/p #js {:dangerouslySetInnerHTML #js {:__html (:text (first post))}})
               ))))

(defn top_news [post owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "top_news" :style #js {:float "left" :height "100px" :overflow "hidden"
                                                      :border-right "1ipx solid #777"
                                                      :text-align "center" :background "url(/assets/newsbg.png)"
                                                      :width "1300px" :display "flex" :transition "none"}}
        (if (< (dec @counter) 0)
          (om/build top_news_render (vector (nth post 4) owner))
          (om/build top_news_render (vector (nth post (dec @counter) owner))))
        (om/build top_news_render (vector (nth post @counter) owner))))))

(defn tray [app owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "tray" :style #js {:float "left"
                                                  :position "absolute" :width "100%" :height "170px"
                                                  :border-top "1px solid #777" :bottom "0"}}
        (om/build top_news app)
        (om/build other_news app)))))

(defn splash_render [post owner]
  (reify
    om/IRender
    (render [this]
      (cond
        (first (:image (first post))) (dom/img #js {:src (first (:image (first post))) :width "650" :height "365"})
        (first (:youtube (first post))) (dom/img #js {:src (yt2img (first (:youtube (first post)))) :width "650" :height "365"
                                                                                                    :style #js {:margin "0px" :padding "0px"
                                                                                                    :border "none"}})
        :else (dom/img #js {:src "http://i.imgur.com/gasUYAG.jpg" :width "650"})))))

(defn splash [post owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "slider" :style #js {:width "1300px" :height "365px" :display "flex"
                                             :transition "none"
                                             :margin-left "0px"}
                    :onClick (fn [] (set! (.-href (.-location js/window)) (str "/posts/" (:id (nth @news-data @counter)))))}
        (if (< (dec @counter) 0)
          (om/build splash_render (vector (nth post 4)))
          (om/build splash_render (vector (nth post (dec @counter)))))
        (om/build splash_render (vector (nth post @counter)))))))

(defn old-news-row [data owner]
  (reify
    om/IRender
    (render [this]
       (dom/div #js {:className "col-lg-4 visible-lg" :style #js {:padding "10px 5px 0px 5px"}}
           (dom/div #js {:className "b_box" :style #js {:height "130px" :overflow "hidden" :margin-top "15px"}}
             (dom/img #js {:src (cond
                                   (first (:image data)) (first (:image data))
                                   (first (:youtube data)) (yt2img (first (:youtube data)))
                                   :else (quote "http://i.imgur.com/gasUYAG.jpg"))}))
           (dom/div #js {:style #js{:float "left" :height "40px" :background "#303030" :width "95%" :text-align "center"
                                    :position "absolute" :margin-top "-41px" :margin-left "1px" :opacity "0.98"}}
                    (dom/a #js {:href (str "/posts/" (:id data)) :style #js {:font-family "Myriad" :font-weight "bold"
                                                                             :font-size (oldnews_fnt_size (:title data)) :text-decoration "none"
                                                                             :color "#FBB600" :text-shadow "black -2px" }} (s/upper-case (:title data))))))))

(defn news-archive [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/a #js {:href "/posts/archive"}
        (dom/div #js {:className "col-lg-12" :style #js {:height "22px" :background "url(/assets/archive.png) no-repeat center"}})))))

(defn old-news-holder [data owner]
  (.log js/console (pr-str "holder"))
  (reify
    om/IRender
    (render [this]
    (apply dom/div nil
           (om/build-all old-news-row data)))))

(defn old-news [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
          (om/build old-news-holder data)
        (dom/div #js {:className "b_box" :style #js {:background-color "#303030" :display "inline-block" :margin-top "20px"}}
          (om/build news-archive data))))))

(defn news [data owner]
  (reify
    om/IRender
    (render [this]
        (dom/div #js {:className "news" :onMouseEnter (fn [] (reset! pc true)) :onMouseLeave (fn [] (reset! pc false))}
          (dom/div #js {:className "post_image" :style #js {:height "435px" :overflow "hidden" :position "relative"}}
            (om/build splash data)
            (om/build tray data ))))))

;News;
(defn start-loop []
  (go (while (seq @news-data) ;dont start loop until data is loaded
        (.log js/console (pr-str "loaded" @news-data (seq @news-data)))
        (if (false? (deref pc))
          ((fn []
            (slide "slider")
            (slide "top_news"))))
        (<! (timeout 5000))
        (.log js/console (pr-str "newws data" @news-data))
        (if (false? (deref pc))
          (reset! news-data (inc_active @news-data))))))

(defn test []
  (go (while (empty? @all-news); check if data is loaded
        (<! (timeout 16)))
      (reset! news-data (vec (take 5 @all-news)))
      (reset! old-news-data (vec (take 6 (drop 5 @all-news))))
      (start-loop)
      (.log js/console (pr-str @news-data))
      (reset! news-data (update-in @news-data [0 :active] inc)) ;set first post as active
      (om/root news
           news-data
           {:target (. js/document (getElementById "content"))})
     ; )
      (om/root old-news
          old-news-data
          {:target (. js/document (getElementById "content2"))})))

;;Update functions;;
;;;;;;;;;;;;;;;;;;;;

;Twitter;

(go (while true
      (<! (timeout 30000))
      (get_tweets)))


;;FigWheel::
;;;;;;;;;;;;
;(fw/watch-and-reload :jsload-callback (fn [] (.log js/console "reloaded")))


