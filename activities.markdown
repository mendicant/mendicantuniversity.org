---
title: Activities
layout: post
---

## Activities

<ul>
{% for activity in site.categories.activities %}
  <li>
    <a href="{{activity.url}}">
      {{ activity.title }} - {{activity.date | date: "%Y %B %d"}}
    </a>
  </li>
{% endfor %}
</ul>