gsap.registerPlugin(ScrollTrigger);

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
});

document.querySelectorAll('[data-reveal]').forEach((el) => {
  gsap.to(el, {
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
  });
});

gsap.to('.hero [data-reveal]', { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out', delay: 0.15 });

document.querySelectorAll('[data-count]').forEach((el) => {
  const target = parseInt(el.getAttribute('data-count'), 10);
  ScrollTrigger.create({
    trigger: el, start: 'top 90%', once: true,
    onEnter: () => gsap.to(el, { innerText: target, duration: 1.3, ease: 'power1.out', snap: { innerText: 1 } })
  });
});

// Mobile menu
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const navOverlay = document.getElementById('navOverlay');
function closeMenu(){ nav.classList.remove('open'); burger.classList.remove('open'); navOverlay.classList.remove('open'); }
if (burger) {
  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    navOverlay.classList.toggle('open', isOpen);
  });
  navOverlay.addEventListener('click', closeMenu);
  nav.querySelectorAll('a').forEach((l) => l.addEventListener('click', closeMenu));
}

// Back to top
const totop = document.getElementById('totop');
window.addEventListener('scroll', () => totop.classList.toggle('visible', window.scrollY > 600));
totop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Hero chart mock
const ctx = document.getElementById('heroChart');
if (ctx) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'],
      datasets: [{
        data: [40, 55, 48, 70, 62, 80, 74],
        borderColor: '#2563eb',
        backgroundColor: 'rgba(37,99,235,0.08)',
        fill: true, tension: 0.4, pointRadius: 0, borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { x: { display: false }, y: { display: false } }
    }
  });
}
