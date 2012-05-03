---
title: Activities
layout: post
---

## Activities

{% for activity in site.categories.activities %}
- [{{ activity.title }} - {{activity.date | date: "%Y %B %d"}}]({{activity.url}})
{% endfor %}