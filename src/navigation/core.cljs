(ns navigation.core
  (:require [secretary.core :as sec :include-macros true]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [bombers.core :as bombers]
            [Lineup.core :as lineup])
  (:import goog.History))

(sec/set-config! :prefix "#")

(defn navigation-view [_ _]
  (reify
    om/IRender
    (render [_]
       (dom/div nil
          (dom/a #js {:href "#/"}
                 "Home")
          (dom/a #js {:href "#/lineup"}
                 "Lineup")
          (dom/a #js {:href "#/fanzone"}
                       "Fanzone")))))

(sec/defroute index-page "/" []
  (bombers/test))

(sec/defroute default "" []
  (bombers/test))

(sec/defroute lineup-page "/lineup" []
  (lineup/start))

(sec/defroute player-page "/player/:id" {id :id}
  (.log js/console (str "user" id))
  (lineup/show-player id))


(om/root navigation-view {}
         {:target (. js/document (getElementById "navbar"))})

(let [history (History.)
      navigation EventType/NAVIGATE]
  (goog.events/listen history
                      navigation
                      #(-> % .-token sec/dispatch!))
  (doto history (.setEnabled true)))
