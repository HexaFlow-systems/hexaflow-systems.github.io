
document.getElementById('languageSelect').addEventListener('change', function () {
  const lang = this.value;
  document.querySelectorAll('[data-' + lang + ']').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });
});
