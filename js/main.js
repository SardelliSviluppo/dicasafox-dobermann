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
// GALLERY FILTER SYSTEM
// ===================================================
const filterBtns  = document.querySelectorAll('.filter-btn');
const galleryGrid = document.getElementById('galleryGrid');

if (filterBtns.length && galleryGrid) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      const items  = galleryGrid.querySelectorAll('.gallery-item, .gallery-placeholder-item');

      items.forEach(item => {
        const cat = item.dataset.category || '';
        const show = filter === 'all' || cat === filter;
        item.style.display = show ? '' : 'none';
        if (show) {
          item.style.animation = 'fadeIn 0.4s ease both';
        }
      });
    });
  });
}

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
  // Allevamento
  // { src: 'images/gallery/allevamento/nome.jpg', alt: 'Allevamento Di Casa Fox', title: 'Struttura allevamento', category: 'allevamento' },

  // Proprietari e Famiglie
  // { src: 'images/gallery/proprietari/nome.jpg', alt: 'Proprietario con Dobermann', title: 'Nome famiglia', category: 'proprietari' },
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

// Generic render function — works for both pages
function renderGalleryData(data, categories, filter) {
  if (!galleryGrid) return;

  const items = filter === 'all'
    ? data
    : data.filter(item => item.category === filter);

  const catsToShow = filter === 'all' ? categories : [filter];

  galleryGrid.innerHTML = '';

  // Real images
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.dataset.category = item.category;
    div.innerHTML = `
      <img src="${item.src}" alt="${item.alt}" loading="lazy">
      <div class="gallery-item-overlay">
        <div class="gallery-item-info">
          <h4>${item.title}</h4>
          <span>${CATEGORY_LABELS[item.category] || item.category}</span>
        </div>
      </div>`;
    galleryGrid.appendChild(div);
    const img = div.querySelector('img');
    div.addEventListener('click', () => openLightbox(img.src, img.alt));
    div.setAttribute('role', 'button');
    div.setAttribute('tabindex', '0');
  });

  // Placeholder cards for empty categories
  catsToShow.forEach(cat => {
    const catItems = data.filter(i => i.category === cat);
    if (catItems.length === 0) {
      const div = document.createElement('div');
      div.className = 'gallery-placeholder-item';
      div.dataset.category = cat;
      div.innerHTML = `
        <div class="ph-icon">${CATEGORY_ICONS[cat] || '📷'}</div>
        <strong style="color:#C0C0C0;font-family:var(--font-heading)">${CATEGORY_LABELS[cat] || cat}</strong>
        <p style="font-size:0.75rem;color:var(--color-gray)">Immagini in arrivo</p>`;
      galleryGrid.appendChild(div);
    }
  });
}

// Detect which page we are on and init accordingly
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

if (galleryGrid) {
  // Read optional ?cat= query param to pre-filter on load
  const urlParams = new URLSearchParams(window.location.search);
  const preFilter = urlParams.get('cat') || 'all';

  if (currentPage === 'i-nostri-dobermann.html') {
    // --- I NOSTRI DOBERMANN PAGE ---
    const dobermannCategories = ['maschi', 'femmine', 'campioni', 'eventi'];
    renderGalleryData(DOBERMANN_DATA, dobermannCategories, preFilter);

    filterBtns.forEach(btn => {
      // Highlight pre-selected filter button
      if (btn.dataset.filter === preFilter) {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGalleryData(DOBERMANN_DATA, dobermannCategories, btn.dataset.filter);
      });
    });

  } else {
    // --- GALLERY PAGE ---
    const galleryCategories = ['allevamento', 'proprietari'];
    renderGalleryData(GALLERY_DATA, galleryCategories, preFilter);

    filterBtns.forEach(btn => {
      if (btn.dataset.filter === preFilter) {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGalleryData(GALLERY_DATA, galleryCategories, btn.dataset.filter);
      });
    });
  }
}
