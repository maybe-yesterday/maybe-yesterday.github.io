---
layout: default
title: "Journal"
---

# B) Logs

<header>
    <nav>
        <a href="/">Home</a>
        <a href="/blog">B-Logs</a>
      </nav>
</header>

Here you'll find a collection of my thoughts and reflections.

<hr>

<ul style="list-style: none; padding-left: 0;">
  {% for post in site.posts %}
    <li style="margin-bottom: 2rem;">
      <h2 style="margin-bottom: 0.5rem;"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
      <p style="margin-top: 0; color: #555;">{{ post.excerpt }}</p>
      <small>Posted on {{ post.date | date: "%B %d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>