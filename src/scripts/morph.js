const NAME = 'lesson-title';

document.addEventListener('click', (e) => {
  const card = e.target.closest('.lesson-card');
  if (!card) return;
  document.querySelectorAll('[style*="' + NAME + '"]').forEach((el) => (el.style.viewTransitionName = ''));
  const title = card.querySelector('h3, h2');
  if (title) title.style.viewTransitionName = NAME;
});

window.addEventListener('pagereveal', () => {
  const h1 = document.querySelector('main h1, h1');
  if (h1) h1.style.viewTransitionName = NAME;
});

window.addEventListener('pageswap', () => {
  if (location.pathname === '/' || !document.querySelector('.lesson-card')) return;
  document.querySelectorAll('h1').forEach((h) => (h.style.viewTransitionName = ''));
});
