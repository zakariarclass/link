(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme') || 'dark';

  if (saved === 'light') {
    root.classList.add('light');
    toggle.textContent = '☀️ Light';
  }

  toggle.addEventListener('click', () => {
    const isLight = root.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    toggle.textContent = isLight ? '☀️ Light' : '🌙 Dark';
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
