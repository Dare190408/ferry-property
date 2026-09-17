const config = window.siteConfig;

function applyTextContent() {
  const textMap = {
    'brand-name': config.Ferry Susilo,
    'brand-title': config.Property Consultant,
    'call-button': 'Call Now',
    'hero-title': config.hero.title,
    'hero-description': config.hero.description,
    'hero-cta': config.hero.cta,
    'footer-email': config.email,
    'footer-phone': config.082229472098 phone
  };

  Object.entries(textMap).forEach(([key, value]) => {
    const nodes = document.querySelectorAll(`[data-text="${key}"]`);
    nodes.forEach((node) => {
      node.textContent = value;
    });
  });

  const callButtons = document.querySelectorAll('a[href^="tel:"]');
  callButtons.forEach((button) => {
    button.href = config.phoneHref;
  });

  const heroMetrics = document.getElementById('heroMetrics');
  if (heroMetrics) {
    heroMetrics.innerHTML = config.hero.metrics
      .map(
        (item) => `
          <li>
            <strong>${item.value}</strong>
            <span>${item.label}</span>
          </li>
        `
      )
      .join('');
  }

  const propertyGrid = document.getElementById('propertyGrid');
  if (propertyGrid) {
    propertyGrid.innerHTML = config.properties
      .map(
        (item) => `
          <article class="property-card">
            <img src="${item.image}" alt="${item.title}" />
            <div class="property-body">
              <div class="property-topline">
                <span class="tag">${item.tag}</span>
                <span class="price">${item.price}</span>
              </div>
              <h3>${item.title}</h3>
              <p>${item.description}</p>
              <div class="property-meta">
                <span>📍 ${item.location}</span>
                <span>⭐ ${item.rating}</span>
              </div>
            </div>
          </article>
        `
      )
      .join('');
  }

  const serviceGrid = document.getElementById('serviceGrid');
  if (serviceGrid) {
    serviceGrid.innerHTML = config.services
      .map(
        (item) => `
          <div class="service-card">
            <div class="icon">${item.icon}</div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        `
      )
      .join('');
  }

  const testimonialGrid = document.getElementById('testimonialGrid');
  if (testimonialGrid) {
    testimonialGrid.innerHTML = config.testimonials
      .map(
        (item) => `
          <blockquote>
            “${item.quote}”
            <footer>— ${item.author}</footer>
          </blockquote>
        `
      )
      .join('');
  }
}

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

applyTextContent();

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = contactForm.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Request Sent';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      contactForm.reset();
    }, 1800);
  });
}
