---
layout: default
title: "B-Logs"
---

<style>
  .blog-tagline { color: var(--text-muted); margin: 0.25rem 0 2rem; font-size: 1rem; }
  .post-list { list-style: none; padding: 0; margin: 0; }
  .post-list li {
    padding: 1.25rem 0;
    border-bottom: 1px solid var(--border);
  }
  .post-list li:last-child { border-bottom: none; }
  .post-list h2 { font-size: 1.1rem; margin: 0 0 0.2rem; }
  .post-list h2 a { color: var(--text); }
  .post-list h2 a:hover { color: var(--link); text-decoration: none; }
  .post-meta { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.35rem; }
  .post-excerpt { color: var(--text-muted); font-size: 0.9rem; margin: 0; }
</style>

# B) Logs

<p class="blog-tagline">thoughts, paper notes, and the occasional tangent.</p>

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <div class="post-meta">{{ post.date | date: "%B %d, %Y" }}</div>
      <h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
      <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 130 }}</p>
    </li>
  {% endfor %}
</ul>
