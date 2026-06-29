/**
 * Di Casa Fox Dobermann — Main JavaScript
 * Versione 2.0 | 2025
 */

'use strict';

// ===================================================
// HEADER SCROLL EFFECT
// ===================================================
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ===================================================
// HAMBURGER MENU
// ===================================================
const hamburger = document.querySelector('.hamburger');
const navMenu   = document.querySelector('.nav-menu');
const navClose  = document.querySelector('.nav-close');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
  });
}

if (navClose && navMenu) {
  navClose.addEventListener('click', () => {
    hamburger && hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
}

// Close nav on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger && hamburger.classList.remove('open');
    navMenu && navMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ===================================================
// ACTIVE NAV LINK
// ===================================================
(function setActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-menu a').forEach(link => {
    // Skip dropdown sub-items — they should never get the top-level active class
    if (link.closest('.dropdown-menu')) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Strip any query string from the href for comparison
    const hrefPage = href.split('?')[0];

    if (hrefPage === current || (current === '' && hrefPage === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

// ===================================================
// SCROLL REVEAL
// ===================================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===================================================
// SCROLL TO TOP BUTTON
// ===================================================
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===================================================
// GALLERY FILTER SYSTEM — inizializzato in DOMContentLoaded
// ===================================================
// (la logica filtri è gestita da initGallery() più in basso)

// ===================================================
// LIGHTBOX
// ===================================================
const lightbox    = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { if (lightboxImg) lightboxImg.src = ''; }, 300);
}

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// Attach lightbox to gallery items with images
document.querySelectorAll('.gallery-item').forEach(item => {
  const img = item.querySelector('img');
  if (img) {
    item.addEventListener('click', () => openLightbox(img.src, img.alt));
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') openLightbox(img.src, img.alt);
    });
  }
});

// ===================================================
// CONTACT FORM
// ===================================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    const originalText = btn.textContent;

    // Simple validation
    const required = contactForm.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#e74c3c';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });

    if (!valid) return;

    // Simulate send (replace with actual backend/formspree)
    btn.textContent = 'Invio in corso...';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = '✓ Messaggio inviato!';
      btn.style.background = 'linear-gradient(135deg, #27ae60, #1e8449)';
      contactForm.reset();

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 4000);
    }, 1500);
  });

  // Remove error style on input
  contactForm.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('input', () => {
      field.style.borderColor = '';
    });
  });
}

// ===================================================
// COUNTER ANIMATION (stats)
// ===================================================
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1500;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target) + (el.dataset.suffix || '');
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

// ===================================================
// GALLERY DATA — Two separate sections
// ===================================================

/**
 * GALLERY_DATA — Pagina gallery.html
 * Categorie: allevamento, proprietari
 *
 * Per aggiungere immagini:
 *   { src: 'images/gallery/allevamento/nome.jpg', alt: '...', title: '...', category: 'allevamento' }
 *   { src: 'images/gallery/proprietari/nome.jpg', alt: '...', title: '...', category: 'proprietari' }
 */
const GALLERY_DATA = [
  // Allevamento (13 foto)
  { src: 'images/gallery/allevamento/foto_01.jpg', alt: 'Allevamento Di Casa Fox', title: 'Allevamento', category: 'allevamento' },
  { src: 'images/gallery/allevamento/foto_02.jpg', alt: 'Allevamento Di Casa Fox', title: 'Allevamento', category: 'allevamento' },
  { src: 'images/gallery/allevamento/foto_03.jpg', alt: 'Allevamento Di Casa Fox', title: 'Allevamento', category: 'allevamento' },
  { src: 'images/gallery/allevamento/foto_04.jpg', alt: 'Allevamento Di Casa Fox', title: 'Allevamento', category: 'allevamento' },
  { src: 'images/gallery/allevamento/foto_05.jpg', alt: 'Allevamento Di Casa Fox', title: 'Allevamento', category: 'allevamento' },
  { src: 'images/gallery/allevamento/foto_06.jpg', alt: 'Allevamento Di Casa Fox', title: 'Allevamento', category: 'allevamento' },
  { src: 'images/gallery/allevamento/foto_07.jpg', alt: 'Allevamento Di Casa Fox', title: 'Allevamento', category: 'allevamento' },
  { src: 'images/gallery/allevamento/foto_08.jpg', alt: 'Allevamento Di Casa Fox', title: 'Allevamento', category: 'allevamento' },
  { src: 'images/gallery/allevamento/foto_09.jpg', alt: 'Allevamento Di Casa Fox', title: 'Allevamento', category: 'allevamento' },
  { src: 'images/gallery/allevamento/foto_10.jpg', alt: 'Allevamento Di Casa Fox', title: 'Allevamento', category: 'allevamento' },
  { src: 'images/gallery/allevamento/foto_11.jpg', alt: 'Allevamento Di Casa Fox', title: 'Allevamento', category: 'allevamento' },
  { src: 'images/gallery/allevamento/foto_12.jpg', alt: 'Allevamento Di Casa Fox', title: 'Allevamento', category: 'allevamento' },
  { src: 'images/gallery/allevamento/foto_13.jpg', alt: 'Allevamento Di Casa Fox', title: 'Allevamento', category: 'allevamento' },

  // Proprietari e Famiglie (35 foto)
  { src: 'images/gallery/proprietari/foto_01.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_02.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_03.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_04.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_05.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_06.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_07.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_08.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_09.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_10.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_11.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_12.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_13.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_14.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_15.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_16.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_17.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_18.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_19.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_20.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_21.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_22.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_23.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_24.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_25.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_26.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_27.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_28.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_29.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_30.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_31.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_32.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_33.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_34.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
  { src: 'images/gallery/proprietari/foto_35.jpg', alt: 'Proprietario con Dobermann Di Casa Fox', title: 'Proprietari e Famiglie', category: 'proprietari' },
];

/**
 * DOBERMANN_DATA — Pagina i-nostri-dobermann.html
 * Categorie: maschi, femmine, campioni, eventi
 *
 * Per aggiungere immagini:
 *   { src: 'images/gallery/maschi/nome.jpg',   alt: '...', title: '...', category: 'maschi' }
 *   { src: 'images/gallery/femmine/nome.jpg',  alt: '...', title: '...', category: 'femmine' }
 *   { src: 'images/gallery/campioni/nome.jpg', alt: '...', title: '...', category: 'campioni' }
 *   { src: 'images/gallery/eventi/nome.jpg',   alt: '...', title: '...', category: 'eventi' }
 */
const DOBERMANN_DATA = [
  // Maschi
  // { src: 'images/gallery/maschi/nome.jpg', alt: 'Dobermann maschio', title: 'Nome cane', category: 'maschi' },

  // Femmine
  // { src: 'images/gallery/femmine/nome.jpg', alt: 'Dobermann femmina', title: 'Nome cane', category: 'femmine' },

  // Campioni
  // { src: 'images/gallery/campioni/nome.jpg', alt: 'Campione Di Casa Fox', title: 'Nome campione', category: 'campioni' },

  // Eventi e Risultati
  // { src: 'images/gallery/eventi/nome.jpg', alt: 'Esposizione Dobermann', title: 'Titolo / Evento', category: 'eventi' },
];

// Category labels
const CATEGORY_LABELS = {
  allevamento: 'Allevamento',
  proprietari: 'Proprietari e Famiglie',
  maschi:      'Maschi',
  femmine:     'Femmine',
  campioni:    'Campioni',
  eventi:      'Eventi e Risultati',
};

// Placeholder icons
const CATEGORY_ICONS = {
  allevamento: '🏡',
  proprietari: '👥',
  maschi:      '♂️',
  femmine:     '♀️',
  campioni:    '🏆',
  eventi:      '🥇',
};

// renderGalleryData rimossa — sostituita da renderGallery() più in basso

// ===================================================
// GALLERY INIT — avvolto in DOMContentLoaded per garantire
// che galleryGrid e filterBtns siano presenti nel DOM
// ===================================================
document.addEventListener('DOMContentLoaded', function initGallery() {
  const grid    = document.getElementById('galleryGrid');
  const btns    = document.querySelectorAll('.filter-btn');
  const page    = window.location.pathname.split('/').pop() || 'index.html';

  // Solo sulla pagina gallery.html (non su i-nostri-dobermann.html)
  if (!grid || page === 'i-nostri-dobermann.html') return;

  const galleryCategories = ['allevamento', 'proprietari'];

  // Leggi eventuale ?cat= dall'URL
  const urlParams = new URLSearchParams(window.location.search);
  const preFilter = urlParams.get('cat') || 'all';

  // Imposta il pulsante attivo in base al parametro URL
  btns.forEach(b => {
    b.classList.toggle('active', b.dataset.filter === preFilter ||
      (preFilter === 'all' && b.dataset.filter === 'all'));
  });

  // Render iniziale
  renderGallery(grid, GALLERY_DATA, galleryCategories, preFilter);

  // Listener filtri
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(grid, GALLERY_DATA, galleryCategories, btn.dataset.filter);
      // Aggiorna URL senza reload
      const url = new URL(window.location);
      if (btn.dataset.filter === 'all') {
        url.searchParams.delete('cat');
      } else {
        url.searchParams.set('cat', btn.dataset.filter);
      }
      history.replaceState(null, '', url);
    });
  });
});

// Funzione di rendering gallery (usata da initGallery)
function renderGallery(grid, data, categories, filter) {
  const items = filter === 'all'
    ? data
    : data.filter(item => item.category === filter);

  grid.innerHTML = '';

  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.dataset.category = item.category;
    div.setAttribute('role', 'button');
    div.setAttribute('tabindex', '0');
    div.innerHTML = `
      <img src="${item.src}" alt="${item.alt}" loading="lazy">
      <div class="gallery-item-overlay">
        <div class="gallery-item-info">
          <h4>${item.title}</h4>
          <span>${CATEGORY_LABELS[item.category] || item.category}</span>
        </div>
      </div>`;
    const img = div.querySelector('img');
    div.addEventListener('click', () => openLightbox(img.src, img.alt));
    div.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openLightbox(img.src, img.alt);
    });
    grid.appendChild(div);
  });

  // Nessun placeholder: se non ci sono foto la griglia rimane vuota
}

/* ============================================================
   ACCORDION STANDARD FCI
   ============================================================ */
(function initFciAccordion() {
  document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.fci-toggle');
    toggles.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const body = btn.nextElementSibling;
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        // Chiudi tutti gli altri (comportamento accordion)
        toggles.forEach(function(other) {
          if (other !== btn) {
            other.setAttribute('aria-expanded', 'false');
            const otherBody = other.nextElementSibling;
            if (otherBody) otherBody.classList.remove('open');
          }
        });
        // Apri/chiudi quello cliccato
        btn.setAttribute('aria-expanded', String(!isOpen));
        if (body) body.classList.toggle('open', !isOpen);
      });
    });
  });
})();
