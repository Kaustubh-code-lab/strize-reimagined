window.addEventListener('scroll', function () {
    const header = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", () => {
  // Automatically finds ANY element with the 'data-animate-section' attribute
  const sections = document.querySelectorAll("[data-animate-section]");

  const observerOptions = {
    root: null, 
    threshold: 0.15 
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        obs.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});
