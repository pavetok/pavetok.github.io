---
layout: base.html
eleventyNavigation:
  key: Блог
  order: 2
title: Блог
---
{%- import "components/post.html" as post -%}

{% for page in collections.posts | reverse %}
{{ post.suggestion(page) }}
{% endfor %}
