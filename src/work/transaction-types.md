---
layout: article.html
title: Трансакционные типы
teaser: Нотация и примеры описания трансакций
tags: [projects]
---
{%- import "components/page.html" as page -%}

{% for article in collections.transactionTypes %}
{{ page.suggestion(article) }}
{% endfor %}
