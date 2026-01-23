function setLang(lang) {
  document.querySelectorAll("[data-" + lang + "]").forEach(el => {
    el.textContent = el.getAttribute("data-" + lang);
  });
}
