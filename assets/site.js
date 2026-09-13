(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const menuButton = document.querySelector('.menu-button');
  const mobileMenu = document.querySelector('#mobile-menu');

  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menuButton.textContent = open ? 'Меню' : 'Закрыть';
    mobileMenu.hidden = open;
    document.body.classList.toggle('menu-open', !open);
  });

  mobileMenu.addEventListener('click', event => {
    if (!event.target.closest('a')) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = 'Меню';
    mobileMenu.hidden = true;
    document.body.classList.remove('menu-open');
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || mobileMenu.hidden) return;
    menuButton.click();
    menuButton.focus();
  });

  document.querySelector('#year').textContent = new Date().getFullYear();

  const hero = document.querySelector('.hero');
  const gate = document.querySelector('.proof-gate');
  let frame = 0;
  function paintSignature() {
    frame = 0;
    const hp = parseFloat(getComputedStyle(hero).getPropertyValue('--sc-p')) || 0;
    const gp = parseFloat(getComputedStyle(gate).getPropertyValue('--sc-p')) || 0;
    hero.querySelector('.hero-stage').dataset.scVerifyState = `signal-${Math.round(hp * 10)}`;
    hero.querySelector('.hero-copy').style.opacity = String(Math.max(.28, 1 - hp * 1.15));
    hero.querySelector('.hero-copy').style.transform = `translateY(calc(-47% - ${hp * 48}px))`;
    gate.querySelector('.gate-line').style.transform = `scaleY(${.2 + gp * .8})`;
  }
  function requestPaint() {
    if (!frame) frame = requestAnimationFrame(paintSignature);
  }

  if (window.ScrollCraft) window.ScrollCraft.mount(document, { lerp: reduce ? 1 : .2 });
  addEventListener('scroll', requestPaint, { passive: true });
  addEventListener('resize', requestPaint, { passive: true });
  requestAnimationFrame(paintSignature);

  if (!reduce && matchMedia('(hover:hover) and (pointer:fine)').matches) {
    document.querySelectorAll('[data-case]').forEach(card => {
      card.addEventListener('pointermove', event => {
        const r = card.getBoundingClientRect();
        const x = (event.clientX - r.left) / r.width - .5;
        card.style.transform = `perspective(1200px) rotateX(${x * -1.5}deg) rotateY(${x * 1.8}deg)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }
})();
