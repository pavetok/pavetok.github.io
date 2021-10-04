---
title: My Work
layout: text.html
eleventyNavigation:
  key: Work
  order: 1
---
{% for project in collections.work %}
### [{{ project.data.title }}]({{ project.url }})
{% endfor %}
