---
layout: base.html
eleventyNavigation:
  key: Главная
  order: 1
# data
title: Главная
---
{%- import "components/article.html" as article -%}

## Привет

Меня зовут Павел Ветохин и я являюсь разработчиком софта. В свободное время я интересуюсь сессионными типами,
workflow движками, безопасностью на основе возможностей (capability-based security) и тонной других около айтишных тем.
Также меня увлекает институциональная экономика (особенно трансакции институтов обмена).

На текущий момент я живу в России и работаю бэкенд инженером в компании [Nexign](https://nexign.com).

### Самые свежие посты

Ниже приведено несколько самых свежих постов из моего блога. 
С остальными постами можно познакомиться по [ссылке](/blog/) либо
подписаться на рассылку по [RSS](/feed.xml).

{% for page in collections.blog | reverse | limit(3) %}
<ul>
  <li>
    {{ article.suggestion(page) }}
  </li>
</ul>
{% endfor %}

### Самые свежие публикации

Ниже приведено несколько самых свежих публикаций по моим проектам.
С остальными публикациями по каждому из проектов можно познакомиться по [ссылке](/work/).

{% for page in collections.project | reverse | limit(3) %}
<ul>
  <li>
    {{ article.suggestion(page) }}
  </li>
</ul>
{% endfor %}

### Профили в интернете

* [GitHub](https://github.com/pavetok)
* [Facebook](https://www.facebook.com/pavel.vetokhin)
* [Twitter](https://twitter.com/pavetok)
