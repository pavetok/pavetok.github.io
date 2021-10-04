---
title: Transaction Types
layout: text.html
tags: work
---
{% for type in collections.transactionTypes %}
### [{{ type.data.title }}]({{ type.url }})
{% endfor %}
