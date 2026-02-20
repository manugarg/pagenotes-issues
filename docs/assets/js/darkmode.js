// Listen for system/browser dark mode changes — no localStorage, no toggle button.
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(event) {
  if (event.matches) {
    document.documentElement.setAttribute('data-dark-mode', '');
  } else {
    document.documentElement.removeAttribute('data-dark-mode');
  }
});
