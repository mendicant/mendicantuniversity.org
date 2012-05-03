---
title: Updates
layout: post
---

## Updates

{% for update in site.categories.updates %}
- [{{ update.title }} - {{update.date | date: "%Y %B %d"}}]({{update.url}})
{% endfor %}