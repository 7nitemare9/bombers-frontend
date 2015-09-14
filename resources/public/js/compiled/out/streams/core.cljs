(ns streams.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.string :as s]
            [cljs.core.async :refer [<! timeout put! >! chan take! sliding-buffer]]
            );[figwheel.client :as fw :include-macros true])
  (:import [goog.net XhrIo]))


(def base-url (str "http://" (.-host (.-location js/window))))

(def stream-state (atom []))

(def temp-state (atom []))

(def not-nil? (comp not nil?))

(defn read-data [] (.send XhrIo (str base-url "/streams.json")
   (fn [res] (reset! temp-state (filterv not-nil? (js->clj (.getResponseJson (.-target res)) :keywordize-keys true))))))

(read-data)

(defn status-class-name [state]
  (.log js/console (pr-str state))
  (if (= (get-in state [:presence :primaryInfo :onlineStatus]) nil)
    (quote "online_image_grayscale")
    (if (= (get-in state [:presence :primaryInfo :onlineStatus]) (quote "offline"))
      (quote "online_image_grayscale")
      (quote "online_image"))))

(defn current-operation [state]
  (if (= (get-in state [:presence :primaryInfo :onlineStatus]) (quote "online"))
    (get-in state [:presence :primaryInfo :gameTitleInfo :titleName])
    (quote "offline or unknown")))

(defn stream [state owner]
  (.log js/console (pr-str (:name (:channel state))))
  (reify
    om/IRender
    (render [this]
      (dom/object #js {:bgColor "000000"
                       :data (str "http://www.twitch.tv/widgets/live_embed_player.swf?channel=" (:name (:channel state)))
                       :height "188px"
                       :width "288px"
                       :type "application/x-shockwave-flash"}))))

(defn offline [state owner]
  (.log js/console (pr-str "offline"))
  (.log js/console (pr-str state))
  (reify
    om/IRender
    (render [this]
      (dom/img #js {:src "/assets/TwitchBG.png"
                    :width "288"
                    :height "162"}))))

(defn streams [state owner]
  (.log js/console (pr-str (:name (:channel (first state)))))
  (.log js/console (pr-str state))
  (.log js/console (pr-str (empty? state)))
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "b_box"}
        (dom/div #js {:className "b_header"}
          (dom/img #js {:src "/assets/livestream.png"}))
        (if (empty? state)
          (dom/div #js {:className "b_stream"}
            (om/build offline state))
          (apply dom/div #js {:className "b_stream"}
            (om/build-all stream state)))))))

(go
;   (while (empty? @stream-state)
;     (<! (timeout 16)))
  (reset! stream-state (filterv not-nil? @stream-state))
  (.log js/console (pr-str (nil? (first @stream-state))))
  (om/root streams
    stream-state
    {:target (. js/document (getElementById "b_stream"))}))

(go (while true
      (<! (timeout 30000))
      (.log js/console (pr-str "twitch update"))
      (.log js/console (pr-str @temp-state))
      (.log js/console (pr-str @stream-state))
      (read-data)))

(go (while true
      (<! (timeout 16))
      (if (not (= @temp-state @stream-state))
        (reset! stream-state @temp-state))))
