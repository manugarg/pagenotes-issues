// Follow system/browser dark mode preference only — no localStorage override.
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-dark-mode', '');
}
