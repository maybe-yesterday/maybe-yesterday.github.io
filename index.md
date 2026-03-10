---
layout: default
---

<style>
  .hero {
    text-align: center;
    padding: 4.5rem 0 2rem;
  }
  .hero-icon {
    font-size: 4rem;
    display: block;
    margin-bottom: 1rem;
    animation: float 3s ease-in-out infinite;
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-8px); }
  }
  .hero-name {
    font-size: 2.1rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    margin-bottom: 0.4rem;
  }
  .hero-bio {
    color: var(--text-muted);
    font-size: 0.97rem;
    margin-bottom: 0.2rem;
  }
  .hero-aside {
    color: var(--text-muted);
    font-size: 0.82rem;
    font-style: italic;
    margin-bottom: 2.5rem;
  }
  .quick-links {
    display: flex;
    gap: 0.7rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  .ql-pill {
    display: inline-block;
    padding: 0.45rem 1.15rem;
    border: 1.5px solid var(--border);
    border-radius: 2rem;
    font-size: 0.88rem;
    color: var(--text);
    transition: border-color 0.15s, color 0.15s;
  }
  .ql-pill:hover {
    border-color: var(--link);
    color: var(--link);
    text-decoration: none;
  }
</style>

<div class="hero">
  <span class="hero-icon">✨</span>
  <h1 class="hero-name">hi, i'm Ming Yan</h1>
  <p class="hero-bio">UW CS+Math</p>
  <p class="hero-aside">(you found my corner of the internet, but please don't stalk me.)</p>
  <div class="quick-links">
    <a href="/blog" class="ql-pill">B-Logs</a>
    <a href="/projects" class="ql-pill">Projects</a>
    <a href="https://github.com/maybe-yesterday" class="ql-pill" target="_blank" rel="noopener">GitHub</a>
  </div>
</div>
