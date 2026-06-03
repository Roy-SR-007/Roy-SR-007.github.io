---
title: "Awards"
layout: single
showToc: false
hideMeta: true
url: "/awards/"
slug: "awards"
---

<style>
/* =========================================================
   AWARDS PAGE — redesigned
   ========================================================= */

html:has(head link[rel="canonical"][href$="/awards/"]) .post-content {
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

.nk-teach ul, .nk-teach ol {
  list-style: none !important;
  padding-left: 0 !important;
  margin-left: 0 !important;
}

.nk-timeline { margin-top: .5rem; }
.nk-item     { margin: 0 0 .85rem 0; }

/* ── Year section divider ── */
.nk-year-hdr {
  display: flex;
  align-items: center;
  gap: .9rem;
  margin: 2.2rem 0 1.1rem;
}
.nk-year-hdr:first-child { margin-top: .2rem; }
.nk-year-hdr::before,
.nk-year-hdr::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--nk-line, rgba(17,24,39,.12));
}
.nk-year-hdr span {
  font-size: 1.05rem;
  font-weight: 800;
  letter-spacing: .03em;
  color: var(--accent);
  white-space: nowrap;
}

/* ── Category badges ── */
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
  margin-bottom: .55rem;
}
.nk-cat--travel  { background:#fef3c7; color:#92400e; border-color:#fde68a; }
.nk-cat--scholar { background:#ccfbf1; color:#0f766e; border-color:#99f6e4; }
.nk-cat--paper   { background:#e0e7ff; color:#3730a3; border-color:#c7d2fe; }
.nk-cat--grant   { background:#f0fdf4; color:#15803d; border-color:#bbf7d0; }
.nk-cat--school  { background:#e0f2fe; color:#0369a1; border-color:#bae6fd; }
.nk-cat--prize   { background:#fffbeb; color:#78350f; border-color:#fde68a; }
.nk-cat--fellow  { background:#f5f3ff; color:#7c3aed; border-color:#e9d5ff; }

body.dark .nk-cat--travel  { background:color-mix(in srgb,#f59e0b 12%,transparent); color:#fcd34d; border-color:color-mix(in srgb,#f59e0b 28%,transparent); }
body.dark .nk-cat--scholar { background:color-mix(in srgb,#2dd4bf 12%,transparent); color:#5eead4; border-color:color-mix(in srgb,#2dd4bf 28%,transparent); }
body.dark .nk-cat--paper   { background:color-mix(in srgb,#818cf8 12%,transparent); color:#a5b4fc; border-color:color-mix(in srgb,#818cf8 28%,transparent); }
body.dark .nk-cat--grant   { background:color-mix(in srgb,#4ade80 12%,transparent); color:#86efac; border-color:color-mix(in srgb,#4ade80 28%,transparent); }
body.dark .nk-cat--school  { background:color-mix(in srgb,#38bdf8 12%,transparent); color:#7dd3fc; border-color:color-mix(in srgb,#38bdf8 28%,transparent); }
body.dark .nk-cat--prize   { background:color-mix(in srgb,#fbbf24 12%,transparent); color:#fcd34d; border-color:color-mix(in srgb,#fbbf24 28%,transparent); }
body.dark .nk-cat--fellow  { background:color-mix(in srgb,#c084fc 12%,transparent); color:#e9d5ff; border-color:color-mix(in srgb,#c084fc 28%,transparent); }

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

/* Category top border */
.nk-card--travel  { border-top-color: #f59e0b !important; }
.nk-card--scholar { border-top-color: #14b8a6 !important; }
.nk-card--paper   { border-top-color: #6366f1 !important; }
.nk-card--grant   { border-top-color: #22c55e !important; }
.nk-card--school  { border-top-color: #0ea5e9 !important; }
.nk-card--prize   { border-top-color: #f59e0b !important; }
.nk-card--fellow  { border-top-color: #a855f7 !important; }

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
@keyframes nk-flip-drain {
  from { transform: scaleX(1); opacity: 1; }
  to   { transform: scaleX(0); opacity: .4; }
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
.nk-desc      { font-size: .95rem; line-height: 1.52; opacity: .88; }
.nk-duty-title{ font-size: .95rem; font-weight: 750; margin-bottom: .3rem; }
.nk-duty      { font-size: .92rem; line-height: 1.52; opacity: .88; }

/* ── Links inside cards ── */
.nk-card a {
  text-decoration: none !important;
  background-image: var(--nk-inkgrad, linear-gradient(#500000,#500000)) !important;
  background-repeat: no-repeat !important;
  background-size: 0% 1.5px !important;
  background-position: 0 100% !important;
  transition: background-size .25s ease !important;
}
.nk-card a:hover { background-size: 100% 1.5px !important; }
.nk-card a::before,
.nk-card a::after { content: none !important; display: none !important; }

/* ── Entrance animations ── */
.nk-item .nk-card {
  opacity: 0;
  transform: translateY(10px);
  animation: nk-awards-in .55s ease-out both;
}
.nk-timeline > :nth-child(2)  .nk-card { animation-delay: .06s; }
.nk-timeline > :nth-child(3)  .nk-card { animation-delay: .12s; }
.nk-timeline > :nth-child(4)  .nk-card { animation-delay: .18s; }
.nk-timeline > :nth-child(5)  .nk-card { animation-delay: .24s; }
.nk-timeline > :nth-child(6)  .nk-card { animation-delay: .30s; }
.nk-timeline > :nth-child(8)  .nk-card { animation-delay: .36s; }
.nk-timeline > :nth-child(9)  .nk-card { animation-delay: .42s; }
.nk-timeline > :nth-child(10) .nk-card { animation-delay: .48s; }
.nk-timeline > :nth-child(12) .nk-card { animation-delay: .54s; }
.nk-timeline > :nth-child(13) .nk-card { animation-delay: .60s; }
.nk-timeline > :nth-child(14) .nk-card { animation-delay: .66s; }
.nk-timeline > :nth-child(15) .nk-card { animation-delay: .72s; }

@keyframes nk-awards-in {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nk-item .nk-card {
    opacity: 1 !important;
    transform: none !important;
    animation: none !important;
  }
}
</style>


<div class="rk-htl">
  <button class="rk-htl-all rk-htl-all--active" data-year="all">All</button>
  <div class="rk-htl-sep"></div>
  <button class="rk-htl-node" data-year="2026">
    <div class="rk-htl-dot rk-htl-dot--recent"></div>
    <div class="rk-htl-lbl">2026</div>
  </button>
  <div class="rk-htl-conn"></div>
  <button class="rk-htl-node" data-year="2024">
    <div class="rk-htl-dot"></div>
    <div class="rk-htl-lbl">2024</div>
  </button>
  <div class="rk-htl-conn"></div>
  <button class="rk-htl-node" data-year="2022">
    <div class="rk-htl-dot"></div>
    <div class="rk-htl-lbl">2022</div>
  </button>
</div>

<div class="nk-teach">
<div class="nk-timeline">

<!-- ──────────────── 2026 ──────────────── -->
<div class="nk-year-hdr" data-year="2026"><span>2026</span></div>

<div class="nk-item" data-year="2026">
<div class="nk-card nk-card--travel" tabindex="0" role="button" aria-pressed="false" aria-label="IMS Hannan Award">
<div class="nk-card-inner">
  <div class="nk-face front">
    <span class="nk-cat nk-cat--travel">Travel Award</span>
    <div class="nk-title">2026 IMS Hannan Graduate Student Travel Award</div>
    <div class="nk-desc"><a href="https://arxiv.org/abs/2509.19710" target="_blank" rel="noopener">HierBOSSS</a> was awarded the 2026 IMS Hannan Graduate Student Travel Award by the Institute of Mathematical Statistics (IMS).</div>
    <div class="nk-flip-cue">↻ Impact</div>
  </div>
  <div class="nk-face back">
    <div class="nk-duty-title">Award Impact</div>
    <div class="nk-duty">Presentation at the <a href="https://isba2026.github.io" target="_blank" rel="noopener">2026 ISBA World Meeting</a> in Nagoya, Japan.</div>
    <div class="nk-flip-cue">↺ Back</div>
  </div>
</div>
</div>
</div>

<div class="nk-item" data-year="2026">
<div class="nk-card nk-card--paper" tabindex="0" role="button" aria-pressed="false" aria-label="BOSS 2026 Student Paper Award">
<div class="nk-card-inner">
  <div class="nk-face front">
    <span class="nk-cat nk-cat--paper">Paper Award</span>
    <div class="nk-title">Best of Statistical Science 2026 — Student Paper Award</div>
    <div class="nk-desc"><a href="https://arxiv.org/abs/2509.19710" target="_blank" rel="noopener">HierBOSSS</a> secured <strong>2nd place</strong> at the Best of Statistical Science <nobr>(<a href="https://calendar.tamu.edu/statistics/event/358551-2026-best-of-statistical-science-workshop-boss-2026" target="_blank" rel="noopener">BOSS 2026</a>)</nobr> conference, TidBit session.</div>
    <div class="nk-flip-cue">↻ Impact</div>
  </div>
  <div class="nk-face back">
    <div class="nk-duty-title">Award Impact</div>
    <div class="nk-duty">Awarded prize money for 2nd place in the TidBit session at <a href="https://calendar.tamu.edu/statistics/event/358551-2026-best-of-statistical-science-workshop-boss-2026" target="_blank" rel="noopener">BOSS 2026</a>.</div>
    <div class="nk-flip-cue">↺ Back</div>
  </div>
</div>
</div>
</div>

<div class="nk-item" data-year="2026">
<div class="nk-card nk-card--fellow" tabindex="0" role="button" aria-pressed="false" aria-label="SDSS Scholarship">
<div class="nk-card-inner">
  <div class="nk-face front">
    <span class="nk-cat nk-cat--fellow">Fellowship</span>
    <div class="nk-title">2026 ASA SDSS Student and Early Career Scholarship</div>
    <div class="nk-desc"><a href="https://arxiv.org/abs/2509.19710" target="_blank" rel="noopener">HierBOSSS</a> was awarded the 2026 ASA SDSS Student and Early Career Scholarship.</div>
    <div class="nk-flip-cue">↻ Impact</div>
  </div>
  <div class="nk-face back">
    <div class="nk-duty-title">Award Impact</div>
    <div class="nk-duty">Invited refereed presentation at <a href="https://ww2.amstat.org/meetings/sdss/2026/" target="_blank" rel="noopener">SDSS 2026</a> in Milwaukee, Wisconsin, USA.</div>
    <div class="nk-flip-cue">↺ Back</div>
  </div>
</div>
</div>
</div>

<div class="nk-item" data-year="2026">
<div class="nk-card nk-card--paper" tabindex="0" role="button" aria-pressed="false" aria-label="SBSS Paper Award">
<div class="nk-card-inner">
  <div class="nk-face front">
    <span class="nk-cat nk-cat--paper">Paper Award</span>
    <div class="nk-title">2026 ASA SBSS Student Paper Award</div>
    <div class="nk-desc"><a href="https://arxiv.org/abs/2509.19710" target="_blank" rel="noopener">HierBOSSS</a> was awarded the <a href="https://community.amstat.org/sbss/awards" target="_blank">2026 Student Paper Award</a> by ASA's Section on Bayesian Statistical Science (SBSS).</div>
    <div class="nk-flip-cue">↻ Impact</div>
  </div>
  <div class="nk-face back">
    <div class="nk-duty-title">Award Impact</div>
    <div class="nk-duty">Invited presentation at ASA's <a href="https://ww2.amstat.org/meetings/jsm/2026/" target="_blank" rel="noopener">Joint Statistical Meetings (JSM) 2026</a> in Boston, MA, USA.</div>
    <div class="nk-flip-cue">↺ Back</div>
  </div>
</div>
</div>
</div>

<div class="nk-item" data-year="2026">
<div class="nk-card nk-card--travel" tabindex="0" role="button" aria-pressed="false" aria-label="RAP Travel Award">
<div class="nk-card-inner">
  <div class="nk-face front">
    <span class="nk-cat nk-cat--travel">Travel Award</span>
    <div class="nk-title">Texas A&amp;M Graduate School Research and Presentation Travel Award</div>
    <div class="nk-desc">Awarded the Research and Presentation (<a href="https://grad.tamu.edu/funding/travel-awards/index.html" target="_blank" rel="noopener">RAP</a>) Travel Award by Texas A&amp;M University, Graduate School, in recognition of research excellence and scholarly contribution.</div>
    <div class="nk-flip-cue">↻ Impact</div>
  </div>
  <div class="nk-face back">
    <div class="nk-duty-title">Award Impact</div>
    <div class="nk-duty">Presented <a href="https://arxiv.org/abs/2509.19710" target="_blank" rel="noopener">HierBOSSS</a> at <a href="https://ww2.amstat.org/meetings/sdss/2026/" target="_blank" rel="noopener">SDSS 2026</a> in Milwaukee, Wisconsin, USA.</div>
    <div class="nk-flip-cue">↺ Back</div>
  </div>
</div>
</div>
</div>

<!-- ──────────────── 2024 ──────────────── -->
<div class="nk-year-hdr" data-year="2024"><span>2024</span></div>

<div class="nk-item" data-year="2024">
<div class="nk-card nk-card--travel" tabindex="0" role="button" aria-pressed="false" aria-label="IISA Travel Award">
<div class="nk-card-inner">
  <div class="nk-face front">
    <span class="nk-cat nk-cat--travel">Travel Award</span>
    <div class="nk-title">NSF &amp; TAMU Statistics Travel Award</div>
    <div class="nk-desc">NSF Travel Grant &amp; TAMU Statistics Department Student Travel Award for presenting at <nobr><a href="https://www.intindstat.org/conference2024/index" target="_blank" rel="noopener">IISA 2024</a>.</nobr></div>
    <div class="nk-flip-cue">↻ Impact</div>
  </div>
  <div class="nk-face back">
    <div class="nk-duty-title">Award Impact</div>
    <div class="nk-duty">Contributed Talk on <em>Tangent Approximation for Variational Inference in different Exponential Families</em> at <a href="https://www.intindstat.org/conference2024/index" target="_blank" rel="noopener">IISA 2024</a> in Kochi, KL, India.</div>
    <div class="nk-flip-cue">↺ Back</div>
  </div>
</div>
</div>
</div>

<div class="nk-item" data-year="2024">
<div class="nk-card nk-card--grant" tabindex="0" role="button" aria-pressed="false" aria-label="TPT Grant">
<div class="nk-card-inner">
  <div class="nk-face front">
    <span class="nk-cat nk-cat--grant">Research Grant</span>
    <div class="nk-title">Targeted Proposal Teams (TPT) Grant</div>
    <div class="nk-desc">Research assistantship from the <a href="https://today.tamu.edu/2024/02/07/nine-research-teams-receive-tpt-grants/" target="_blank" rel="noopener">TPT grant</a> under the supervision of <a href="https://sites.google.com/tamu.edu/bani-k-mallick/bio" target="_blank" rel="noopener">Dr. Bani K. Mallick</a>.</div>
    <div class="nk-flip-cue">↻ Impact</div>
  </div>
  <div class="nk-face back">
    <div class="nk-duty-title">Award Impact</div>
    <div class="nk-duty">Worked on Bayesian autonomous materials discovery in collaboration with the <a href="https://engineering.tamu.edu/materials/index.html" target="_blank" rel="noopener">MSEN Department</a> at Texas A&amp;M University.</div>
    <div class="nk-flip-cue">↺ Back</div>
  </div>
</div>
</div>
</div>

<div class="nk-item" data-year="2024">
<div class="nk-card nk-card--school" tabindex="0" role="button" aria-pressed="false" aria-label="CMS3-FAST">
<div class="nk-card-inner">
  <div class="nk-face front">
    <span class="nk-cat nk-cat--school">Summer School</span>
    <div class="nk-title">CMS3-FAST Summer School 2024</div>
    <div class="nk-desc">Selected to attend the <a href="https://cms3.tamu.edu/" target="_blank" rel="noopener">CMS3-FAST summer school (2024)</a> at Texas A&amp;M University.</div>
    <div class="nk-flip-cue">↻ Impact</div>
  </div>
  <div class="nk-face back">
    <div class="nk-duty-title">Award Impact</div>
    <div class="nk-duty">Scientific computing techniques and Bayesian methods for autonomous materials discovery in computational materials science.</div>
    <div class="nk-flip-cue">↺ Back</div>
  </div>
</div>
</div>
</div>

<!-- ──────────────── 2022 ──────────────── -->
<div class="nk-year-hdr" data-year="2022"><span>2022</span></div>

<div class="nk-item" data-year="2022">
<div class="nk-card nk-card--prize" tabindex="0" role="button" aria-pressed="false" aria-label="R.C. Bose Prize">
<div class="nk-card-inner">
  <div class="nk-face front">
    <span class="nk-cat nk-cat--prize">Prize</span>
    <div class="nk-title">R.C. Bose Memorial Book Prize</div>
    <div class="nk-desc">Awarded the <a href="https://www.calcuttastatisticalassociation.in/about-csa/activities/rcbmcp-recipients" target="_blank" rel="noopener">R.C. Bose Memorial Book Prize (2022)</a> by the <a href="https://www.calcuttastatisticalassociation.in/home" target="_blank" rel="noopener">Calcutta Statistical Association</a>.</div>
    <div class="nk-flip-cue">↻ Impact</div>
  </div>
  <div class="nk-face back">
    <div class="nk-duty-title">Award Impact</div>
    <div class="nk-duty">For securing the highest marks in M.Sc. Statistics.</div>
    <div class="nk-flip-cue">↺ Back</div>
  </div>
</div>
</div>
</div>

<div class="nk-item" data-year="2022">
<div class="nk-card nk-card--fellow" tabindex="0" role="button" aria-pressed="false" aria-label="IASc Fellowship">
<div class="nk-card-inner">
  <div class="nk-face front">
    <span class="nk-cat nk-cat--fellow">Fellowship</span>
    <div class="nk-title">IASc-INSA-NASI Summer Research Fellowship</div>
    <div class="nk-desc">Awarded the <a href="https://drive.google.com/file/d/1J3DhHxc2vmgCMXZRy1IcSFVC2n5Zoyot/view?usp=sharing" target="_blank" rel="noopener">Science Academies Fellowship</a> in the summer of 2022.</div>
    <div class="nk-flip-cue">↻ Impact</div>
  </div>
  <div class="nk-face back">
    <div class="nk-duty-title">Award Impact</div>
    <div class="nk-duty">Research focused on nonparametric statistics under the supervision of <a href="https://sites.google.com/site/anirvanchk/home?authuser=0" target="_blank" rel="noopener">Dr. Anirvan Chakraborty</a>.</div>
    <div class="nk-flip-cue">↺ Back</div>
  </div>
</div>
</div>
</div>

<div class="nk-item" data-year="2022">
<div class="nk-card nk-card--school" tabindex="0" role="button" aria-pressed="false" aria-label="OPHI Summer School">
<div class="nk-card-inner">
  <div class="nk-face front">
    <span class="nk-cat nk-cat--school">Summer School</span>
    <div class="nk-title">OPHI Summer School 2022</div>
    <div class="nk-desc">Recipient of the <a href="https://ophi.org.uk/" target="_blank" rel="noopener">OPHI University of Oxford</a> summer school grant (2022).</div>
    <div class="nk-flip-cue">↻ Impact</div>
  </div>
  <div class="nk-face back">
    <div class="nk-duty-title">Award Impact</div>
    <div class="nk-duty">Worked on multidimensional poverty mapping and attended the <a href="https://ophi.org.uk/event/ophi-summer-school-2022-multidimensional-poverty-measurement-analysis" target="_blank" rel="noopener">OPHI summer school</a> in Jakarta, Indonesia.</div>
    <div class="nk-flip-cue">↺ Back</div>
  </div>
</div>
</div>
</div>

<div class="nk-item" data-year="2022">
<div class="nk-card nk-card--travel" tabindex="0" role="button" aria-pressed="false" aria-label="IAOS Conference">
<div class="nk-card-inner">
  <div class="nk-face front">
    <span class="nk-cat nk-cat--travel">Travel Award</span>
    <div class="nk-title">IAOS 2022 Conference &amp; Travel Grant</div>
    <div class="nk-desc">Awarded the <a href="https://www.iaos2022.pl/" target="_blank" rel="noopener">IAOS 2022</a> conference and travel grant by the <a href="https://www.worldbank.org/ext/en/home" target="_blank" rel="noopener">World Bank</a>.</div>
    <div class="nk-flip-cue">↻ Impact</div>
  </div>
  <div class="nk-face back">
    <div class="nk-duty-title">Award Impact</div>
    <div class="nk-duty">Attended the conference in Kraków, Poland.</div>
    <div class="nk-flip-cue">↺ Back</div>
  </div>
</div>
</div>
</div>

</div>
</div>

<script>
(function(){
  /* ── Year timeline filter ── */
  const allBtn   = document.querySelector('.rk-htl-all');
  const htlNodes = document.querySelectorAll('.rk-htl-node[data-year]');
  const htl      = document.querySelector('.rk-htl');

  function activateYear(year) {
    const isAll = year === 'all';
    if (allBtn) allBtn.classList.toggle('rk-htl-all--active', isAll);
    if (htl)    htl.classList.toggle('rk-htl--filtered', !isAll);
    htlNodes.forEach(n => n.classList.toggle('rk-htl-node--selected', !isAll && n.dataset.year === year));
    document.querySelectorAll('.nk-year-hdr[data-year], .nk-item[data-year]').forEach(el => {
      el.style.display = (isAll || el.dataset.year === year) ? '' : 'none';
    });
  }

  if (allBtn) allBtn.addEventListener('click', () => activateYear('all'));
  htlNodes.forEach(n => n.addEventListener('click', () => activateYear(n.dataset.year)));

  /* ── Card flip ── */
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

  document.addEventListener('click', (e)=>{ const c = e.target.closest('.nk-card'); if(c) toggle(c); });
  document.addEventListener('keydown', (e)=>{
    if((e.key==='Enter'||e.key===' ') && e.target.classList.contains('nk-card')){
      e.preventDefault(); toggle(e.target);
    }
  });
})();
</script>
