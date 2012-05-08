---
title: Updates
layout: post
---

<ul>
{% for update in site.categories.updates %}
  <li>
    <a href="{{update.url}}">
      {{ update.title }} - {{update.date | date: "%Y %B %d"}}
    </a>
  </li>
{% endfor %}
</ul>