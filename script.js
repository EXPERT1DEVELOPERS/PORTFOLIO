// Toggle dark mode
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Trigger fade-in animation on scroll
const sections = document.querySelectorAll('.fade-in');

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// Contact form submit message
const form = document.querySelector('.contact-form');
const thankYou = document.getElementById('thank-you');

form.addEventListener('submit', () => {
  setTimeout(() => {
    thankYou.style.display = 'block';
    form.reset();
  }, 500); // Show message after short delay
});

// Resume Modal Logic
const resumeBtn = document.getElementById('openResumeBtn');
const resumeModal = document.getElementById('resumeModal');
const closeBtn = document.querySelector('#resumeModal .close-btn');

resumeBtn.addEventListener('click', () => {
  resumeModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  resumeModal.style.display = 'none';
});

// Close modal if clicked outside
window.addEventListener('click', (e) => {
  if (e.target === resumeModal) {
    resumeModal.style.display = 'none';
  }
});

