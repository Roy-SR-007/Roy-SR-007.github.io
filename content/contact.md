---
title: "Get in Touch"
date: 2026-02-04
hidemeta: true
hideTitle: false
description: "How to reach me — email, office, and a map."
url: "/contact/"
slug: "contact"
---

<style>
/* =========================================================
CONTACT — page-scoped styling (matches your editorial theme)
========================================================= */

/* Turn OFF your global editorial left rail ONLY on /contact/ */
html:has(head link[rel="canonical"][href*="/contact"]) .post-content{
border-left: none !important;
padding-left: 0 !important;
}

/* Remove excess header spacing */
.post-single .post-header{ margin-bottom: .2rem !important; }
.post-single .post-content{ padding-top: 0 !important; margin-top: .2rem !important; }

/* Shared card tokens (reuse your theme vars) */
html:has(head link[rel="canonical"][href*="/contact"]) .ct-wrap{
--ct-accent: var(--nk-accent, #500000);
--ct-line: var(--nk-line, rgba(17,24,39,.12));
--ct-paper: var(--nk-paper, #fbfbf9);
--ct-shadow: var(--nk-shadow, 0 10px 30px rgba(17,24,39,.06));
--ct-shadow-sm: var(--nk-shadow-sm, 0 8px 18px rgba(17,24,39,.07));

max-width: 980px;
margin: 0 auto;
}

/* ===== Hero — open typographic statement, no box ===== */
html:has(head link[rel=”canonical”][href*=”/contact”]) .ct-hero{
  background: none;
  border: none;
  box-shadow: none;
  padding: 2rem 0 .5rem;
  margin: 0 0 2rem;
  text-align: center;
  overflow: visible;
}
html:has(head link[rel=”canonical”][href*=”/contact”]) .ct-hero::before{
  display: none;
}
html:has(head link[rel=”canonical”][href*=”/contact”]) .ct-hero p{
  font-family: “Source Serif 4”, Georgia, serif;
  font-size: 1.18rem;
  font-style: italic;
  line-height: 1.85;
  color: var(--nk-muted);
  max-width: 52ch;
  margin: 0 auto;
}
/* Thin accent rule below hero */
html:has(head link[rel=”canonical”][href*=”/contact”]) .ct-hero::after{
  content: “”;
  display: block;
  width: 2.5rem;
  height: 2px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--ct-accent) 35%, transparent);
  margin: 1.4rem auto 0;
}

/* Floating emoji animation */
html:has(head link[rel=”canonical”][href*=”/contact”]) .emoji-float{
  display: inline-block;
  animation: ctFloat 2.9s ease-in-out infinite;
  margin-left: .35rem;
  font-style: normal;
}
@keyframes ctFloat{
  0%,100%{ transform: translateY(0); }
  50%{ transform: translateY(-6px); }
}
@media (prefers-reduced-motion: reduce){
  html:has(head link[rel=”canonical”][href*=”/contact”]) .emoji-float{ animation:none; }
}

/* ===== Grid of cards ===== */
html:has(head link[rel="canonical"][href*="/contact"]) .ct-grid{
display:grid;
grid-template-columns: 1fr 1fr;
gap: 1rem;
margin-top: 1rem;
}
@media (max-width: 860px){
html:has(head link[rel="canonical"][href*="/contact"]) .ct-grid{ grid-template-columns: 1fr; }
}

/* Card */
html:has(head link[rel="canonical"][href*="/contact"]) .ct-card{
  position: relative;
  border-radius: 16px;
  border: 1px solid var(--ct-line);
  border-top: 3px solid color-mix(in srgb, var(--ct-accent) 45%, transparent);
  background: color-mix(in srgb, var(--ct-paper) 92%, white);
  padding: 1.4rem 1.5rem;
  transition: transform .16s ease, box-shadow .18s ease, border-color .18s ease;
}
html:has(head link[rel="canonical"][href*="/contact"]) .ct-card:hover{
  transform: translateY(-3px);
  box-shadow: 0 12px 36px rgba(17,24,39,.07);
  border-color: color-mix(in srgb, var(--ct-accent) 28%, transparent);
  border-top-color: color-mix(in srgb, var(--ct-accent) 65%, transparent);
}
body.dark html:has(head link[rel="canonical"][href*="/contact"]) .ct-card{
  background: color-mix(in srgb, var(--ct-paper) 88%, black);
  border-top-color: color-mix(in srgb, #ddd8d8 35%, transparent);
}
body.dark html:has(head link[rel="canonical"][href*="/contact"]) .ct-card:hover{
  border-color: color-mix(in srgb, #ddd8d8 22%, transparent);
}

/* Card label */
html:has(head link[rel="canonical"][href*="/contact"]) .ct-label{
  display: flex;
  align-items: center;
  gap: .5rem;
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--ct-accent);
  margin: 0 0 1rem;
  opacity: .85;
}
body.dark html:has(head link[rel="canonical"][href*="/contact"]) .ct-label{
  color: #ddd8d8;
}

html:has(head link[rel="canonical"][href*="/contact"]) .ct-sub{
  color: color-mix(in srgb, currentColor 70%, transparent);
  margin: 0 0 .15rem;
  font-size: .98rem;
}

/* Icons */
html:has(head link[rel="canonical"][href*="/contact"]) .ct-icon{
  width: 1.1em;
  height: 1.1em;
  fill: currentColor;
  opacity: .9;
}

/* Mono fields */
html:has(head link[rel="canonical"][href*="/contact"]) .ct-mono{
font-family: var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
font-size: .98rem;
overflow-wrap: anywhere;
}

/* Copy button (tiny pill) */
html:has(head link[rel="canonical"][href*="/contact"]) .ct-copy{
border: 1px solid var(--ct-line);
background: transparent;
color: inherit;
border-radius: 999px;
padding: .28rem .62rem;
font-size: .88rem;
cursor: pointer;
transition: transform .14s ease, border-color .18s ease, background .18s ease, color .18s ease;
}
html:has(head link[rel="canonical"][href*="/contact"]) .ct-copy:hover{
transform: translateY(-1px);
border-color: color-mix(in srgb, var(--ct-accent) 55%, transparent);
background: color-mix(in srgb, var(--ct-accent) 8%, transparent);
color: var(--ct-accent);
}
body.dark html:has(head link[rel="canonical"][href*="/contact"]) .ct-copy:hover{
border-color: color-mix(in srgb, #ddd8d8 38%, transparent);
background: color-mix(in srgb, #ddd8d8 10%, transparent);
color: #ddd8d8;
}

/* Row for value + copy */
html:has(head link[rel="canonical"][href*="/contact"]) .ct-row{
display:flex;
align-items:center;
gap:.7rem;
flex-wrap: wrap;
}

/* Map wrapper */
html:has(head link[rel="canonical"][href*="/contact"]) .ct-map{
  margin-top: 1.8rem;
  border-radius: 18px;
  border: 1px solid var(--ct-line);
  overflow: hidden;
  background: color-mix(in srgb, var(--ct-paper) 92%, white);
  transition: transform .16s ease, box-shadow .18s ease, border-color .18s ease;
  box-shadow: 0 4px 20px rgba(17,24,39,.04);
}
html:has(head link[rel="canonical"][href*="/contact"]) .ct-map:hover{
  transform: translateY(-2px);
  box-shadow: 0 12px 36px rgba(17,24,39,.07);
  border-color: color-mix(in srgb, var(--ct-accent) 22%, transparent);
}
body.dark html:has(head link[rel="canonical"][href*="/contact"]) .ct-map{
  background: color-mix(in srgb, var(--ct-paper) 88%, black);
}

/* Map label header */
html:has(head link[rel="canonical"][href*="/contact"]) .ct-map-label{
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .85rem 1.4rem;
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--ct-accent);
  border-bottom: 1px solid var(--ct-line);
  opacity: .85;
}
body.dark html:has(head link[rel="canonical"][href*="/contact"]) .ct-map-label{
  color: #ddd8d8;
}

/* iframe */
html:has(head link[rel="canonical"][href*="/contact"]) .ct-map iframe{
  width: 100%;
  height: 380px;
  border: 0;
  display: block;
}

/* Optional small note style */
html:has(head link[rel="canonical"][href*="/contact"]) .ct-note{
margin-top: .6rem;
font-size: .95rem;
color: color-mix(in srgb, currentColor 66%, transparent);
}

/* =========================================================
   CONTACT — entrance animation (once on page load)
   Hero + cards + map (staggered)
   ========================================================= */

html:has(head link[rel="canonical"][href*="/contact"]) .ct-hero,
html:has(head link[rel="canonical"][href*="/contact"]) .ct-card,
html:has(head link[rel="canonical"][href*="/contact"]) .ct-map{
  opacity: 0;
  transform: translateY(10px) scale(.985);
  animation: ct-in 0.85s ease-out forwards;
  will-change: opacity, transform;
}

/* Stagger */
html:has(head link[rel="canonical"][href*="/contact"]) .ct-hero{ animation-delay: .06s; }
html:has(head link[rel="canonical"][href*="/contact"]) .ct-grid .ct-card:nth-child(1){ animation-delay: .14s; }
html:has(head link[rel="canonical"][href*="/contact"]) .ct-grid .ct-card:nth-child(2){ animation-delay: .22s; }
html:has(head link[rel="canonical"][href*="/contact"]) .ct-map{ animation-delay: .30s; }

@keyframes ct-in{
  from{
    opacity: 0;
    transform: translateY(10px) scale(.985);
  }
  to{
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce){
  html:has(head link[rel="canonical"][href*="/contact"]) .ct-hero,
  html:has(head link[rel="canonical"][href*="/contact"]) .ct-card,
  html:has(head link[rel="canonical"][href*="/contact"]) .ct-map{
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}

</style>

<!-- ======================================================
  Inline SVG icons (reusable)
  ====================================================== -->
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
<symbol id="ct-mail" viewBox="0 0 24 24">
<path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.01l9 5.49 9-5.5V7H3zm0 2.51V17h18V9.5l-9 5.5-9-5.49z"/>
</symbol>
<symbol id="ct-pin" viewBox="0 0 24 24">
<path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
</symbol>
<symbol id="ct-clock" viewBox="0 0 24 24">
<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 11h5v-2h-4V7h-2v6z"/>
</symbol>
</svg>

<div class="ct-wrap">

<div class="ct-hero">
<p>
  If you’d like to discuss research or collaboration, the best way to reach me is email.
</p>
</div>

<div class="ct-grid">

<div class="ct-card">
  <div class="ct-label">
    <svg class="ct-icon"><use href="#ct-mail"/></svg>
    Email
  </div>
  <p class="ct-sub"></p>
  <div class="ct-row">
    <span class="ct-mono" id="ct-email">sroy_123@tamu.edu</span>
    <button class="ct-copy" type="button" data-copy="#ct-email">Copy</button>
  </div>
</div>

<div class="ct-card">
  <div class="ct-label">
    <svg class="ct-icon"><use href="#ct-pin"/></svg>
    Office
  </div>
  <p class="ct-sub"></p>
  <div class="ct-row">
    <span class="ct-mono" id="ct-office">
      Department of Statistics <br>
      BLOC 463B, Blocker Building<br>
      3143 TAMU, 155 Ireland St<br>
      College Station, TX 77843, USA
    </span>
    <button class="ct-copy" type="button" data-copy="#ct-office">Copy</button>
  </div>
  <div class="ct-note">If you’re visiting campus, the map below points to the department.</div>
</div>

</div>

<div class="ct-map" aria-label="Map to the Department of Statistics, Texas A&M University">
<div class="ct-map-label">
  <svg class="ct-icon"><use href="#ct-pin"/></svg>
  Department of Statistics · Texas A&amp;M University
</div>
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1743.5804583667828!2d-96.34321489613892!3d30.619516895521986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683966993d2d7%3A0x5c96a35581fb22a4!2sDepartment%20of%20Statistics!5e1!3m2!1sen!2sus!4v1762360573317!5m2!1sen!2sus"
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
</div>

</div>

<script>
/* Tiny copy-to-clipboard helper (safe if clipboard is blocked) */
document.addEventListener("DOMContentLoaded", () => {
document.querySelectorAll(".ct-copy[data-copy]").forEach((btn) => {
btn.addEventListener("click", async () => {
  const sel = btn.getAttribute("data-copy");
  const el  = document.querySelector(sel);
  if (!el) return;

  const text = el.innerText.replace(/\n{2,}/g, "\n").trim();

  try{
    await navigator.clipboard.writeText(text);
    const old = btn.textContent;
    btn.textContent = "Copied ✓";
    setTimeout(() => (btn.textContent = old), 900);
  }catch(e){
    // Fallback: select + copy
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);

    const old = btn.textContent;
    btn.textContent = "Copied ✓";
    setTimeout(() => (btn.textContent = old), 900);
  }
});
});
});
</script>
