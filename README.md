# Di Casa Fox Dobermann — Sito Web

## Struttura del Progetto

```
dicasafox/
├── index.html              ← Homepage
├── allevamento.html        ← Pagina Allevamento
├── dobermann.html          ← Pagina Il Dobermann
├── cuccioli.html           ← Pagina Cuccioli
├── addestramento.html      ← Pagina Addestramento
├── gallery.html            ← Pagina Gallery
├── contatti.html           ← Pagina Contatti
├── favicon.ico             ← Favicon
├── .htaccess               ← Configurazione server Aruba
├── css/
│   └── style.css           ← Design system completo
├── js/
│   └── main.js             ← JavaScript (gallery, filtri, form, animazioni)
└── images/
    ├── logo/
    │   ├── logo-dicasafox.png   ← Logo ufficiale
    │   └── favicon-64.png       ← Favicon 64px
    └── gallery/
        ├── maschi/          ← Foto maschi
        ├── femmine/         ← Foto femmine
        ├── campioni/        ← Foto campioni
        ├── cuccioli/        ← Foto cuccioli
        ├── addestramento/   ← Foto addestramento
        └── allevamento/     ← Foto allevamento
```

---

## Come Aggiungere Immagini alla Gallery

### Passo 1 — Carica le immagini
Carica le immagini nella cartella corrispondente alla categoria:
- `images/gallery/maschi/`
- `images/gallery/femmine/`
- `images/gallery/campioni/`
- `images/gallery/cuccioli/`
- `images/gallery/addestramento/`
- `images/gallery/allevamento/`

**Formato consigliato:** JPG o WebP, larghezza massima 1200px, qualità 80-85%.

### Passo 2 — Aggiorna il file JavaScript
Apri `js/main.js` e aggiungi le voci nell'array `GALLERY_DATA`:

```javascript
const GALLERY_DATA = [
  {
    src: 'images/gallery/maschi/nome-del-cane.jpg',
    alt: 'Descrizione immagine',
    title: 'Nome del Cane',
    category: 'maschi'  // maschi | femmine | campioni | cuccioli | addestramento | allevamento
  },
  // ... altre immagini
];
```

### Passo 3 — Salva e carica sul server
Nessuna modifica strutturale necessaria. Il sistema è completamente data-driven.

---

## Pubblicazione su Aruba Linux Basic

1. Accedi al pannello di controllo Aruba
2. Vai su **Gestione File** o usa un client FTP (FileZilla)
3. Carica tutti i file nella cartella `public_html/` (o `www/`)
4. Mantieni la struttura delle cartelle invariata
5. Il file `.htaccess` viene caricato automaticamente

**Credenziali FTP:** disponibili nel pannello Aruba sotto "Hosting" → "Accesso FTP"

---

## Configurazione Email

L'email di contatto è: **stefanosardelli2@gmail.com**

Il modulo di contatto attualmente simula l'invio (frontend only).
Per attivare l'invio reale, si può:
- Usare **Formspree** (gratuito): sostituire `action` del form con `https://formspree.io/f/[ID]`
- Usare **EmailJS**: integrazione JavaScript senza backend
- Configurare un semplice script PHP su Aruba

---

## SEO

Il sito è ottimizzato per le seguenti keyword locali:
- allevamento dobermann
- cuccioli dobermann
- dobermann con pedigree
- allevamento dobermann Lombardia
- allevamento dobermann Como
- addestramento dobermann

Ogni pagina ha:
- `<title>` unico e ottimizzato
- `<meta description>` descrittiva
- `<link rel="canonical">` corretto
- Struttura H1/H2 semantica
- Schema.org LocalBusiness (homepage)

---

## Contatti Tecnici

Per modifiche al sito: stefanosardelli2@gmail.com
