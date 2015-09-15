(ns Lineup.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [css.core :as css]
            [cljs.core.async :refer [<! timeout]]
            [components.core :as c])
  (:import [goog.net XhrIo]))

(def base-url (str "http://" (.-host (.-location js/window))))
(def players (atom []))

(defn load-data []
  (.send XhrIo (str base-url "/players.json")
         (fn [res] (reset! players (js->clj (.getResponseJson (.-target res)) :keywordize-keys true)))))

(defn list-of-only [data k string]
  (.log js/console (pr-str data k string))
  (filter
    (fn [x]
      (= (k x) string))
   data))

(defn titlecard [data owner]
  (.log js/console "titlecard")
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "titlecard"}
        (dom/img #js {:src (str "assets/players/" (:title (first data)) ".png")})))))

(defn card [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "flip-container" :ontouchstart "this.classlist.toggle('hover')"}
        (dom/a #js {:href (str "player/" (:id data))}
          (dom/div #js {:className "flipper"}
            (dom/div #js {:className "front"}
              (dom/img #js {:src (str "assets/player/" (:name data) "-s-front.png")}))
            (dom/div #js {:className "back"}
              (dom/img #js {:src (str "assets/player/" (:name data) "-s-back.png")}))))))))

(defn cards [data owner]
  (.log js/console (pr-str data))
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "card-container"}
        (om/build-all card data)))))

(defn goaltenders [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
        (om/build titlecard [{:title "goalkeepers"}])
        (om/build cards (list-of-only data :position "Goaltender"))))))

(defn defenders [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
        (om/build titlecard [{:title "defenders"}])
        (om/build cards (list-of-only data :position "Defense"))))))

(defn forwards [data owner]
  (.log js/console "forwards")
  (reify
    om/IRender
    (render [_]
      (dom/div nil
        (om/build titlecard [{:title "forwards"}])
        (om/build cards (list-of-only data :position "Forward"))))))


(defn lineup-players [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "centering"}
        (dom/br nil)
        (om/build forwards data)
        (om/build defenders data)
        (om/build goaltenders data)))))

(defn lineup-content [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "b_box"}
        (om/build c/header {:title "LINEUP"})
        (om/build lineup-players data)))))

(defn start []
  (load-data)
  (go (while (empty? @players)
        (<! (timeout 16)))
  (om/root lineup-content
           players
           {:target (. js/document (getElementById "content"))})))

(defn player-content [data owner]
  (.log js/console (pr-str data))
  (reify
    om/IRender
    (render [_]
      (dom/div {:className "b_box"}
        (om/build player data)))))

(defn show-player [id]
  (if (empty? @players)
    (load-data))
  (go (while (empty? @players)
        (<! (timeout 16)))
      (om/root player-content (vec (list-of-only @players :id (js/parseInt id)))
               {:target (. js/document (getElementById "content"))})))
