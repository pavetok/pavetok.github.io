---
layout: base.html
eleventyNavigation:
  key: Проекты
  order: 3
title: Проекты
---
{%- import "components/page.html" as page -%}

{%- for key, project in projects -%}
  {%- call page.section(project) -%}
    {%- for article in collections[key] -%}
      <ul>
        <li>
          {{ page.suggestion(article) -}}
        </li>
      </ul>
    {%- endfor -%}
  {%- endcall -%}
{%- endfor -%}
