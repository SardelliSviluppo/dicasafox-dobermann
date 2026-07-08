/**
 * Di Casa Fox Dobermann — Galleria "I Nostri Dobermann"
 * 7 categorie: Maschi, Femmine, Campioni, Cuccioli, Addestramento, Allevamento, Eventi e Risultati
 * v3.3 — 2025
 *
 * Logica Campioni: i soggetti con campione: true rimangono visibili
 * nella loro categoria originale (Maschi/Femmine) E compaiono anche
 * nel filtro Campioni. La proprietà category NON viene modificata.
 */

'use strict';

// ============================================================
// CONFIGURAZIONE CATEGORIE
// ============================================================
const CATEGORIES = [
  { id: 'maschi',        label: '♂ Maschi',             icon: '♂',  empty: false },
  { id: 'femmine',       label: '♀ Femmine',            icon: '♀',  empty: false },
  { id: 'campioni',      label: '🏆 Campioni',           icon: '🏆', empty: false },
  { id: 'cuccioli',      label: '🐾 Cuccioli',           icon: '🐾', empty: false },
  { id: 'addestramento', label: '🎯 Addestramento',      icon: '🎯', empty: false },
  { id: 'allevamento',   label: '🏡 Allevamento',        icon: '🏡', empty: false },
  { id: 'eventi',        label: '🥇 Eventi e Risultati', icon: '🥇', empty: true  },
];

// ============================================================
// DATI CANI — MASCHI (14 soggetti)
// ============================================================
const MASCHI = [
  {
    name: "Ace", gender: "maschio", category: "maschi", campione: true,
    photos: Array.from({length: 2}, (_, i) => ({
      full:  `images/dobermann/maschi/ace/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/maschi/ace/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
  {
    name: "Ubaldo Di Casa Fox", gender: "maschio", category: "maschi", campione: true, hasPedigree: true,
    photos: Array.from({length: 6}, (_, i) => ({
      full:  `images/dobermann/maschi/ade-di-casa-fox/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/maschi/ade-di-casa-fox/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
  {
    name: "Battista Di Casa Fox", gender: "maschio", category: "maschi", campione: true,
    photos: Array.from({length: 19}, (_, i) => ({
      full:  `images/dobermann/maschi/battista-di-casa-fox/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/maschi/battista-di-casa-fox/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
  {
    name: "Ermes Di Casa Fox", gender: "maschio", category: "maschi", campione: true, hasPedigree: true,
    photos: Array.from({length: 7}, (_, i) => ({
      full:  `images/dobermann/maschi/ermes-di-casa-fox/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/maschi/ermes-di-casa-fox/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
  {
    name: "FireFox", gender: "maschio", category: "maschi", campione: true, hasPedigree: true,
    photos: Array.from({length: 3}, (_, i) => ({
      full:  `images/dobermann/maschi/firefox/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/maschi/firefox/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
  {
    name: "Hero Di Casa Fox", gender: "maschio", category: "maschi", campione: true,
    photos: Array.from({length: 19}, (_, i) => ({
      full:  `images/dobermann/maschi/hero-di-casa-fox/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/maschi/hero-di-casa-fox/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
  {
    name: "Horus Di Casa Fox", gender: "maschio", category: "maschi", campione: true, hasPedigree: true,
    photos: Array.from({length: 2}, (_, i) => ({
      full:  `images/dobermann/maschi/horus-di-casa-fox/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/maschi/horus-di-casa-fox/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
  {
    name: "Iron Di Casa Fox", gender: "maschio", category: "maschi", campione: true, hasPedigree: true,
    photos: Array.from({length: 10}, (_, i) => ({
      full:  `images/dobermann/maschi/iron-di-casa-fox/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/maschi/iron-di-casa-fox/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
  {
    name: "King Arthur Di Casa Fox", gender: "maschio", category: "maschi", campione: true, hasPedigree: true,
    photos: Array.from({length: 5}, (_, i) => ({
      full:  `images/dobermann/maschi/king-artur-di-casa-fox/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/maschi/king-artur-di-casa-fox/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
  {
    name: "Wollas Di Casa Fox", gender: "maschio", category: "maschi", hasPedigree: true,
    photos: Array.from({length: 5}, (_, i) => ({
      full:  `images/dobermann/maschi/wollas-di-casa-fox/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/maschi/wollas-di-casa-fox/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
  {
    name: "Renoir Di Casa Fox", gender: "maschio", category: "maschi", campione: true, hasPedigree: true,
    photos: [{
      full:  "images/dobermann/maschi/renoir-di-casa-fox/foto_01.jpg",
      thumb: "images/dobermann/maschi/renoir-di-casa-fox/thumbs/foto_01.jpg"
    }]
  },
  {
    name: "Rhuy Di Casa Fox", gender: "maschio", category: "maschi", campione: true,
    photos: Array.from({length: 11}, (_, i) => ({
      full:  `images/dobermann/maschi/rhuy-di-casa-fox/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/maschi/rhuy-di-casa-fox/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
  {
    name: "Thiago Di Casa Fox", gender: "maschio", category: "maschi", campione: true, hasPedigree: true,
    photos: Array.from({length: 10}, (_, i) => ({
      full:  `images/dobermann/maschi/thiago-di-casa-fox/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/maschi/thiago-di-casa-fox/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
  {
    name: "Edgar Di Casa Fox", gender: "maschio", category: "maschi", campione: true, hasPedigree: true,
    photos: Array.from({length: 2}, (_, i) => ({
      full:  `images/dobermann/maschi/edegar-di-casa-fox/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/maschi/edegar-di-casa-fox/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
];

// ============================================================
// DATI CANI — FEMMINE (11 soggetti, 70 foto)
// ============================================================
const FEMMINE = [
  {
    name: "Allison", gender: "femmina", category: "femmine", hasPedigree: true,
    photos: [{
      full:  "images/dobermann/femmine/allison-di-casa-fox/foto_01.jpg",
      thumb: "images/dobermann/femmine/allison-di-casa-fox/thumbs/foto_01.jpg"
    }]
  },
  {
    name: "Bleky Spirit Di Casa Fox", gender: "femmina", category: "femmine", campione: true, hasPedigree: true,
    photos: Array.from({length: 6}, (_, i) => ({
      full:  `images/dobermann/femmine/blacky-spirit-di-casa-fox/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/femmine/blacky-spirit-di-casa-fox/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
  {
    name: "Elisir Di Casa Fox", gender: "femmina", category: "femmine",
    photos: Array.from({length: 3}, (_, i) => ({
      full:  `images/dobermann/femmine/elisir-di-casa-fox/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/femmine/elisir-di-casa-fox/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
  {
    name: "Ester Di Casa Fox", gender: "femmina", category: "femmine", campione: true,
    photos: Array.from({length: 2}, (_, i) => ({
      full:  `images/dobermann/femmine/ester-di-casa-fox/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/femmine/ester-di-casa-fox/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
  {
    name: "Hareta Di Casa Fox", gender: "femmina", category: "femmine",
    photos: Array.from({length: 3}, (_, i) => ({
      full:  `images/dobermann/femmine/hareta-di-casa-fox/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/femmine/hareta-di-casa-fox/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
  {
    name: "Holly Di Casa Fox", gender: "femmina", category: "femmine", campione: true,
    photos: Array.from({length: 16}, (_, i) => ({
      full:  `images/dobermann/femmine/holly-di-casa-fox/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/femmine/holly-di-casa-fox/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
  {
    name: "Janila Black Di Casa Fox", gender: "femmina", category: "femmine", campione: true,
    photos: Array.from({length: 10}, (_, i) => ({
      full:  `images/dobermann/femmine/janila-black-di-casa-fox/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/femmine/janila-black-di-casa-fox/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
  {
    name: "Kali Di Casa Fox", gender: "femmina", category: "femmine",
    photos: Array.from({length: 10}, (_, i) => ({
      full:  `images/dobermann/femmine/kali-di-casa-fox/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/femmine/kali-di-casa-fox/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
  {
    name: "Kora Di Casa Fox", gender: "femmina", category: "femmine", campione: true, hasPedigree: true,
    photos: Array.from({length: 13}, (_, i) => ({
      full:  `images/dobermann/femmine/kora-di-casa-fox/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/femmine/kora-di-casa-fox/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
  {
    name: "Reja Di Casa Fox", gender: "femmina", category: "femmine",
    photos: Array.from({length: 6}, (_, i) => ({
      full:  `images/dobermann/femmine/reja-di-casa-fox/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/femmine/reja-di-casa-fox/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
  {
    name: "Tayss Di Casa Fox", gender: "femmina", category: "femmine", campione: true,
    photos: Array.from({length: 2}, (_, i) => ({
      full:  `images/dobermann/femmine/tayss-di-casa-fox/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/femmine/tayss-di-casa-fox/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
  {
    name: "Hadelfraide Di Casa Fox", gender: "femmina", category: "femmine", campione: true, hasPedigree: true,
    photos: Array.from({length: 4}, (_, i) => ({
      full:  `images/dobermann/femmine/hadelfraide-di-casa-fox/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/femmine/hadelfraide-di-casa-fox/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  },
];

// ============================================================
// DATI — CUCCIOLI (28 foto in galleria unica)
// ============================================================
const CUCCIOLI = [
  {
    name: "Cuccioli Di Casa Fox", gender: null, category: "cuccioli",
    photos: Array.from({length: 28}, (_, i) => ({
      full:  `images/dobermann/cuccioli/cuccioli/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/cuccioli/cuccioli/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  }
];

// ============================================================
// DATI — ADDESTRAMENTO (46 foto in galleria unica)
// ============================================================
const ADDESTRAMENTO = [
  {
    name: "Addestramento Di Casa Fox", gender: null, category: "addestramento",
    photos: Array.from({length: 46}, (_, i) => ({
      full:  `images/dobermann/addestramento/addestramento/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/addestramento/addestramento/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  }
];

// ============================================================
// DATI — ALLEVAMENTO (25 foto in galleria unica)
// ============================================================
const ALLEVAMENTO = [
  {
    name: "Allevamento Di Casa Fox", gender: null, category: "allevamento",
    photos: Array.from({length: 25}, (_, i) => ({
      full:  `images/dobermann/allevamento/allevamento/foto_${String(i+1).padStart(2,'0')}.jpg`,
      thumb: `images/dobermann/allevamento/allevamento/thumbs/foto_${String(i+1).padStart(2,'0')}.jpg`
    }))
  }
];

// ============================================================
// TUTTI I SOGGETTI UNIFICATI
// ============================================================
const ALL_DOGS = [
  ...MASCHI,
  ...FEMMINE,
  ...CUCCIOLI,
  ...ADDESTRAMENTO,
  ...ALLEVAMENTO,
];

// ============================================================
// STATO LIGHTBOX
// ============================================================
let lbPhotos  = [];
let lbIndex   = 0;
let lbDogName = '';

// ============================================================
// RENDER SCHEDA SINGOLO SOGGETTO
// ============================================================
function renderDogCard(dog) {
  const MAX_THUMBS = 3;
  const thumbsToShow = dog.photos.slice(0, MAX_THUMBS);
  const extraCount   = dog.photos.length - MAX_THUMBS;

  let genderBadge = '';
  if (dog.gender === 'maschio') genderBadge = '<span class="dog-gender-badge male">♂ Maschio</span>';
  else if (dog.gender === 'femmina') genderBadge = '<span class="dog-gender-badge female">♀ Femmina</span>';

  const safeName = dog.name.replace(/'/g, "\\'");

  let thumbsHTML = thumbsToShow.map((p, i) => `
    <div class="dog-thumb" onclick="openDogLightbox('${safeName}', ${i})" title="Foto ${i+1}">
      <img src="${p.thumb}" alt="${dog.name} — foto ${i+1}" loading="lazy">
    </div>
  `).join('');

  if (extraCount > 0) {
    thumbsHTML += `
      <div class="dog-thumb-more" onclick="openDogLightbox('${safeName}', ${MAX_THUMBS})" title="Vedi tutte le foto">
        +${extraCount}
      </div>`;
  }

  // Barra pulsanti — mostrata solo se il cane ha dati nel DOG_DB
  const hasData = typeof DOG_DB !== 'undefined' && DOG_DB[dog.name];
  const hasTitoli = hasData && DOG_DB[dog.name].titoli && DOG_DB[dog.name].titoli.length > 0;
  const actionBar = hasData ? `
    <div class="dog-action-bar">
      <button class="dab-btn" onclick="openDogTab('${safeName}', 'pedigree')"     title="Pedigree genealogico">Pedigree</button>
      <button class="dab-btn" onclick="openDogTab('${safeName}', 'anagrafica')"   title="Dati anagrafici">Anagrafica</button>
      <button class="dab-btn" onclick="openDogTab('${safeName}', 'avvenimenti')"  title="Avvenimenti">Avvenimenti</button>
      <button class="dab-btn" onclick="openDogTab('${safeName}', 'risultati')"    title="Risultati sportivi">Risultati</button>
      ${hasTitoli ? `<button class="dab-btn dab-btn-titoli" onclick="openDogTab('${safeName}', 'titoli')" title="Titoli">Titoli</button>` : ''}
      <button class="dab-btn" onclick="openDogTab('${safeName}', 'discendenti')"  title="Discendenti">Discendenti</button>
    </div>` : '';

  return `
    <div class="dog-card" data-category="${dog.category}">
      <div class="dog-main-photo" onclick="openDogLightbox('${safeName}', 0)">
        <img src="${dog.photos[0].full}" alt="${dog.name}" loading="lazy">
        ${genderBadge}
        <span class="dog-photo-count">📷 ${dog.photos.length} foto</span>
      </div>
      <div class="dog-info">
        <h3 class="dog-name">${dog.name}</h3>
        <p class="dog-affisso">Allevamento Di Casa Fox · Pedigree ENCI/FCI</p>
      </div>
      ${dog.photos.length > 1 ? `
      <div class="dog-thumbs">
        <div class="dog-thumbs-grid">${thumbsHTML}</div>
      </div>` : ''}
      ${actionBar}
    </div>`;
}

// ============================================================
// RENDER PLACEHOLDER CATEGORIA VUOTA
// ============================================================
function renderEmptyCategory(cat) {
  const catConfig = CATEGORIES.find(c => c.id === cat);
  const label = catConfig ? catConfig.label : cat;
  const icon  = catConfig ? catConfig.icon  : '📷';
  return `
    <div class="dog-card dog-card--empty" data-category="${cat}">
      <div class="dog-empty-placeholder">
        <span class="dog-empty-icon">${icon}</span>
        <p class="dog-empty-label">${label}</p>
        <p class="dog-empty-sub">Contenuti in arrivo</p>
      </div>
    </div>`;
}

// ============================================================
// RENDER GRIGLIA CON FILTRO
// ============================================================
function renderDogs(filter) {
  const grid     = document.getElementById('dogsGrid');
  const countNum = document.getElementById('dogsCountNum');
  if (!grid) return;

  let html = '';
  let count = 0;

  if (filter === 'all') {
    // Mostra tutti i soggetti reali
    ALL_DOGS.forEach(dog => {
      html += renderDogCard(dog);
      count++;
    });
    // Aggiungi placeholder solo per eventi (ancora vuoti)
    html += renderEmptyCategory('eventi');
  } else if (filter === 'campioni') {
    // Mostra tutti i soggetti con campione: true
    const campioni = ALL_DOGS.filter(d => d.campione === true);
    if (campioni.length > 0) {
      campioni.forEach(dog => {
        html += renderDogCard(dog);
        count++;
      });
    } else {
      html += renderEmptyCategory('campioni');
    }
  } else {
    // Filtra per categoria specifica
    const filtered = ALL_DOGS.filter(d => d.category === filter);
    if (filtered.length > 0) {
      filtered.forEach(dog => {
        html += renderDogCard(dog);
        count++;
      });
    } else {
      // Categoria vuota
      html += renderEmptyCategory(filter);
    }
  }

  grid.innerHTML = html;
  if (countNum) countNum.textContent = filter === 'all'
    ? ALL_DOGS.length
    : filter === 'campioni'
      ? ALL_DOGS.filter(d => d.campione === true).length
      : ALL_DOGS.filter(d => d.category === filter).length;
}

// ============================================================
// LIGHTBOX
// ============================================================
function openDogLightbox(dogName, startIndex) {
  const dog = ALL_DOGS.find(d => d.name === dogName);
  if (!dog) return;

  lbPhotos  = dog.photos;
  lbIndex   = startIndex;
  lbDogName = dogName;

  const lb = document.getElementById('dogLightbox');
  if (!lb) return;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
  updateDogLightbox();
}

function updateDogLightbox() {
  const img     = document.getElementById('dogLightboxImg');
  const caption = document.getElementById('dogLightboxCaption');
  const counter = document.getElementById('dogLightboxCounter');
  if (!img) return;

  img.src = lbPhotos[lbIndex].full;
  img.alt = `${lbDogName} — foto ${lbIndex + 1}`;
  if (caption) caption.textContent = lbDogName;
  if (counter) counter.textContent = `${lbIndex + 1} / ${lbPhotos.length}`;
}

function closeDogLightbox() {
  const lb = document.getElementById('dogLightbox');
  if (!lb) return;
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

function prevDogPhoto() {
  lbIndex = (lbIndex - 1 + lbPhotos.length) % lbPhotos.length;
  updateDogLightbox();
}

function nextDogPhoto() {
  lbIndex = (lbIndex + 1) % lbPhotos.length;
  updateDogLightbox();
}

// Esponi globalmente per onclick inline
window.openDogLightbox  = openDogLightbox;
window.closeDogLightbox = closeDogLightbox;
window.prevDogPhoto     = prevDogPhoto;
window.nextDogPhoto     = nextDogPhoto;

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', function () {

  // Leggi ?cat= dall'URL
  const urlParams = new URLSearchParams(window.location.search);
  const catParam  = urlParams.get('cat') || 'all';

  // Render iniziale
  renderDogs(catParam);

  // Bottoni filtro
  const filterBtns = document.querySelectorAll('.dogs-filter-btn');
  filterBtns.forEach(btn => {
    const f = btn.dataset.filter;
    btn.classList.toggle('active', f === catParam || (catParam === 'all' && f === 'all'));

    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderDogs(this.dataset.filter);
      // Aggiorna URL senza reload
      const url = new URL(window.location);
      if (this.dataset.filter === 'all') {
        url.searchParams.delete('cat');
      } else {
        url.searchParams.set('cat', this.dataset.filter);
      }
      history.replaceState(null, '', url);
    });
  });

  // Lightbox eventi
  const lbClose = document.getElementById('dogLightboxClose');
  const lbPrev  = document.getElementById('dogLightboxPrev');
  const lbNext  = document.getElementById('dogLightboxNext');
  const lbEl    = document.getElementById('dogLightbox');

  if (lbClose) lbClose.addEventListener('click', closeDogLightbox);
  if (lbPrev)  lbPrev.addEventListener('click', prevDogPhoto);
  if (lbNext)  lbNext.addEventListener('click', nextDogPhoto);
  if (lbEl)    lbEl.addEventListener('click', e => { if (e.target === lbEl) closeDogLightbox(); });

  // Tastiera
  document.addEventListener('keydown', e => {
    const lb = document.getElementById('dogLightbox');
    if (!lb || !lb.classList.contains('open')) return;
    if (e.key === 'Escape')     closeDogLightbox();
    if (e.key === 'ArrowLeft')  prevDogPhoto();
    if (e.key === 'ArrowRight') nextDogPhoto();
  });

  // Swipe touch
  let touchStartX = 0;
  if (lbEl) {
    lbEl.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    lbEl.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextDogPhoto(); else prevDogPhoto();
      }
    });
  }
});
