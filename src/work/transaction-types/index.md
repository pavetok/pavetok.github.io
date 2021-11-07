---
layout: article.html
tags: work
# data
title: Трансакционные типы
teaser: Нотация и примеры описания трансакций
---
{%- import "components/article.html" as article -%}

{% for type in collections.transaction %}
{{ article.suggestion(type) }}
{% endfor %}
