---
layout: default
---

<style>
  .home-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 70vh;
  }
  .home-icon {
    font-size: 5rem;
    margin-bottom: 1rem;
  }
  .home-title {
    margin-bottom: 0.5rem;
  }
  .home-link {
    font-size: 1.2rem;
  }
</style>

<div class="home-container">
  <div class="home-icon">✨</div>
  <h1 class="home-title">{{ Corner Suite }}</h1>
  <p>{{ site.description }}</p>
  <a href="/blog" class="home-link"> B-Logs →</a>
</div>