// Dark Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.innerHTML = document.body.classList.contains('dark') 
    ? '<i class="fas fa-sun"></i>' 
    : '<i class="fas fa-moon"></i>';
});

// Scroll Animation
const sections = document.querySelectorAll('.slide-up');
const showOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerBottom) {
      section.classList.add('show');
    }
  });
};

window.addEventListener('scroll', showOnScroll);
showOnScroll();

// Slideshow for sections (improved)
const sectionIds = ['hero', 'about', 'projects', 'skills', 'contact'];
const mainSections = sectionIds.map(id => document.getElementById(id) || document.querySelector('.' + id));
mainSections.forEach(sec => {
  if (sec) sec.classList.add('slideshow-section');
});
mainSections[0].classList.add('active');
let currentSection = 0;
function showSection(index) {
  mainSections.forEach((sec, i) => {
    if (sec) {
      sec.classList.toggle('active', i === index);
    }
  });
}
showSection(currentSection);
setInterval(() => {
  currentSection = (currentSection + 1) % mainSections.length;
  showSection(currentSection);
}, 10000);