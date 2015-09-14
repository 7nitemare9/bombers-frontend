(ns idiot.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.string :as s]
            [cljs.core.async :refer [<! timeout put! >! chan take! sliding-buffer]]
            );[figwheel.client :as fw :include-macros true])
  (:import [goog.net XhrIo]))


(def players ["dexrion81" "sorkpippi" "zhitnik" "xHeath22" "betupp" "oni404" "mekfiri" "herkie82"])

(def online-state (atom []))

(def base-url (str "http://ftp.bombers-hockey.com"))

(defn get-status! [player]
  (.send XhrIo (str base-url ":3000/PSN/" player)
    (fn [res]
      (reset! online-state (conj @online-state
                                 (js->clj (.getResponseJson (.-target res)) :keywordize-keys true))))))

(defn fill-state! [players]
  (reset! online-state [])
  (dorun (map get-status! players)))

;(fill-state! players)

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

(defn thumb [state owner]
  (dom/div #js {:className "thumbnail"}
    (dom/div #js {:className "b_border"}
      (dom/img #js {:className (status-class-name state)
                    :src (:avatarUrl state)
                    :width "64"
                    :height "64"
                    :title (current-operation state)}))
    (dom/div #js {:className "caption"}
      (dom/p nil (:onlineId state)))))

(defn online-status [state owner]
  (dom/div #js {:className "b_box"}
    (dom/div #js {:className "b_header"}
      (dom/img #js {:src "/assets/onlinestatus.jpg"}))
    (apply dom/div #js {:className "b_content"}
      (om/build-all thumb state))))

(go
   (while (empty? @online-state)
     (<! (timeout 16)))
  (om/root online-status
    online-state
    {:target (. js/document (getElementById "online-status"))}))

;(go (<! (timeout 300000))
;    (fill-state! players))
