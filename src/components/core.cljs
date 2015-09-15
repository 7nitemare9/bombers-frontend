(ns components.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [css.core :as css]))

(defn title [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/p (css/p2) (:title (first data))))))

(defn title-image [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/img #js {:src "assets/blank.jpg" :width "100%" :style #js {:max-width "100%"}}))))

(defn header [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "content"}
        (dom/div nil
          (om/build title-image [data])
          (om/build title [data]))))))
