---
layout: base.html
eleventyNavigation:
  key: Проекты
  order: 3
# data
title: Мои проекты
---
{%- import "components/article.html" as article -%}

{% for project in collections.work %}
{{ article.suggestion(project) }}
{% endfor %}
