---
layout: default
title: "Projects"
---

<style>
  .projects-tagline { color: var(--text-muted); margin: 0.25rem 0 2rem; font-size: 1rem; }
  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    gap: 1.2rem;
  }
  .project-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.15s, border-color 0.15s;
  }
  .project-card:hover {
    border-color: var(--link);
    box-shadow: var(--shadow);
  }
  .project-name {
    font-size: 1.05rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .project-desc {
    color: var(--text-muted);
    font-size: 0.88rem;
    line-height: 1.6;
    flex: 1;
    margin-bottom: 1rem;
  }
  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-bottom: 0.9rem;
  }
  .tag {
    background: var(--code-bg);
    border: 1px solid var(--border);
    border-radius: 4px;
    font-size: 0.73rem;
    padding: 0.1rem 0.45rem;
    color: var(--text-muted);
  }
  .project-link { font-size: 0.85rem; font-weight: 500; }
</style>

# Projects

<p class="projects-tagline">current projects I'm working on</p>

<div class="project-grid">

  <div class="project-card">
    <div class="project-name">SkibidiQL</div>
    <p class="project-desc">A query language compiler that replaces SQL keywords with gen-z slang. Full pipeline: lexer, parser, AST, optimizer.</p>
    <div class="project-tags">
      <span class="tag">C++17</span>
      <span class="tag">Compilers</span>
      <span class="tag">SQLite</span>
    </div>
    <a href="https://github.com/maybe-yesterday/skibidi-ql" class="project-link">GitHub →</a>
  </div>

  <div class="project-card">
    <div class="project-name">maybe-yesterday.github.io</div>
    <p class="project-desc">This site. Jekyll blog with a nyan cat easter egg, because of course.</p>
    <div class="project-tags">
      <span class="tag">Jekyll</span>
      <span class="tag">CSS</span>
      <span class="tag">nyan cat</span>
    </div>
    <a href="https://github.com/maybe-yesterday/maybe-yesterday.github.io" class="project-link" target="_blank" rel="noopener">GitHub →</a>
  </div>

</div>
