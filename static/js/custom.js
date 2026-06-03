(function () {

  // --- Theme handling (PaperMod-compatible) ---
  const applyTheme = () => {
    const pref = localStorage.getItem("pref-theme");
    if (pref === "dark") document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  };
  window.addEventListener("storage", applyTheme);
  applyTheme();

})();
