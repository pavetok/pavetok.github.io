---
layout: base.html
eleventyNavigation:
  key: Главная
  order: 1
title: Главная
date: 2021-11-07
tags: [index]
---
{%- import "components/article.html" as article -%}

## Привет

Меня зовут Павел Ветохин и я являюсь разработчиком софта. В свободное время я интересуюсь
сессионными типами, workflow-движками, безопасностью на основе возможностей (capability-based
security) и тонной других около айтишных тем. Также меня увлекает институциональная
экономика (особенно трансакции институтов обмена).

На текущий момент я живу в России и работаю бэкенд инженером в
компании [Nexign](https://nexign.com).

### Самые свежие посты

{% for page in collections.posts | reverse | limit(3) %}
<ul>
  <li>
    {{ article.suggestion(page) }}
  </li>
</ul>
{% endfor %}

Остальные посты можно найти в [блоге](/blog/) либо
подписаться на рассылку по [RSS](/feed.xml).

### Самые свежие публикации

{% for page in collections.publications | reverse | limit(3) %}
<ul>
  <li>
    {{ article.suggestion(page) }}
  </li>
</ul>
{% endfor %}

Остальные публикации можно найти в разделе [проектов](/work/).

### Профили в интернете

* [GitHub](https://github.com/pavetok)
* [Facebook](https://www.facebook.com/pavel.vetokhin)
* [Twitter](https://twitter.com/pavetok)
