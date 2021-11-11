---
layout: article.html
title: Простейший пример с очередью
teaser: Простейший пример передачи и получения доступа к некоторому ресурсу
cover:
  path: diagrams/transaction-before.svg
  cap: Перед трансакцией
date: 2021-11-07
tags: [transactionTypes, publications]
---
{%- import "components/article.html" as article -%}

{% call article.text() -%}
Перед трансакцией Алиса в любой момент может
либо воспользоваться очередью, либо передать её Бобу.
Боб в некоторый момент может получить доступ к очереди.
{%- endcall %}

{% call article.diagram(cover.path) -%}
{{ cover.cap }}
{%- endcall %}

{% call article.text() -%}
Во время трансакции Алиса уже лишается доступа к очереди.
Боб по-прежнему не имеет доступа к очереди.
{%- endcall %}

{% call article.diagram("diagrams/transaction-ongoing.svg") -%}
Во время трансакции
{%- endcall %}

{% call article.text() -%}
После трансакции только Боб может пользоваться очередью,
но он не может передавать её кому-либо.
{%- endcall %}

{% call article.diagram("diagrams/transaction-after.svg") -%}
После трансакции
{%- endcall %}
