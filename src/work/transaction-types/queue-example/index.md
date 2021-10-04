---
title: Queue Example
layout: base.html
tags: transactionTypes
---
{%- from "partials/diagram.html" import diagram -%}

{{ diagram("diagrams/queue-example/transaction-before.svg") }}
{{ diagram("diagrams/queue-example/transaction-ongoing.svg") }}
{{ diagram("diagrams/queue-example/transaction-after.svg") }}
