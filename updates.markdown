---
title: Updates
layout: list
header:
  <link rel="alternate" type="application/rss+xml"
  title="Updates RSS feed for Mendicant University"
  href="/updates.xml" />
---

<ul class="posts">
{% for update in site.categories.updates %}
  <li>
    <a href="{{update.url}}">
      {{ update.title }} - {{update.date | date: "%Y %B %d"}}
    </a>
  </li>
{% endfor %}
</ul>
