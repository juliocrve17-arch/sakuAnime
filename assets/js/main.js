const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}
// reveal on view
const revealEls = document.querySelectorAll('.card, .hero__media img');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.transition = 'opacity .5s ease, transform .5s ease, filter .5s ease';
      e.target.style.opacity = 1; e.target.style.transform = 'translateY(0)'; e.target.style.filter = 'none';
      io.unobserve(e.target);
    }
  });
},{ threshold: .2 });
revealEls.forEach(el => { el.style.opacity = 0; el.style.transform = 'translateY(8px)'; el.style.filter='blur(2px)'; io.observe(el); });
