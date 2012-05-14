---
title: Activities
layout: list
header:
  <link rel="alternate" type="application/rss+xml"
  title="Activities RSS feed for Mendicant University"
  href="/activities.xml" />
---

<ul class="posts">
{% for activity in site.categories.activities %}
  <li>
    <a href="{{activity.url}}">
      {{ activity.title }} - {{activity.date | date: "%Y %B %d"}}
    </a>
  </li>
{% endfor %}
</ul>
