---
layout: post.html
title: Основы кейс-дизайна и рыбной ловли
teaser: >-
  Кейс-дизайн на примере сложной, но увлекательной предметной области
cover:
  path: boring-fish.jpg
  cap: Выражение \"лица\" рыбы, которая хорошо спряталась, но её всё равно соблазнили изящной подачей
date: 2022-02-05
---
{%- import "components/page.html" as page -%}
{%- import "components/section.html" as section -%}

{{ page.cover(cover) }}

Выбор _подачи_, выбор _места/времени_ и выбор _приманки_ - ключевые аспекты любой рыбалки.
Мы подробно разберем тему выбора подачи, лишь мельком затронем тему выбора места/времени и тему выбора приманки.

Любой кейс-дизайн начинается с _вариантивности_.

{{ section.title("Вариативность и кейсы") }}

Вариативность можно начинать набрасывать с любого конца. Обычно всё начинается откуда-то с середины.
Берем любой _параметр_<sup>1</sup>, который может варьироваться и пытаемся
перечислить для него все известные нам варианты _значений_<sup>2</sup>.

Одним из ключевых параметров для подачи является _тип водоёма_.
Бывают водоёмы со стоячей водой, а бывают - с течением.
В стоячих водоёмах рыба, как правило, передвигается в поисках корма.
В водоёмах с течением рыба зачастую стоит в ожидании корма, который приносится потоком.

<table>
  <tbody>
    <tr>
      <th scope="row">Тип водоёма</th>
      <td class="list">
        <ol>
          <li>Со стоячей водой</li>
          <li>С течением</li>
        </ol>
      </td>
    </tr>
  </tbody>
  <caption class="caption">
    Вариантивность для одного параметра
  </caption>
</table>

Следующим важным параметром является _тип кормового объекта_. Кормовой объект может быть активным или пассивным.
Активные объекты способны перемещаться самостоятельно в воде и даже сопротивляться потоку.
Пассивные - наоборот. Например, мальки, некоторые жуки и раки являются активными кормовыми объектами,
а насекомые (имаго), черви, личинки (нимфы) и растительность (чаще плоды) - пассивными.

<table>
  <tbody>
    <tr>
      <th scope="row">Тип водоёма</th>
      <td class="list">
        <ol>
          <li>Со стоячей водой</li>
          <li>С течением</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">Тип кормового объекта</th>
      <td class="list">
        <ol>
          <li>Активный</li>
          <li>Пассивный</li>
        </ol>
      </td>
    </tr>
  </tbody>
  <caption class="caption">
    Вариантивность для двух параметров
  </caption>
</table>

Last but not least параметром является _горизонт кормёжки_.
Обычно рыба кормится в определенном водном горизонте и не покидает его границ.
Время от времени (или от места к месту) горизонт кормёжки может меняться, но это отдельная тема.

<table>
  <tbody>
    <tr>
      <th scope="row">Тип водоёма</th>
      <td class="list">
        <ol>
          <li>Со стоячей водой</li>
          <li>С течением</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">Тип кормового объекта</th>
      <td class="list">
        <ol>
          <li>Активный</li>
          <li>Пассивный</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">Горизонт кормёжки</th>
      <td class="list">
        <ol>
          <li>С поверхности</li>
          <li>Под поверхностью</li>
          <li>В толще</li>
          <li>В придонном слое</li>
          <li>Со дна</li>
        </ol>
      </td>
    </tr>
  </tbody>
  <caption class="caption">
    Базовая вариантивность
  </caption>
</table>

Получив некоторую базовую вариативность пробуем набросать кейсы.
Для этого мы механически выписываем все возможные сочетания значений из разных разрезов.
Начинать удобнее всего с наиболее селективных разрезов, в которых меньше всего вариантов.

<table>
  <thead>
    <tr>
      <th scope="col">Тип водоёма</th>
      <th scope="col">Тип кормового объекта</th>
      <th scope="col">Горизонт кормёжки</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="10">Со стоячей водой</td>
      <td rowspan="5">Активный</td>
      <td>С поверхности</td>
    </tr>
    <tr>
      <td>Под поверхностью</td>
    </tr>
    <tr>
      <td>В толще</td>
    </tr>
    <tr>
      <td>В придонном слое</td>
    </tr>
    <tr>
      <td>Со дна</td>
    </tr>
    <tr>
      <td rowspan="5">Пассивный</td>
      <td>С поверхности</td>
    </tr>
    <tr>
      <td>Под поверхностью</td>
    </tr>
    <tr>
      <td>В толще</td>
    </tr>
    <tr>
      <td>В придонном слое</td>
    </tr>
    <tr>
      <td>Со дна</td>
    </tr>
    <tr>
      <td rowspan="10">С течением</td>
      <td rowspan="5">Активный</td>
      <td>С поверхности</td>
    </tr>
    <tr>
      <td>Под поверхностью</td>
    </tr>
    <tr>
      <td>В толще</td>
    </tr>
    <tr>
      <td>В придонном слое</td>
    </tr>
    <tr>
      <td>Со дна</td>
    </tr>
    <tr>
      <td rowspan="5">Пассивный</td>
      <td>С поверхности</td>
    </tr>
    <tr>
      <td>Под поверхностью</td>
    </tr>
    <tr>
      <td>В толще</td>
    </tr>
    <tr>
      <td>В придонном слое</td>
    </tr>
    <tr>
      <td>Со дна</td>
    </tr>
  </tbody>
  <caption class="caption">
    Базовые кейсы
  </caption>
</table>

Всего у нас получилось 20 кейсов. Немало! Если, например, добавить в вариативность ещё один
параметр с хотя бы двумя значениями, то кейсов станет уже 40. В рыбной ловле, как и в любой другой
деятельности, всевозможных параметров вагон и маленькая тележка. Лавинообразный рост количества кейсов
при добавлении новых параметров/значений часто называют _комбинаторным взрывом_.
Как следствие, основная задача кейс-дизайнера - так подобрать параметры и значения,
чтобы покрыть все важные кейсы и при этом избежать комбинаторного взрыва. 

{{ section.title("Ситуации и подачи") }}

Мы получили 20 ситуаций, для которых требуется как минимум 20 вариантов подачи.

С одной стороны, под каждый _тип подачи_ требуется определённая _снасть_,
которая состоит из _удилища_<sup>3</sup>, _оснастки_ и _приманки_.
Бывают удилища строго специализированные под один тип подачи, а бывают более универсальные удилища,
которые позволяют с разными оснастками/приманками выполнять несколько вариантов подачи.

С другой стороны, рыба может реагировать лишь на один и только один тип подачи, а может - на несколько разных.
Чем рыба "активнее", тем на большее количество вариантов подачи она реагирует.

В стоячих водоёмах пассивными приманками имитируют падение кормовых объектов, активными приманками - движение.
Как следствие, пассивные приманки обычно забрасывают в места стоянки мирной рыбы, активные - хищной.
В зависимости от горизонта кормёжки пассивными имитируют падение на поверхность, на дно или "парение" в толще,
активными - движение по/у поверхности, по/у дна или в толще.

В водоёмах с течением пассивными приманками имитируют перенос кормовых объектов потоком, активными - сопротивление потоку.
Как следствие, пассивные приманки обычно забрасывают вверх по течению, активные - вниз по течению.
В зависимости от горизонта кормёжки пассивными имитируют перенос по/у поверхности, по/у дна или в толще,
активными - сопротивление по/у поверхности, по/у дна или в толще.

Так как же подбирать подачу? По-разному...

Кто-то отталкивается от конкретного водоёма, затем уже подстраивается по снастям.
Кто-то отталкивается от любимой снасти, заточенной под определенный спектр подач (aka стиль ловли).
Кто-то предпочитает ловить хищника, а кто-то - мирную рыбу. Кто-то гонится за эмоциями и, например,
выбирает зрелищную ловлю с поверхности или трофейную ловлю со дна. Самые продвинутые рыболовы
ориентируются на предпочтения рыбы в конкретном месте и в конкретное время (тема подбора
места/времени заслуживает отдельной статьи).

<hr class="solid">

<sup>1</sup> Иногда я буду называть такие параметры _разрезами_.  
<sup>2</sup> Есть много техник выбора только важных значений, но мы не будем сейчас на этом заострять внимание.  
<sup>3</sup> Катушку (при наличии) считаем частью удилища.  
