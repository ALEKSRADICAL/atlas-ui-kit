document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const themeSelect = document.querySelector('#theme-select');
  const densitySelect = document.querySelector('#density-select');
  const demoAction = document.querySelector('#demo-action');
  const demoFeedback = document.querySelector('#demo-feedback');

  function applyTheme(choice) {
    if (choice === 'auto') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', choice);
    if (themeSelect) themeSelect.value = choice;
  }

  if (themeSelect) {
    applyTheme(localStorage.getItem('atlas-theme') || 'auto');
    themeSelect.addEventListener('change', (e) => {
      applyTheme(e.target.value);
      localStorage.setItem('atlas-theme', e.target.value);
    });
  }

  function applyDensity(choice) {
    if (choice === 'compact') root.setAttribute('data-density', 'compact');
    else root.removeAttribute('data-density');
    if (densitySelect) densitySelect.value = choice;
  }

  if (densitySelect) {
    applyDensity(localStorage.getItem('atlas-density') || 'normal');
    densitySelect.addEventListener('change', (e) => {
      applyDensity(e.target.value);
      localStorage.setItem('atlas-density', e.target.value);
    });
  }

  if (demoAction && demoFeedback) {
    demoAction.addEventListener('click', () => {
      demoFeedback.textContent = 'Демонстрация: действие выполнено, новая заявка создана.';
    });
  }
});