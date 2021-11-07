---
layout: base.html
eleventyNavigation:
  key: Блог
  order: 2
title: Мой блог
---
{%- import "components/article.html" as article -%}

{% for post in collections.blog | reverse %}
{{ article.suggestion(post) }}
{% endfor %}
