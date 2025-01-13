---
title: Documentation
description: How to use 11ty WISP
---
{% for s in collections.docs %}
<div class="grid">
<div><h3><a href="{{s.url}}">{{s.data.title}}</a></h3></div>
<div><p>{{s.data.description}}</div>
</div><hr/>
{% endfor %}
