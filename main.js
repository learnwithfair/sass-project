// import './src/sass/main.scss';

// Handle sticky header
const header = document.querySelector('.header');
const scrollThreshold = 100;

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollThreshold) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');

    // Create mobile menu if it doesn't exist yet
    if (!document.querySelector('.mobile-nav')) {
      const mobileNav = document.createElement('div');
      mobileNav.classList.add('mobile-nav');

      // Clone the navigation links
      const navLinksCopy = navLinks.cloneNode(true);
      mobileNav.appendChild(navLinksCopy);

      document.body.appendChild(mobileNav);

      // Add mobile nav styles
      mobileNav.style.position = 'fixed';
      mobileNav.style.top = `${header.offsetHeight}px`;
      mobileNav.style.left = '0';
      mobileNav.style.width = '100%';
      mobileNav.style.backgroundColor = 'white';
      mobileNav.style.padding = '2rem';
      mobileNav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
      mobileNav.style.zIndex = '1000';
      mobileNav.style.transform = 'translateY(-100%)';
      mobileNav.style.opacity = '0';
      mobileNav.style.transition = 'all 0.3s ease-in-out';

      const mobileNavLinks = mobileNav.querySelector('.nav-links');
      mobileNavLinks.style.display = 'flex';
      mobileNavLinks.style.flexDirection = 'column';
      mobileNavLinks.style.gap = '1.5rem';
      mobileNavLinks.style.alignItems = 'flex-start';
    }

    const mobileNav = document.querySelector('.mobile-nav');

    if (menuToggle.classList.contains('active')) {
      mobileNav.style.transform = 'translateY(0)';
      mobileNav.style.opacity = '1';
      document.body.style.overflow = 'hidden';
    } else {
      mobileNav.style.transform = 'translateY(-100%)';
      mobileNav.style.opacity = '0';
      document.body.style.overflow = '';
    }
  });
}

// Add animation to feature cards on scroll
const featureCards = document.querySelectorAll('.feature-card');

const animateOnScroll = (entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, index * 100);
      observer.unobserve(entry.target);
    }
  });
};

// Initialize intersection observer
if (featureCards.length > 0) {
  const observer = new IntersectionObserver(animateOnScroll, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  featureCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    observer.observe(card);
  });
}