document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggle = document.getElementById('theme-toggle');
  const icon = toggle?.querySelector('i');
  const storageKey = 'portfolio-theme';
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem(storageKey);
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  const applyTheme = (theme) => {
    const isDark = theme === 'dark';
    body.setAttribute('data-theme', theme);
    localStorage.setItem(storageKey, theme);

    if (icon) {
      icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }

    if (toggle) {
      const isEnglish = document.documentElement.lang === 'en';
      const label = isDark
        ? (isEnglish ? 'Switch to light mode' : 'Activar modo claro')
        : (isEnglish ? 'Switch to dark mode' : 'Activar modo oscuro');
      toggle.setAttribute('aria-label', label);
      toggle.setAttribute('title', label);
    }
  };

  applyTheme(initialTheme);

  toggle?.addEventListener('click', () => {
    const nextTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
});
