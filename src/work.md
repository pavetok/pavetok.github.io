---
layout: base.html
eleventyNavigation:
  key: Проекты
  order: 3
title: Мои проекты
---
{%- import "components/article.html" as article -%}

{% for project in collections.projects %}
{{ article.suggestion(project) }}
{% endfor %}
