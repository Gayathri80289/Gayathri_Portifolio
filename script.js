// set current year
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scroll function for buttons
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// fade-up animation on scroll
const fadeEls = document.querySelectorAll('.fade-up');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
fadeEls.forEach(el => fadeObserver.observe(el));

// nav active highlight
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('.nav-link');
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
    }
  });
}, { threshold: 0.45 });
sections.forEach(sec => navObserver.observe(sec));

// simple click highlight
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(a => a.classList.remove('active'));
    link.classList.add('active');
  });
});
