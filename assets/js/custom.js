// Intersection Observer for fade-in animations
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(element => observer.observe(element));

// Skill progress animation
function animateSkills() {
  const skills = document.querySelectorAll('.skill-progress');
  skills.forEach(skill => {
    const progress = skill.getAttribute('data-progress');
    skill.style.width = progress + '%';
  });
}

// Security metrics counter animation
function animateCounters() {
  const counters = document.querySelectorAll('.security-metric h3');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.round(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    updateCounter();
  });
}

// Typing effect for hero section
function typeWriter(element, text, speed = 50) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Initialize particle background
function initParticles() {
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#0078D4'
      },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: 0.5,
        random: false
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#0078D4',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      }
    },
    retina_detect: true
  });
}

// Dark mode toggle with smooth transition
function toggleDarkMode() {
  const body = document.body;
  const isDark = body.getAttribute('data-theme') === 'dark';
  body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Set stored theme
  const storedTheme = localStorage.getItem('theme') || 'light';
  document.body.setAttribute('data-theme', storedTheme);

  // Initialize animations
  animateSkills();
  animateCounters();
  initParticles();

  // Add scroll animations
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.documentElement.style.setProperty('--scroll', scrolled + 'px');
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}); 