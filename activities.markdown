---
title: Activities
layout: list
header:
  <link rel="alternate" type="application/rss+xml"
  title="Activities RSS feed for Mendicant University"
  href="/activities.xml" />
---

<ul class="posts">
{% for post in site.categories.activities %}
  {% include post.html %}
{% endfor %}
</ul>
