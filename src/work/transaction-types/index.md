---
layout: article.html
title: Трансакционные типы
teaser: Нотация и примеры описания трансакций
tags: [work]
---
{%- import "components/article.html" as article -%}

{% for type in collections.transaction %}
{{ article.suggestion(type) }}
{% endfor %}
