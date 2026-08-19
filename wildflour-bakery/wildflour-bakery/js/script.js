// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu after tapping a link, and smooth-scroll
// accounting for the fixed nav height.
const navHeight = document.querySelector('.nav').offsetHeight;

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight + 1;
    window.scrollTo({ top, behavior: 'smooth' });

    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Highlight the current section link while scrolling
const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('.nav__link');

const highlightNav = () => {
  let current = sections[0]?.id;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top - navHeight <= 80) current = section.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--honey-soft)' : '';
  });
};
window.addEventListener('scroll', highlightNav);
highlightNav();

// Simple client-side form handling (no backend wired up)
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.email.value.trim();
  note.textContent = email
    ? `Thanks — we'll send the bake list to ${email}.`
    : 'Enter an email to sign up.';
  if (email) form.reset();
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
