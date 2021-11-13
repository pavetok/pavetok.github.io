---
layout: base.html
eleventyNavigation:
  key: Проекты
  order: 3
title: Проекты
---
{%- import "components/page.html" as page -%}

{% for project in collections.projects %}
{{ page.suggestion(project) }}
{% endfor %}
