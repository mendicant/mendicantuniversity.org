---
title: "Shutting Down Mendicant's Tech"
category: updates
layout: post
tags: frontpage
---

_This is a repost of [Jordan Byron's reflection](http://blog.jordanbyron.com/post/43750754165/mendicant-tech-closed-for-business) on sunsetting Mendicant's technical infrastructure_

A week ago today I sent [an email](http://lists.mendicantuniversity.org/pipermail/community-mendicantuniversity.org/Week-of-Mon-20130211/000320.html) the the Mendicant disucssion list announcing my plans to sunset the organization's aging technical infrastructure. Many of the resources earmarked to be closed (university-web, community, anita, mendibot) had not been active for close to a year. One site, however, has seen continuing use despite the fact we've neglected it.

Six individuals [called out support](http://lists.mendicantuniversity.org/pipermail/community-mendicantuniversity.org/Week-of-Mon-20130211/thread.html#start) for [PuzzleNode](http://www.puzzlenode.com), including [James Gray](https://twitter.com/JEG2/status/302592851794083840) (@JEG2). A small group of us rallied together and came up with [a plan to move PuzzleNode onto heroku's servers](https://github.com/mendicant-original/puzzlenode/issues/90). Three pull requests and a few days later the migration was complete. I'd like to again thank everyone who helped make that happen. I really didn't want to see PuzzleNode go and I am glad that there are others who feel the same way.

So while we did save one app there were several others which, I am sad to say, have been shut down. Let's take a quick look at each of them and discuss why we created them in the first place:

## University Web

[University Web](https://github.com/mendicant-original/university-web) is a Rails application which was the home of (Ruby) Mendicant University for the better part of two years. I gave a fairly decent overview of the app in [my 2011 Ignite RailsConf talk about RbMU Tech](http://www.youtube.com/watch?v=THKXtfaLAIQ). Here are some fun , and totally pointless, facts about the project:

First Commit: __July 27, 2010 by Greg__ <br />
Number of Contributors: __26__ <br />
Number of Commits (on master): __1,242__ (989 of those mine!) <br />

## Community

[Community](https://github.com/mendicant-original/community) is another one of Mendicant's Rails applications. It was designed to give our students and staff a place to share the things they've been working on as well as links to other works that they find interesting. Essentially it was Mendicant's personal version of [RubyFlow](http://www.rubyflow.com/). I've kept a static archive of the site online at [community.mendicantuniversity.org](http://community.mendicantuniversity.org). More pointless stats. Yay!

First Commit: __November 23, 2011 by Me__ <br />
Number of Contributors: __10__ <br />
Number of Commits (on master): __296__ <br />

## IRC Bots

Mendicant also ran two IRC bots: [Mendibot](https://github.com/mendicant-original/mendibot) and [Anita](https://github.com/mendicant/anita). Mendibot, not to be confused with [Medibot](http://www.youtube.com/watch?v=5CNiBFrEnWk), fed logs into University Web, helped us with timezone math, plus a bunch of other fun little features. Anita was slated to replace Mendibot and had its own sinatra backend which could display transcripts in html, markdown, and json. 

---

While it does make me a little sad to see these applications put to pasture I find solace in the fact that they helped so many people realize their true potential. I couldn't be more proud of what we accomplished with Mendicant and I am so pleased to see former unicorns doing great things out in the world. What [the future holds for Mendicant](http://lists.mendicantuniversity.org/pipermail/community-mendicantuniversity.org/Week-of-Mon-20130211/000328.html) is yet to be seen, but I know I can't wait to be a part of it.

&lt;3 Jordan
