---
title: "Clojure Day Report"
category: updates
layout: post
tags: frontpage
---

In Practicing  [Ruby issue 5.8] (https://practicingruby.com/articles/92)  Gregory described his experiences in studying swarming behavior and how they lead to the discovery of a Rich Hickey [project] (https://gist.github.com/1093917) simulating an ant colony written in Clojure. Gregory decided to look into the Clojure code then Clojure itself and the Mendicant University Clojure Day was born. Several respondents expressed an interest in learning more about Clojure and it was decided that an email format would be best, with everyone researching on their own then reporting back to the group on November 29 \[Clojure Day\].

Gregory kicked things off around midnight on the 18th and a number of participants started in with their posts.  Several folks were doing some reading; Morgan Nelson started Marick's [Functional Programming for the Object Oriented Programmer] (	https://leanpub.com/fp-oo), a few others started reading [Programming Clojure] (http://pragprog.com/book/shcloj2/programming-clojure). Also there was the usual tool discussion with some trying to tackle Emacs along with Clojure and others sticking with Vim or whatever.  

Gregory went back to Puzzle Node #4 [Robots v Lasers] (http://puzzlenode.com/puzzles/4-robots-vs-lasers) and tried to port a solution from Ruby to Clojure:

So far, I've translated my parser class. Here's what I came up with:

```clojure
(def conveyor-symbols { \# :wall \| :laser })
(def robot-symbol "X")

(defn wall-data [text] (map #(conveyor-symbols %) text))

(defn conveyor-data [input]
  (let [[north middle south] (clojure.string/split input #"\n")]
    { :north_side     (wall-data north)
      :south_side     (wall-data south)
      :robot_position (.indexOf middle robot-symbol)}))

(pr (conveyor-data "#|#|#|##\n---X----\n###||###"))
```

The original Ruby code looked like this:

```ruby
module Robotic
  class Parser
    CONVEYOR_SYMBOLS = { "#" => :wall, "|" => :laser }
    ROBOT_SYMBOL = "X"

    def initialize(text)
      @text = text
    end

    def conveyor_data
      north, middle, south = text.split
      { :north_side => wall_data(north),
        :south_side => wall_data(south),
        :robot_position => middle.index(ROBOT_SYMBOL) }
    end

    private

    attr_reader :text

    def wall_data(wall_text)
      wall_text.chars.map { |e| CONVEYOR_SYMBOLS[e] }
    end
  end
end
```

Greg hadn’t completed it but he stated how impressed he was that it was fairly easy

Shane Emmons revisited a Sinatra project using Noir [emmons.io] (https://github.com/semmons99/emmons.io) and pointed out some views where he had done some work with [Hiccup] (https://github.com/weavejester/hiccup), a Clojure based templating language: Shane, along with some others, looked at [4clojure] (http://www.4clojure.com/) a Clojure problem site sort of like Puzzlenode or Ruby Koans. 

Carol Nichols mentioned a talk by Stuart Holloway on the [impedence mismatch] (http://www.infoq.com/presentations/Impedance-Mismatch) between objects and relational databases lead to a discussion about [Datomic] (http://www.datomic.com/) but no one had much experience with it. Finally there was a general discussion about functional v object oriented programming.  We ended with a video of live programming using Clojure, Emacs and Supercollider in [Overtone] (http://vimeo.com/22798433)

It was an interesting experience. It sounds like most of the participants intend to explore Clojure further but not formal plans were made.