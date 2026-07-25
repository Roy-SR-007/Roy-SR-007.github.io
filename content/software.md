---
title: "Software"
layout: single
showToc: false
hideMeta: true
url: "/software/"
slug: "software"
---

<style>
/* =========================================================
   SOFTWARE PAGE — redesigned
   ========================================================= */

html:has(head link[rel="canonical"][href$="/software/"]) .post-content {
  border-left: none !important;
  padding-left: 0 !important;
}

.nk-teach {
  --accent: var(--nk-accent, #500000);
  --card-bg: color-mix(in srgb, var(--nk-paper, #fff) 92%, white);
  --card-border: var(--nk-line, rgba(17,24,39,.12));
}
body.dark .nk-teach {
  --accent: #ddd8d8;
  --card-bg: color-mix(in srgb, var(--nk-paper, #111) 88%, black);
}

.nk-timeline { margin-top: .5rem; }
.nk-item     { margin: 0 0 .9rem 0; }

/* ── Platform / category badges ── */
.nk-cat {
  display: inline-flex;
  align-items: center;
  padding: .14rem .52rem;
  border-radius: 999px;
  font-size: .68rem;
  font-weight: 700;
  letter-spacing: .04em;
  text-transform: uppercase;
  border: 1px solid transparent;
  margin-bottom: .5rem;
}
.nk-cat--github { background:#f5f0ff; color:#8250df; border-color:#d2b8ff; }
.nk-cat--cran   { background:#e8f0fb; color:#276dc3; border-color:#b3caf0; }

body.dark .nk-cat--github { background:color-mix(in srgb,#8250df 14%,transparent); color:#c4a0f5; border-color:color-mix(in srgb,#8250df 32%,transparent); }
body.dark .nk-cat--cran   { background:color-mix(in srgb,#276dc3 14%,transparent); color:#7eb3ef; border-color:color-mix(in srgb,#276dc3 32%,transparent); }

/* Icon inside badge */
.nk-cat svg.sw-icon {
  width: .85rem;
  height: .85rem;
  display: inline-block;
  vertical-align: middle;
  margin-right: .28rem;
  flex-shrink: 0;
  fill: currentColor;
}
.nk-cat { display: inline-flex; align-items: center; gap: 0; }

/* ── Version + year chips ── */
.nk-ver {
  display: inline-flex;
  align-items: center;
  padding: .1rem .4rem;
  border-radius: 5px;
  background: color-mix(in srgb, var(--nk-ink) 5%, transparent);
  border: 1px solid var(--nk-line);
  font-family: var(--font-mono, ui-monospace, monospace);
  font-size: .68rem;
  font-weight: 600;
  color: var(--nk-muted);
  margin-left: .4rem;
  vertical-align: middle;
  letter-spacing: .03em;
}
.nk-year {
  display: inline-flex;
  align-items: center;
  padding: .1rem .4rem;
  border-radius: 5px;
  background: color-mix(in srgb, var(--nk-accent) 8%, transparent);
  border: 1px solid color-mix(in srgb, var(--nk-accent) 22%, transparent);
  font-family: var(--font-mono, ui-monospace, monospace);
  font-size: .68rem;
  font-weight: 600;
  color: var(--nk-accent);
  margin-left: .25rem;
  vertical-align: middle;
  letter-spacing: .03em;
}
body.dark .nk-year {
  background: color-mix(in srgb, #ddd8d8 8%, transparent);
  border-color: color-mix(in srgb, #ddd8d8 22%, transparent);
  color: #ddd8d8;
}

/* ── Card ── */
.nk-card {
  position: relative;
  cursor: pointer;
  outline: none;
  border-radius: 14px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-top: 3px solid var(--card-border);
  box-shadow: none;
  overflow: hidden;
  transition: transform .16s ease, box-shadow .18s ease, border-color .18s ease;
}
.nk-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(17,24,39,.07);
  border-color: color-mix(in srgb, var(--accent) 24%, transparent) !important;
}
.nk-card:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--accent) 55%, transparent);
  outline-offset: 3px;
}
body.dark .nk-card { background: var(--card-bg); }

.nk-card--github { border-top-color: #8250df !important; }
.nk-card--cran   { border-top-color: #276dc3 !important; }

/* ── Flip mechanics ── */
.nk-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 116px;
  transform-style: preserve-3d;
  transition: transform .45s ease;
  will-change: transform;
}
.nk-card.is-flipped .nk-card-inner { transform: rotateX(180deg); }

.nk-face {
  position: relative;
  padding: 1rem 1.1rem 2.4rem;
  border-radius: 14px;
  background: transparent;
  border: none !important;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.nk-face.front { transform: rotateX(0); }
.nk-face.back  {
  transform: rotateX(180deg);
  position: absolute;
  inset: 0;
}
.nk-card:not(.is-flipped) .back { pointer-events: none; }
.nk-card.is-flipped .front      { pointer-events: none; }

.nk-card:hover .nk-face.front,
.nk-card.is-flipped .nk-face.back {
  background: color-mix(in srgb, var(--accent) 5%, transparent);
}

/* ── Flip timer drain bar ── */
.nk-card.is-flipped::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 100%;
  border-radius: 0 0 14px 14px;
  transform-origin: left center;
  background: color-mix(in srgb, var(--accent, #500000) 55%, transparent);
  animation: nk-flip-drain 5s linear forwards;
  z-index: 10;
  pointer-events: none;
}
body.dark .nk-card.is-flipped::before {
  background: color-mix(in srgb, #ddd8d8 45%, transparent);
}

/* ── Flip cue ── */
.nk-flip-cue {
  position: absolute;
  bottom: .65rem;
  right: .95rem;
  font-size: .7rem;
  font-weight: 600;
  letter-spacing: .05em;
  color: var(--accent);
  opacity: .4;
  transition: opacity .2s ease;
  user-select: none;
  text-transform: uppercase;
}
.nk-card:hover .nk-flip-cue { opacity: .85; }
body.dark .nk-flip-cue { color: #ddd8d8; }

/* ── Typography ── */
.nk-title {
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: .3rem;
}
.nk-desc       { font-size: .95rem; line-height: 1.52; opacity: .88; }
.nk-duty-title { font-size: .95rem; font-weight: 750; margin-bottom: .3rem; }
.nk-duty       { font-size: .92rem; line-height: 1.52; opacity: .88; }

/* ── Quick-link pills on card front ── */
.sw-links {
  display: flex;
  flex-wrap: wrap;
  gap: .4rem;
  margin-top: .85rem;
}
.sw-link {
  display: inline-flex;
  align-items: center;
  padding: .2rem .65rem;
  border-radius: 999px;
  border: 1px solid var(--nk-line);
  font-size: .75rem;
  font-weight: 600;
  letter-spacing: .02em;
  text-decoration: none !important;
  color: var(--nk-muted) !important;
  background: transparent;
  transition: border-color .18s ease, color .18s ease, background .18s ease, transform .14s ease;
}
.sw-link:hover {
  border-color: color-mix(in srgb, var(--accent) 50%, transparent);
  color: var(--accent) !important;
  background: color-mix(in srgb, var(--accent) 6%, transparent);
  transform: translateY(-1px);
}
.sw-link::before, .sw-link::after { display: none !important; content: none !important; }

/* ── Author name highlight (matches research page) ── */
.nk-duty strong {
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, var(--nk-ink) 35%, transparent);
  text-underline-offset: 3px;
  text-decoration-thickness: 1.5px;
  text-decoration-style: solid;
}

/* ── Links inside card body ── */
.nk-card a:not(.sw-link) {
  text-decoration: none !important;
  background-image: var(--nk-inkgrad, linear-gradient(#500000,#500000)) !important;
  background-repeat: no-repeat !important;
  background-size: 0% 1.5px !important;
  background-position: 0 100% !important;
  transition: background-size .25s ease !important;
}
.nk-card a:not(.sw-link):hover { background-size: 100% 1.5px !important; }
.nk-card a:not(.sw-link)::before,
.nk-card a:not(.sw-link)::after { content: none !important; display: none !important; }

/* ── Entrance animations ── */
.nk-item .nk-card {
  opacity: 0;
  transform: translateY(10px);
  animation: nk-sw-in .55s ease-out both;
}
.nk-timeline > :nth-child(1) .nk-card { animation-delay: .06s; }
.nk-timeline > :nth-child(2) .nk-card { animation-delay: .14s; }
.nk-timeline > :nth-child(3) .nk-card { animation-delay: .22s; }
.nk-timeline > :nth-child(4) .nk-card { animation-delay: .30s; }
.nk-timeline > :nth-child(5) .nk-card { animation-delay: .38s; }

@keyframes nk-sw-in {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes nk-flip-drain {
  from { transform: scaleX(1); opacity: 1; }
  to   { transform: scaleX(0); opacity: .4; }
}

@media (prefers-reduced-motion: reduce) {
  .nk-item .nk-card {
    opacity: 1 !important;
    transform: none !important;
    animation: none !important;
  }
}
</style>


<div class="nk-teach">
<div class="nk-timeline">

<!-- VaSST -->
<div class="nk-item">
<div class="nk-card nk-card--github" tabindex="0" role="button" aria-pressed="false" aria-label="VaSST">
<div class="nk-card-inner">
  <div class="nk-face front">
    <div>
      <span class="nk-cat nk-cat--github"><svg class="sw-icon" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/></svg>GitHub</span>
      <span class="nk-ver">v2.0.0</span><span class="nk-year">2026</span>
    </div>
    <div class="nk-title">VaSST</div>
    <div class="nk-desc">
      Variational Inference for Symbolic Regression using Soft Symbolic Trees.
      Based on <a href="https://arxiv.org/abs/2602.23561" target="_blank" rel="noopener">arXiv:2602.23561</a>.
    </div>
    <div class="sw-links">
      <a class="sw-link" href="https://github.com/Roy-SR-007/VaSST" target="_blank" rel="noopener">→ GitHub</a>
    </div>
    <div class="nk-flip-cue">↻ Details</div>
  </div>
  <div class="nk-face back">
    <div class="nk-duty-title">Maintainers &amp; Developers</div>
    <div class="nk-duty">
      <strong>Somjit Roy</strong> (Maintainer &amp; Developer) and Pritam Dey (Maintainer &amp; Developer) &mdash;
      <a href="https://github.com/Roy-SR-007/VaSST" target="_blank" rel="noopener">GitHub</a>.
    </div>
    <div class="nk-flip-cue">↺ Back</div>
  </div>
</div>
</div>
</div>

<!-- HierBOSSS -->
<div class="nk-item">
<div class="nk-card nk-card--github" tabindex="0" role="button" aria-pressed="false" aria-label="HierBOSSS">
<div class="nk-card-inner">
  <div class="nk-face front">
    <div>
      <span class="nk-cat nk-cat--github"><svg class="sw-icon" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/></svg>GitHub</span>
      <span class="nk-ver">v1.0.0</span><span class="nk-year">2026</span>
    </div>
    <div class="nk-title">BayeSymX</div>
    <div class="nk-desc">
      Probabilistic Symbolic Regression for Equation Discovery via Operator-induced and Regularized Symbolic Forests.
      Based on <a href="https://arxiv.org/abs/2509.19710" target="_blank" rel="noopener">arXiv:2509.19710</a>.
    </div>
    <div class="sw-links">
      <a class="sw-link" href="https://github.com/Roy-SR-007/BayeSymX" target="_blank" rel="noopener">→ GitHub</a>
    </div>
    <div class="nk-flip-cue">↻ Details</div>
  </div>
  <div class="nk-face back">
    <div class="nk-duty-title">Maintainers &amp; Developers</div>
    <div class="nk-duty">
      <strong>Somjit Roy</strong> (Maintainer &amp; Developer) and Pritam Dey (Maintainer &amp; Developer) &mdash;
      <a href="https://github.com/Roy-SR-007/BayeSymX" target="_blank" rel="noopener">GitHub</a>.
    </div>
    <div class="nk-flip-cue">↺ Back</div>
  </div>
</div>
</div>
</div>

<!-- TAVIE-SSG -->
<div class="nk-item">
<div class="nk-card nk-card--github" tabindex="0" role="button" aria-pressed="false" aria-label="TAVIE-SSG">
<div class="nk-card-inner">
  <div class="nk-face front">
    <div>
      <span class="nk-cat nk-cat--github"><svg class="sw-icon" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/></svg>GitHub</span>
      <span class="nk-ver">v2.0.0</span><span class="nk-year">2026</span>
    </div>
    <div class="nk-title">TAVIE-SSG</div>
    <div class="nk-desc">
      A Generalized Tangent Approximation based Variational Inference Framework for Strongly Super-Gaussian Likelihoods.
      Based on <a href="https://arxiv.org/abs/2504.05431" target="_blank" rel="noopener">arXiv:2504.05431</a>.
    </div>
    <div class="sw-links">
      <a class="sw-link" href="https://anonymous.4open.science/r/__TAVIE-SSG__/" target="_blank" rel="noopener">→ GitHub</a>
    </div>
    <div class="nk-flip-cue">↻ Details</div>
  </div>
  <div class="nk-face back">
    <div class="nk-duty-title">Maintainers &amp; Developers</div>
    <div class="nk-duty">
      <strong>Somjit Roy</strong> (Maintainer &amp; Developer) and Pritam Dey (Maintainer &amp; Developer) &mdash;
      <a href="https://anonymous.4open.science/r/__TAVIE-SSG__/" target="_blank" rel="noopener">GitHub</a>.
    </div>
    <div class="nk-flip-cue">↺ Back</div>
  </div>
</div>
</div>
</div>

<!-- bayesestdft -->
<div class="nk-item">
<div class="nk-card nk-card--cran" tabindex="0" role="button" aria-pressed="false" aria-label="bayesestdft">
<div class="nk-card-inner">
  <div class="nk-face front">
    <div>
      <span class="nk-cat nk-cat--cran">📦 CRAN · R</span>
      <span class="nk-year">2025</span>
    </div>
    <div class="nk-title">bayesestdft</div>
    <div class="nk-desc">
      Estimating the Degrees of Freedom of the Student's t-Distribution under a Bayesian Framework.
      Based on <a href="https://www.mdpi.com/2075-1680/11/9/462" target="_blank" rel="noopener">The Use of a Log-Normal Prior for the Student t-Distribution</a>.
    </div>
    <div class="sw-links">
      <a class="sw-link" href="https://cran.r-project.org/web/packages/bayesestdft/index.html" target="_blank" rel="noopener">→ CRAN</a>
      <a class="sw-link" href="https://github.com/Roy-SR-007/bayesestdft" target="_blank" rel="noopener">→ GitHub</a>
    </div>
    <div class="nk-flip-cue">↻ Details</div>
  </div>
  <div class="nk-face back">
    <div class="nk-duty-title">Maintainers &amp; Developers</div>
    <div class="nk-duty">
      <strong>Somjit Roy</strong> (Maintainer &amp; Developer) and Se Yoon Lee (Contributor) &mdash;
      <a href="https://cran.r-project.org/web/packages/bayesestdft/index.html" target="_blank" rel="noopener">CRAN</a> |
      <a href="https://github.com/Roy-SR-007/bayesestdft" target="_blank" rel="noopener">GitHub</a>.
    </div>
    <div class="nk-flip-cue">↺ Back</div>
  </div>
</div>
</div>
</div>

<!-- GoodFitSBM -->
<div class="nk-item">
<div class="nk-card nk-card--cran" tabindex="0" role="button" aria-pressed="false" aria-label="GoodFitSBM">
<div class="nk-card-inner">
  <div class="nk-face front">
    <div>
      <span class="nk-cat nk-cat--cran">📦 CRAN · R</span>
      <span class="nk-year">2024</span>
    </div>
    <div class="nk-title">GoodFitSBM</div>
    <div class="nk-desc">
      Monte Carlo goodness-of-fit tests for Stochastic Block Models.
      Based on <a href="https://doi.org/10.1093/jrsssb/qkad084" target="_blank" rel="noopener">Monte Carlo goodness-of-fit tests for degree corrected and related stochastic blockmodels</a> (JRSS-B).
    </div>
    <div class="sw-links">
      <a class="sw-link" href="https://cran.r-project.org/web/packages/GoodFitSBM/index.html" target="_blank" rel="noopener">→ CRAN</a>
      <a class="sw-link" href="https://github.com/Roy-SR-007/GoodFitSBM" target="_blank" rel="noopener">→ GitHub</a>
    </div>
    <div class="nk-flip-cue">↻ Details</div>
  </div>
  <div class="nk-face back">
    <div class="nk-duty-title">Maintainers &amp; Developers</div>
    <div class="nk-duty">
      Soham Ghosh (Maintainer &amp; Co-developer), <strong>Somjit Roy</strong> (Developer), and Debdeep Pati (Contributor) &mdash;
      <a href="https://cran.r-project.org/web/packages/GoodFitSBM/index.html" target="_blank" rel="noopener">CRAN</a> |
      <a href="https://github.com/Roy-SR-007/GoodFitSBM" target="_blank" rel="noopener">GitHub</a>.
    </div>
    <div class="nk-flip-cue">↺ Back</div>
  </div>
</div>
</div>
</div>

</div>
</div>

<script>
(function(){
  const FLIP_MS = 5000;
  const timers = new WeakMap();

  function clearAuto(card){ const id = timers.get(card); if(id){ clearTimeout(id); timers.delete(card); } }

  function revert(card){
    if(!card.classList.contains('is-flipped')) return;
    card.classList.remove('is-flipped');
    card.setAttribute('aria-pressed','false');
    clearAuto(card);
  }

  function toggle(card){
    const flipped = card.classList.toggle('is-flipped');
    card.setAttribute('aria-pressed', String(flipped));
    if(flipped){ clearAuto(card); timers.set(card, setTimeout(()=>revert(card), FLIP_MS)); }
    else        { clearAuto(card); }
  }

  document.addEventListener('click', (e)=>{
    const c = e.target.closest('.nk-card');
    if(c && !e.target.closest('.sw-link')) toggle(c);
  });
  document.addEventListener('keydown', (e)=>{
    if((e.key==='Enter'||e.key===' ') && e.target.classList.contains('nk-card')){
      e.preventDefault(); toggle(e.target);
    }
  });
})();
</script>
