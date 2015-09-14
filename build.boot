(set-env!
  :source-paths #{"src" "src-cljs"}
  :dependencies '[[adzerk/boot-cljs "0.0-3269-2" :scope "test"]
                 [adzerk/boot-cljs-repl "0.1.9" :scope "test"]
                 [adzerk/boot-reload "0.2.6" :scope "test"]
                 [pandeiro/boot-http "0.6.3-SNAPSHOT" :scope "test"]
                 [org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.48"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.omcljs/om "0.9.0"]
                 [cljs-http "0.1.15"]
                 [secretary "1.2.3"]
                 ])

(require '[adzerk.boot-cljs :refer :all])

(task-options! repl {:init-ns 'bombers.server'})

