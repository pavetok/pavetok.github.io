---
layout: article.html
eleventyNavigation:
  key: Главная
  order: 1
title: Привет
date: 2021-11-07
tags: [index]
---
{%- import "components/article.html" as article -%}
{%- import "components/post.html" as post -%}
{%- import "components/section.html" as section -%}

Меня зовут Павел Ветохин и я являюсь разработчиком софта. В свободное от забот время я интересуюсь
сессионными типами, workflow-движками, безопасностью на основе возможностей (capability-based
security) и тонной других около айтишных тем. Также меня увлекает институциональная
экономика (особенно трансакции институтов обмена).

На текущий момент я живу в России и работаю бэкенд инженером в
компании [Nexign](https://nexign.com).

{{ section.title("Самые свежие посты") }}

{% for page in collections.posts | reverse | limit(3) %}
<ul>
  <li>
    {{ post.suggestion(page) }}
  </li>
</ul>
{% endfor %}

Остальные посты можно найти в [блоге](/blog/) либо
подписаться на рассылку по [RSS](/feed.xml).

{{ section.title("Самые свежие публикации") }}

{% for page in collections.publications | reverse | limit(3) %}
<ul>
  <li>
    {{ article.suggestion(page) }}
  </li>
</ul>
{% endfor %}

Остальные публикации можно найти в разделе [проектов](/work/).

{{ section.title("Профили в интернете") }}

* [GitHub](https://github.com/pavetok)
* [Facebook](https://www.facebook.com/pavel.vetokhin)
* [Twitter](https://twitter.com/pavetok)
