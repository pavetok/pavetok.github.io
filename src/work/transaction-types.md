---
layout: article.html
title: Трансакционные типы
teaser: Нотация и примеры описания трансакций
tags: [projects]
---
{%- import "components/article.html" as article -%}

{% for publication in collections.transactionTypes %}
{{ article.suggestion(publication) }}
{% endfor %}
