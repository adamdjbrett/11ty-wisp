---
title: Documentation
description: How to use 11ty WISP
---
{% for s in collections.docs %}
<h3><a href="{{s.url}}">{{s.data.title}}</a></h3><hr/>
{% endfor %}
