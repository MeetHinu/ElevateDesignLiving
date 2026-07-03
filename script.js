document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
    });
  }

  // Portfolio filter (only present on portfolio.html)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('[data-category]');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active-filter'));
      btn.classList.add('active-filter');
      const cat = btn.dataset.filter;
      projectCards.forEach(card => {
        card.style.display = (cat === 'all' || card.dataset.category === cat) ? '' : 'none';
      });
    });
  });

  // Contact form (no backend — just a friendly confirmation)
  const form = document.querySelector('#consult-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Request sent';
      btn.disabled = true;
      setTimeout(() => { btn.textContent = original; btn.disabled = false; form.reset(); }, 2500);
    });
  }
});
