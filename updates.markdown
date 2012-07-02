---
title: Updates
layout: list
header:
  <link rel="alternate" type="application/rss+xml"
  title="Updates RSS feed for Mendicant University"
  href="/updates.xml" />
---

<ul class="posts">
{% for post in site.categories.updates %}
  {% include post.html %}
{% endfor %}
</ul>
