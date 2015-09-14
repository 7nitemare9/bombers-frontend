(ns navigation.core
  (:require [secretary.core :as sec :include-macros true]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [bombers.core :as bombers])
  (:import goog.History))

(sec/set-config! :prefix "#")

(let [history (History.)
      navigation EventType/NAVIGATE]
  (goog.events/listen history
                      navigation
                      #(-> % .-token sec/dispatch!))
  (doto history (.setEnabled true)))

(defn navigation-view [_ _]
  (reify
    om/IRender
    (render [_]
       (dom/div
          (dom/a #js {:href "#/"}
                 "Home")
          (dom/a #js {:href "#/something"}
                 "Something")
          (dom/a #js {:href "#/about"}
                       "About")))))

(sec/defroute index-page "/something" []
  (bombers/test))


(om/root navigation-view {}
         {:target (. js/document (getElementById "navbar"))})
