/**
 * Di Casa Fox Dobermann — Scheda Completa Cane
 * Sistema a 5 schede: Pedigree · Anagrafica · Avvenimenti · Risultati · Discendenti
 * v2.0 — 2025
 */

'use strict';

// ============================================================
// DATABASE CANI
// ============================================================
const DOG_DB = {
  'Hadelfraide Di Casa Fox': {
    anagrafica: {
      nome: 'Hadelfraide Di Casa Fox',
      roi: 'LO14148400',
      razza: 'Dobermann',
      mantello: 'Marrone focato',
      sesso: 'Femmina',
      nascita: '5 agosto 2014',
      allevatore: 'Allevamento Di Casa Fox',
      proprietario: 'Mei Michela',
      microchip: '380260002332691',
      tatuaggio: '',
      stato: ''
    },

    titoli: [
      {
        data: '15 febbraio 2017',
        titolo: 'Campione Italiano di Bellezza'
      },
      {
        data: '1 agosto 2017',
        titolo: 'Campione Sociale'
      }
    ],

    avvenimenti: [
      {
        data: '13 dicembre 2015',
        descrizione: 'ZTP',
        luogo: ''
      },
      {
        data: '1 aprile 2016',
        descrizione: 'Brevetto 2',
        luogo: ''
      },
      {
        data: '20 agosto 2015',
        descrizione: 'Controllo radiografico — Displasia anca HD.A (0)',
        luogo: ''
      },
      {
        data: '19 gennaio 2016',
        descrizione: 'Deposito campione biologico — Laboratorio Vetogene - ENCI Servizi',
        luogo: ''
      }
    ],

    risultati: [
  {
    data: '8 gennaio 2017',
    evento: 'Esposizione Internazionale',
    localita: 'Carrara (MS)',
    giornata: '8 gennaio 2017',
    sottoprova: '',
    qualifica: '',
    classifica: '',
    certificati: '',
    giudice: ''
  },
  {
    data: '11 - 12 giugno 2016',
    evento: 'Raduno Nazionale',
    localita: 'Pisa (PI)',
    giornata: '11 - 12 giugno 2016',
    sottoprova: '',
    qualifica: '',
    classifica: '',
    certificati: '',
    giudice: ''
  },
  {
    data: '5 giugno 2016',
    evento: 'Esposizione Internazionale',
    localita: 'Pisa (PI)',
    giornata: '5 giugno 2016',
    sottoprova: '',
    qualifica: '',
    classifica: '',
    certificati: '',
    giudice: ''
  },
  {
    data: '4 giugno 2016',
    evento: 'Esposizione Nazionale',
    localita: 'Pisa (PI)',
    giornata: '4 giugno 2016',
    sottoprova: '',
    qualifica: '',
    classifica: '',
    certificati: '',
    giudice: ''
  }
],

discendenti: [],

    pedigree: {
      soggetto: { nome: 'Hadelfraide Di Casa Fox', roi: 'LO14148400', titoli: 'CH IT · CH SOC', sesso: 'f' },

      padre: { nome: 'Toscano Del Diamante Nero',  roi: 'LO1272853',          titoli: '',         sesso: 'm' },
      madre: { nome: 'Umaga Del Monte Aspro',       roi: 'LO1066207',          titoli: '',         sesso: 'f' },

      nonni: {
        pp: { nome: 'Urbano Del Diamante Nero',     roi: 'LO0453422',          titoli: 'CH INT · CH ITA', sesso: 'm' },
        mp: { nome: 'Clara Del Diamante Nero',      roi: 'LO1023103',          titoli: '',         sesso: 'f' },
        pm: { nome: 'Hero Di Casa Fox',             roi: 'LO08100422',         titoli: 'HDO',      sesso: 'm' },
        mm: { nome: 'Paloma Picasso De Grande Vinko', roi: 'LO04131499',       titoli: '',         sesso: 'f' },
      },

      bisnonni: {
        ppp: { nome: 'Victor Vito Del Rio Bianco',  roi: 'LO0168484',          titoli: 'CH · HDO', sesso: 'm' },
        mpp: { nome: 'Indiana Del Diamante Nero',   roi: 'LO0052352',          titoli: 'CH',       sesso: 'f' },
        pmp: { nome: 'Zedor Del Nasi',              roi: 'SLRD002747/JR700549',titoli: 'IN TCH · HDO', sesso: 'm' },
        mmp: { nome: 'Ollybee Del Diamante Nero',   roi: 'LO0765825',          titoli: '',         sesso: 'f' },
        ppm: { nome: 'Zedor Del Nasi',              roi: 'SLRD002747/JR700549',titoli: 'IN TCH · HDO', sesso: 'm' },
        mpm: { nome: 'Elisir Di Casa Fox',          roi: 'LO0593231',          titoli: 'HDO',      sesso: 'f' },
        pmm: { nome: 'Baron Nike Renewal',          roi: 'JRSP75450',          titoli: 'CH YU · CACIB · INTCH', sesso: 'm' },
        mmm: { nome: 'Grafinya Shanel-San De Vinko',roi: 'UA.UKU.004300/97',   titoli: '',         sesso: 'f' },
      },

      quarta: {
        pppp: { nome: 'Moro Del Diamante Nero',     roi: 'LO98134383',         titoli: '',         sesso: 'm' },
        mppp: { nome: 'Zeni Del Riobianco',         roi: 'DS169167',           titoli: '',         sesso: 'f' },
        pmpp: { nome: 'Nitro Del Rio Bianco',       roi: 'LO9914550',          titoli: '',         sesso: 'm' },
        mmpp: { nome: 'India Del Diamante Nero',    roi: 'DS149788',           titoli: '',         sesso: 'f' },
        ppmp: { nome: 'Baron Nike Renewal',         roi: 'JR 75450 DOB',       titoli: 'CH YU · CACIB · INTCH', sesso: 'm' },
        mpmp: { nome: 'Akuna-Matata De Grande Vinko',roi: 'SLR 002731',        titoli: 'CH RUS',   sesso: 'f' },
        pmmp: { nome: 'Victor Vito Del Rio Bianco', roi: 'LO0168484',          titoli: 'CH · HDO', sesso: 'm' },
        mmmp: { nome: 'Pampa Del Diamante Nero',    roi: 'LO0319644',          titoli: '',         sesso: 'f' },
        pppm: { nome: 'Baron Nike Renewal',         roi: 'JR 75450 DOB',       titoli: 'CH YU · CACIB · INTCH', sesso: 'm' },
        mppm: { nome: 'Akuna-Matata De Grande Vinko',roi: 'SLR 002731',        titoli: 'CH RUS',   sesso: 'f' },
        pmpm: { nome: 'Battista Di Casa Fox',       roi: 'LO0366679',          titoli: 'CH I · CH A.I.A.D. · ZTP', sesso: 'm' },
        mmpm: { nome: 'Everzigova Di Poggiopiano',  roi: 'LO02140939',         titoli: 'HD-A · CH', sesso: 'f' },
        ppmm: { nome: 'Prinz Vom Norden Stamm',     roi: 'DS091001',           titoli: 'CH IT · CH AIAD', sesso: 'm' },
        mpmm: { nome: 'Borana Savages',             roi: 'SP71417DOB',         titoli: 'CAC · CACIB · BOB', sesso: 'f' },
        pmmm: { nome: 'Mauveres Mufasa De Stang-Zu',roi: 'LOF056855',          titoli: '',         sesso: 'm' },
        mmmm: { nome: 'Ak-Yar Andromeda',           roi: 'UA.UKU004311/97',    titoli: 'CH RUS · IPO I', sesso: 'f' },
      },
    },

  }, // fine Hadelfraide Di Casa Fox

  'Rhuy Di Casa Fox': {
    // ---- ANAGRAFICA ----
    anagrafica: {
      nome:         'Rhuy Di Casa Fox',
      roi:          'LO10189984',
      razza:        'Dobermann',
      mantello:     'Nero focato',
      sesso:        'Maschio',
      nascita:      '15 settembre 2010',
      allevatore:   'Allevamento Di Casa Fox',
      proprietario: 'Allevamento Di Casa Fox',
      microchip:    '380260080066679',
      tatuaggio:    '—',
    },

    // ---- AVVENIMENTI ----
    avvenimenti: [
      {
        data:        '16 giugno 2015',
        descrizione: 'Deposito campione biologico',
        luogo:       'Laboratorio Vetogene - ENCI Servizi',
      },
    ],

    // ---- RISULTATI ----
    risultati: [
      {
        data:       '24 gennaio 2015',
        evento:     'Prove di utilità e difesa',
        localita:   'Cecina (LI)',
        giornata:   '24 gennaio 2015',
        sottoprova: 'ZTP',
        qualifica:  '1A - Eccellente',
        classifica: '',
        giudice:    'Pezzano Pietro Gino',
      },
      {
        data:       '16 - 17 novembre 2013',
        evento:     'Prove di utilità e difesa',
        localita:   'Cecina (LI)',
        giornata:   '17 novembre 2013',
        sottoprova: 'IPO2',
        qualifica:  'B',
        classifica: '1° classificato',
        giudice:    'Grosso Clemente Giorgio',
      },
      {
        data:       '19 - 20 ottobre 2013',
        evento:     'Prove di utilità e difesa',
        localita:   'Molare (AL)',
        giornata:   '20 ottobre 2013',
        sottoprova: 'IPO1',
        qualifica:  'MB',
        classifica: '1° classificato',
        giudice:    'Pezzano Pietro Gino / Marocchi Silvia',
      },
    ],

    // ---- DISCENDENTI ----
    discendenti: [
      {
        data: '24 settembre 2012',
        figli: [
          { roi: 'LO12159782', nome: 'Yamaha Di Casa Fox',  sesso: 'f' },
          { roi: 'LO12159780', nome: 'Yuba Di Casa Fox',    sesso: 'f' },
          { roi: 'LO12159784', nome: 'Yena Di Casa Fox',    sesso: 'f' },
          { roi: 'LO12159778', nome: 'Yansolo Di Casa Fox', sesso: 'm' },
          { roi: 'LO12159776', nome: 'Yorky Di Casa Fox',   sesso: 'm' },
          { roi: 'LO12159783', nome: 'Yuma Di Casa Fox',    sesso: 'f' },
        ],
      },
      {
        data: '5 febbraio 2016',
        figli: [
          { roi: 'LO1656166', nome: 'Antares', sesso: 'm' },
        ],
      },
    ],

    // ---- PEDIGREE ----
    pedigree: {
      soggetto: { nome: 'Rhuy Di Casa Fox', roi: 'LO10189984', titoli: '', sesso: 'm' },

      padre: { nome: 'Hero Di Casa Fox',           roi: 'LO08100422',          titoli: 'HDO',                          sesso: 'm' },
      madre: { nome: 'Reginaquanita Di Prisconte', roi: 'LO0875964',           titoli: '',                             sesso: 'f' },

      nonni: {
        pp: { nome: 'Zedor Del Nasi',           roi: 'SLRD002747/JR700549', titoli: 'IN TCH · HDO · PHPV/HCO · RDO', sesso: 'm' },
        mp: { nome: 'Elisir Di Casa Fox',        roi: 'LO0593231',           titoli: 'HDO',                           sesso: 'f' },
        pm: { nome: 'Pathos Delle Querce Nere', roi: 'LO0547687',           titoli: 'CH',                            sesso: 'm' },
        mm: { nome: 'Ully Di Prisconte',         roi: 'LO0518840',           titoli: 'HDA',                           sesso: 'f' },
      },

      bisnonni: {
        ppp: { nome: 'Baron Nike Renewal',            roi: 'JR75450 DOB',   titoli: 'CH YU · CACIB · INTCH',      sesso: 'm' },
        mpp: { nome: 'Akuna-Matata De Grande Vinko',  roi: 'SLR 002731',    titoli: 'CH RUS',                     sesso: 'f' },
        pmp: { nome: 'Battista Di Casa Fox',           roi: 'LO0366679',     titoli: 'CH I · CH A.I.A.D. · ZTP',  sesso: 'm' },
        mmp: { nome: 'Everzigova Di Poggiopiano',      roi: 'LO02140939',    titoli: 'HD-A · CH',                  sesso: 'f' },
        ppm: { nome: 'Urbano Del Diamante Nero',       roi: 'LO0453422',     titoli: 'CH INT · CH ITA',            sesso: 'm' },
        mpm: { nome: 'Ninette Delle Sinvessa',         roi: 'LO02103523',    titoli: '',                           sesso: 'f' },
        pmm: { nome: 'Heartless Di Prisconte',         roi: 'LO0261637',     titoli: 'ZTP · HDA',                  sesso: 'm' },
        mmm: { nome: 'Enoir Di Prisconte',             roi: 'LO9892496',     titoli: '',                           sesso: 'f' },
      },

      quarta: {
        pppp: { nome: 'Prinz Vom Norden Stamm',        roi: 'DS091001',      titoli: 'CH IT · CH AIAD',            sesso: 'm' },
        mppp: { nome: 'Borana Sawages',                roi: 'JR71417 DOB',   titoli: 'CAC · CACIB · BOB · PRM',    sesso: 'f' },
        pmpp: { nome: 'Tigr Iz Slavnoi Stai',          roi: 'RKF0031707',    titoli: 'CH RUS',                     sesso: 'm' },
        mmpp: { nome: 'Ak-Yar Andromeda',              roi: 'UKU 004311/97', titoli: 'CH RUS · IPO I',             sesso: 'f' },
        ppmp: { nome: 'Victor Di Casa Balestrieri',    roi: 'LO9928601',     titoli: 'HD1 · CH',                   sesso: 'm' },
        mpmp: { nome: 'Allison',                       roi: 'LO0060631',     titoli: '',                           sesso: 'f' },
        pmmp: { nome: 'Quillanqasim Del Citone',       roi: 'LO01118239',    titoli: '',                           sesso: 'm' },
        mmmp: { nome: 'Brigittebardot Di Poggiopiano', roi: 'LO9966802',     titoli: '',                           sesso: 'f' },
        pppm: { nome: 'Victor Vito Del Rio Bianco',    roi: 'LO0168484',     titoli: 'CH · HDO',                   sesso: 'm' },
        mppm: { nome: 'Indiana Del Diamante Nero',     roi: 'LO0052352',     titoli: 'CH',                         sesso: 'f' },
        pmpm: { nome: 'Quillanqasim Del Citone',       roi: 'LO01118239',    titoli: '',                           sesso: 'm' },
        mmpm: { nome: 'Cocacola Della Sinvessa',       roi: 'LO9892667',     titoli: '',                           sesso: 'f' },
        ppmm: { nome: 'Gino Gomez Del Citone',         roi: 'LO9842928',     titoli: 'FH1 · Camp. Mond.',          sesso: 'm' },
        mpmm: { nome: 'Oregina Di Prisconte',          roi: 'LO0034701',     titoli: 'CH',                         sesso: 'f' },
        pmmm: { nome: 'Graaf Vito V. Neerlands Stam',  roi: 'NHSB2033689',   titoli: 'CH NED · INT',               sesso: 'm' },
        mmmm: { nome: 'Rea Di Prisconte',              roi: 'DS165936',      titoli: '',                           sesso: 'f' },
      },
    },

  }, // fine Rhuy Di Casa Fox

  // ============================================================
  'Hero Di Casa Fox': {

    // ---- ANAGRAFICA ----
    anagrafica: {
      nome:         'Hero Di Casa Fox',
      roi:          'LO08100422',
      razza:        'Dobermann',
      mantello:     'Nero focato',
      sesso:        'Maschio',
      nascita:      '10 novembre 2007',
      allevatore:   'Allevamento Di Casa Fox',
      proprietario: 'Caporali Alessandro',
      microchip:    '981100000395211',
      tatuaggio:    '—',
    },

    // ---- AVVENIMENTI ----
    avvenimenti: [
      {
        data:        '15 novembre 2008',
        descrizione: 'Controllo radiografico — Displasia anca HD.A (0)',
        luogo:       '',
      },
      {
        data:        '28 giugno 2011',
        descrizione: 'Deposito campione biologico',
        luogo:       'Laboratorio Biotecnologie Genetiche dell\'Università di Pisa',
      },
      {
        data:        '31 luglio 2013',
        descrizione: 'Deposito campione biologico',
        luogo:       'Laboratorio Vetogene - ENCI Servizi',
      },
    ],

    // ---- RISULTATI ----
    risultati: [
      {
        data:       '20 novembre 2010',
        evento:     'Esposizione Internazionale',
        localita:   'Sanremo (IM)',
        giornata:   '20 novembre 2010',
        sottoprova: 'Classe Libera',
        qualifica:  'Eccellente',
        classifica: '1° classificato — CAC/CACIB',
        giudice:    'Catalan Luis',
      },
    ],

    // ---- PEDIGREE ----
    pedigree: {
      soggetto: { nome: 'Hero Di Casa Fox', roi: 'LO08100422', titoli: 'HDO', sesso: 'm' },

      padre: { nome: 'Zedor Del Nasi',     roi: 'SLRD002747/JR700549', titoli: 'IN TCH · HDO · PHPV/HCO · RDO', sesso: 'm' },
      madre: { nome: 'Elisir Di Casa Fox', roi: 'LO0593231',            titoli: 'HDO',                           sesso: 'f' },

      nonni: {
        pp: { nome: 'Baron Nike Renewal',          roi: 'JR75450 DOB',  titoli: 'CH YU · CACIB · INTCH',     sesso: 'm' },
        mp: { nome: 'Akuna-Matata De Grande Vinko', roi: 'SLR 002731',   titoli: 'CH RUS',                    sesso: 'f' },
        pm: { nome: 'Battista Di Casa Fox',         roi: 'LO0366679',    titoli: 'CH I · CH A.I.A.D. · ZTP', sesso: 'm' },
        mm: { nome: 'Everzigova Di Poggiopiano',    roi: 'LO02140939',   titoli: 'HD-A · CH',                 sesso: 'f' },
      },

      bisnonni: {
        // Lato paterno
        ppp: { nome: 'Prinz Vom Norden Stamm',       roi: 'DS091001',      titoli: 'CH IT · CH AIAD',          sesso: 'm' },
        mpp: { nome: 'Borana Savages',               roi: 'JR71417 DOB',   titoli: 'CAC · CACIB · BOB · PRM',  sesso: 'f' },
        pmp: { nome: 'Tigr Iz Slavnoi Stai',         roi: 'RKF0031707',    titoli: 'CH RUS',                   sesso: 'm' },
        mmp: { nome: 'Ak-Yar Andromeda',             roi: 'UKU 004311/97', titoli: 'CH RUS · IPO I',           sesso: 'f' },
        // Lato materno
        ppm: { nome: 'Victor Di Casa Balestrieri',   roi: 'LO9928601',     titoli: 'HD1 · CH',                 sesso: 'm' },
        mpm: { nome: 'Allison',                      roi: 'LO0060631',     titoli: '',                         sesso: 'f' },
        pmm: { nome: 'Quillanqasim Del Citone',      roi: 'LO01118239',    titoli: '',                         sesso: 'm' },
        mmm: { nome: 'Brigittebardot Di Poggiopiano',roi: 'LO9966802',     titoli: '',                         sesso: 'f' },
      },

      quarta: {
        // Discendenti di Baron Nike Renewal
        pppp: { nome: 'Quinn Dei Nobili Nati',         roi: 'DS071871',      titoli: '',                         sesso: 'm' },
        mppp: { nome: 'Kastra V. Norden Stamm',        roi: 'ZZ6707440',     titoli: '',                         sesso: 'f' },
        // Discendenti di Akuna-Matata
        pmpp: { nome: 'Graaf Festus V. Neerlands Stam',roi: 'ZZ8771380',     titoli: '',                         sesso: 'm' },
        mmpp: { nome: 'Heidy Royal-Bell',              roi: 'ZZ8548770',     titoli: '',                         sesso: 'f' },
        // Discendenti di Battista Di Casa Fox
        ppmp: { nome: 'Ugor Di Villa Conte',           roi: 'DS097362',      titoli: 'CH ZTP · INT · IT · LUX',  sesso: 'm' },
        mpmp: { nome: 'Indira V.D. Rauberhohle',       roi: 'DZB111135',     titoli: '',                         sesso: 'f' },
        // Discendenti di Everzigova
        pmmp: { nome: 'Larson V. Frankenland',         roi: 'DZB101909',     titoli: 'CH INT · CH DE',           sesso: 'm' },
        mmmp: { nome: 'Ak-Yar Shagrelli',              roi: '000265/01',     titoli: '',                         sesso: 'f' },
        // Discendenti di Victor Di Casa Balestrieri
        pppm: { nome: 'Cock Di Casa Balestrieri',      roi: '117189',        titoli: '',                         sesso: 'm' },
        mppm: { nome: 'Elli Di Casa Balestrieri',      roi: 'DS137259',      titoli: '',                         sesso: 'f' },
        // Discendenti di Allison
        pmpm: { nome: 'Firefox',                       roi: 'DS126736',      titoli: 'Ch. IT · Sieger AIAD 1996',                         sesso: 'm' },
        mmpm: { nome: 'Ladyhawk Del Montaldo',         roi: 'DS177173',      titoli: '',                         sesso: 'f' },
        // Discendenti di Quillanqasim
        ppmm: { nome: 'Tigr Iz Slavnoi Stai',          roi: 'RKF0031707',    titoli: 'CH RUS · CL CH',           sesso: 'm' },
        mpmm: { nome: 'Katrinakrystal Del Citone',     roi: 'LO9971414',     titoli: '',                         sesso: 'f' },
        // Discendenti di Brigittebardot
        pmmm: { nome: 'Alfa Adelante Del Citone',      roi: 'DS144314',      titoli: '',                         sesso: 'm' },
        mmmm: { nome: 'Ghislaineginevra Di Acquanegra',roi: 'DS127799',      titoli: '',                         sesso: 'f' },
      },
    },

    // ---- DISCENDENTI ----
    discendenti: [
      {
        data: '12 novembre 2009',
        figli: [
          { roi: 'LO1066203', nome: 'Ughos Del Monte Aspro',        sesso: 'm' },
          { roi: 'LO1066208', nome: 'Uma Del Monte Aspro',           sesso: 'f' },
          { roi: 'LO1066209', nome: 'Uriel Del Monte Aspro',         sesso: 'f' },
          { roi: 'LO1066204', nome: 'Urbanares Del Monte Aspro',     sesso: 'm' },
          { roi: 'LO1066205', nome: 'Under The Bridge Del Monte Aspro', sesso: 'm' },
          { roi: 'LO1066206', nome: 'Unno Del Monte Aspro',          sesso: 'm' },
          { roi: 'LO1066207', nome: 'Umaga Del Monte Aspro',         sesso: 'f' },
        ],
      },
      {
        data: '20 febbraio 2010',
        figli: [
          { roi: 'LO1072227', nome: 'Emily',  sesso: 'f' },
          { roi: 'LO1072220', nome: 'Emir',   sesso: 'm' },
          { roi: 'LO1072226', nome: 'Eva',    sesso: 'f' },
          { roi: 'LO1072224', nome: 'Eros',   sesso: 'm' },
          { roi: 'LO1072217', nome: 'Ercole', sesso: 'm' },
        ],
      },
      {
        data: '25 aprile 2010',
        figli: [
          { roi: 'LO1092630', nome: 'Orazio Di Casa Fox',  sesso: 'm' },
          { roi: 'LO1092626', nome: 'Oro Di Casa Fox',     sesso: 'm' },
          { roi: 'LO1092633', nome: 'Ombra Di Casa Fox',   sesso: 'f' },
          { roi: 'LO1092623', nome: 'Otello Di Casa Fox',  sesso: 'm' },
          { roi: 'LO1092631', nome: 'Oriente Di Casa Fox', sesso: 'f' },
        ],
      },
      {
        data: '15 settembre 2010',
        figli: [
          { roi: 'LO10189983', nome: 'Rhero Di Casa Fox',     sesso: 'm' },
          { roi: 'LO10189981', nome: 'Re Zeus Di Casa Fox',   sesso: 'm' },
          { roi: 'LO10189986', nome: 'Reja Di Casa Fox',      sesso: 'f' },
          { roi: 'LO10189989', nome: 'Reginella Di Casa Fox', sesso: 'f' },
          { roi: 'LO10189988', nome: 'Raissa Di Casa Fox',    sesso: 'f' },
          { roi: 'LO10189982', nome: 'Renoir Di Casa Fox',    sesso: 'm' },
          { roi: 'LO10189991', nome: 'Raia Di Casa Fox',      sesso: 'f' },
          { roi: 'LO10189984', nome: 'Rhuy Di Casa Fox',      sesso: 'm' },
        ],
      },
      {
        data: '6 ottobre 2010',
        figli: [
          { roi: 'LO1135429', nome: 'Sole',    sesso: 'f' },
          { roi: 'LO1135414', nome: 'Demon',   sesso: 'm' },
          { roi: 'LO1135410', nome: 'Daigo',   sesso: 'm' },
          { roi: 'LO1135432', nome: 'Molly',   sesso: 'f' },
          { roi: 'LO1135413', nome: 'Ghemon',  sesso: 'm' },
          { roi: 'LO1135431', nome: 'Luna',    sesso: 'f' },
          { roi: 'LO1135420', nome: 'Joe',     sesso: 'm' },
          { roi: 'LO1135426', nome: 'Nera',    sesso: 'f' },
          { roi: 'LO1135415', nome: 'Enea',    sesso: 'm' },
          { roi: 'LO1135423', nome: 'Zoe',     sesso: 'f' },
          { roi: 'LO1135417', nome: 'Raul',    sesso: 'm' },
          { roi: 'LO1135421', nome: 'Chantal', sesso: 'f' },
          { roi: 'LO1135412', nome: 'Roy',     sesso: 'm' },
          { roi: 'LO1135408', nome: 'Aton',    sesso: 'm' },
          { roi: 'LO1135428', nome: 'Noemi',   sesso: 'f' },
        ],
      },
      {
        data: '18 dicembre 2010',
        figli: [
          { roi: 'LO1142658', nome: 'Veyron Del Monte Aspro',    sesso: 'm' },
          { roi: 'LO1142661', nome: 'Vortech Del Monte Aspro',   sesso: 'm' },
          { roi: 'LO1142665', nome: 'Vanilla Del Monte Aspro',   sesso: 'f' },
          { roi: 'LO1142660', nome: 'Velasquez Del Monte Aspro', sesso: 'm' },
          { roi: 'LO1142664', nome: 'Verity Del Monte Aspro',    sesso: 'f' },
          { roi: 'LO1142666', nome: 'Vanity Del Monte Aspro',    sesso: 'f' },
          { roi: 'LO1142662', nome: 'Vanquish Del Monte Aspro',  sesso: 'm' },
          { roi: 'LO1142663', nome: 'Veramour Del Monte Aspro',  sesso: 'f' },
        ],
      },
      {
        data: '21 gennaio 2011',
        figli: [
          { roi: 'LO1129383', nome: 'Ibra Di Baia Nera',           sesso: 'm' },
          { roi: 'LO1129382', nome: 'Imman Imperator Di Baia Nera', sesso: 'm' },
        ],
      },
      {
        data: '1 marzo 2011',
        figli: [
          { roi: 'LO1163691', nome: 'Sky Di Casa Fox',      sesso: 'f' },
          { roi: 'LO1163688', nome: 'Stone Di Casa Fox',    sesso: 'f' },
          { roi: 'LO1163683', nome: 'Saeros Dagor Di Casa Fox', sesso: 'm' },
          { roi: 'LO1163687', nome: 'Swayer Di Casa Fox',   sesso: 'm' },
          { roi: 'LO1163682', nome: 'Seth Di Casa Fox',     sesso: 'm' },
          { roi: 'LO1163692', nome: 'Sandy Di Casa Fox',    sesso: 'f' },
          { roi: 'LO1163693', nome: 'Snowhite Di Casa Fox', sesso: 'f' },
          { roi: 'LO1163685', nome: 'Sid Di Casa Fox',      sesso: 'm' },
          { roi: 'LO1163698', nome: 'Schanel Di Casa Fox',  sesso: 'f' },
        ],
      },
      {
        data: '28 marzo 2011',
        figli: [
          { roi: 'LO1176735', nome: 'Brema Del Dakarone',  sesso: 'f' },
          { roi: 'LO1176739', nome: 'Byork Del Dakarone',  sesso: 'm' },
          { roi: 'LO1176736', nome: 'Brina Del Dakarone',  sesso: 'f' },
          { roi: 'LO1176741', nome: 'Brando Del Dakarone', sesso: 'm' },
        ],
      },
      {
        data: '20 aprile 2011',
        figli: [
          { roi: 'LO1186971', nome: "Uto Ughi D'Islamorada",        sesso: 'm' },
          { roi: 'LO1186980', nome: "Uilma D'Islamorada",           sesso: 'f' },
          { roi: 'LO1186953', nome: "Usto' Ugo D'Islamorada",       sesso: 'm' },
          { roi: 'LO1186984', nome: "Ursula Andress D'Islamorada",  sesso: 'f' },
          { roi: 'LO1186989', nome: "Umatilda D'Islamorada",        sesso: 'f' },
          { roi: 'LO1186966', nome: "Uberunter D'Islamorada",       sesso: 'm' },
          { roi: 'LO1186979', nome: "Unighibli D'Islamorada",       sesso: 'm' },
          { roi: 'LO1186986', nome: "Uma Thurmann D'Islamorada",    sesso: 'f' },
        ],
      },
      {
        data: '12 maggio 2011',
        figli: [
          { roi: 'LO1193783', nome: 'Nivea Del Riobianco',                sesso: 'f' },
          { roi: 'LO1193778', nome: 'Nepal Del Riobianco',                sesso: 'm' },
          { roi: 'LO1198989', nome: 'Herbie Dei Nobili Nati',             sesso: 'm' },
          { roi: 'LO1193784', nome: 'Nabja Del Riobianco',                sesso: 'f' },
          { roi: 'LO1198982', nome: 'Hellboy Dei Nobili Nati',            sesso: 'm' },
          { roi: 'LO1193773', nome: 'Nekk Del Riobianco',                 sesso: 'm' },
          { roi: 'LO1193775', nome: 'Nero Del Riobianco',                 sesso: 'm' },
          { roi: 'LO1198983', nome: 'Hkney Dei Nobili Nati',              sesso: 'm' },
          { roi: 'LO1198988', nome: 'Hiphop Dei Nobili Nati',             sesso: 'm' },
          { roi: 'LO1198992', nome: 'Hulahoop Dei Nobili Nati',           sesso: 'f' },
          { roi: 'LO1198985', nome: 'Hiron Dei Nobili Nati',              sesso: 'm' },
          { roi: 'LO1193780', nome: "Nu'man Del Riobianco",               sesso: 'm' },
          { roi: 'LO1193772', nome: 'Nerone Del Riobianco',               sesso: 'm' },
          { roi: 'LO1198984', nome: 'Hasch Dei Nobili Nati',              sesso: 'm' },
          { roi: 'LO1193776', nome: 'Nosferatu Del Riobianco',            sesso: 'm' },
          { roi: 'LO1193781', nome: 'Namiko Del Riobianco',               sesso: 'm' },
          { roi: 'LO1198987', nome: 'Hammer Dei Nobili Nati',             sesso: 'm' },
          { roi: 'LO1198990', nome: 'Hoara Hollywood Girl Dei Nobili Nati', sesso: 'f' },
        ],
      },
      {
        data: '28 maggio 2011',
        figli: [
          { roi: 'LO1199002', nome: 'Karen Kora',                    sesso: 'f' },
          { roi: 'LO1199008', nome: 'Kendenup Schultz',              sesso: 'm' },
          { roi: 'LO1198995', nome: 'Koral Sea Bouganville Reef',    sesso: 'f' },
          { roi: 'LO1199005', nome: 'Kadir K Lermont Mackay',        sesso: 'm' },
          { roi: 'LO1199004', nome: 'Kable Beach Broome Keelie',     sesso: 'f' },
          { roi: 'LO1199000', nome: 'Kookie Nye Kaya',               sesso: 'f' },
          { roi: 'LO1198996', nome: 'Klaire Chanel',                 sesso: 'f' },
          { roi: 'LO1199012', nome: 'Kollinsville Kastor Loki',      sesso: 'm' },
        ],
      },
      {
        data: '18 luglio 2011',
        figli: [
          { roi: 'LO11135779', nome: 'Rayban Della Dea Aretusa',           sesso: 'm' },
          { roi: 'LO11135773', nome: 'Roscoe Della Dea Aretusa',           sesso: 'm' },
          { roi: 'LO11135775', nome: 'Rolex Della Dea Aretusa',            sesso: 'm' },
          { roi: 'LO11135790', nome: 'Raya Rossella Della Dea Aretusa',    sesso: 'f' },
          { roi: 'LO11135785', nome: 'Rapsodia Renata Della Dea Aretusa',  sesso: 'f' },
          { roi: 'LO11135777', nome: 'Ros Diamond Della Dea Aretusa',      sesso: 'm' },
        ],
      },
      {
        data: '19 settembre 2011',
        figli: [
          { roi: 'LO11131124', nome: "Cuzia Dell'Orgoglio Nero", sesso: 'f' },
          { roi: 'LO11131128', nome: 'Crash',                    sesso: 'm' },
        ],
      },
      {
        data: '11 ottobre 2011',
        figli: [
          { roi: 'LO11169179', nome: "Vanity D'Islamorada",      sesso: 'f' },
          { roi: 'LO11169175', nome: "Valery D'Islamorada",      sesso: 'f' },
          { roi: 'LO11169164', nome: "Vox Tenebrae D'Islamorada", sesso: 'm' },
          { roi: 'LO11169169', nome: "Vasco D'Islamorada",       sesso: 'm' },
          { roi: 'LO11169167', nome: "Van Gogh D'Islamorada",    sesso: 'm' },
          { roi: 'LO11169165', nome: "Vis-Vanto D'Islamorada",   sesso: 'm' },
          { roi: 'LO11169177', nome: "Virgin D'Islamorada",      sesso: 'f' },
          { roi: 'LO11169172', nome: "Valentino D'Islamorada",   sesso: 'm' },
        ],
      },
      {
        data: '25 ottobre 2011',
        figli: [
          { roi: 'LO1213311', nome: "Ca' Stellamaris Milos",    sesso: 'm' },
          { roi: 'LO1213316', nome: "Ca' Stellamaris Monroe",   sesso: 'f' },
          { roi: 'LO1213315', nome: "Ca' Stellamaris Mowgli",   sesso: 'm' },
          { roi: 'LO1213312', nome: "Ca' Stellamaris Matador",  sesso: 'm' },
          { roi: 'LO1213318', nome: "Ca' Stellamaris Melody",   sesso: 'f' },
          { roi: 'LO1213320', nome: "Ca' Stellamaris Margot",   sesso: 'f' },
          { roi: 'LO1213314', nome: "Ca' Stellamaris Murdok",   sesso: 'm' },
          { roi: 'LO1213317', nome: "Ca' Stellamaris Malika",   sesso: 'f' },
          { roi: 'LO1213313', nome: "Ca' Stellamaris Morgan",   sesso: 'm' },
          { roi: 'LO1213319', nome: "Ca' Stellamaris Murphy",   sesso: 'm' },
        ],
      },
      {
        data: '31 ottobre 2011',
        figli: [
          { roi: 'LO13121285', nome: 'Dinadob Gallardo', sesso: 'm' },
          { roi: 'LO13121287', nome: 'Dinadob Giona',    sesso: 'm' },
          { roi: 'LO13121288', nome: 'Dinadob Golia',    sesso: 'm' },
          { roi: 'LO13121289', nome: 'Dinadob Gilda',    sesso: 'f' },
          { roi: 'LO13121284', nome: 'Dinadob Gas',      sesso: 'm' },
          { roi: 'LO13121293', nome: 'Dinadob Gae',      sesso: 'f' },
          { roi: 'LO13121286', nome: 'Dinadob Goldrake', sesso: 'm' },
          { roi: 'LO13121291', nome: 'Dinadob Grace',    sesso: 'f' },
        ],
      },
      {
        data: '22 novembre 2011',
        figli: [
          { roi: 'LO1224172', nome: 'Fairy',       sesso: 'f' },
          { roi: 'LO1224167', nome: 'Ferro',       sesso: 'm' },
          { roi: 'LO1224163', nome: 'Full Heart',  sesso: 'm' },
          { roi: 'LO1224168', nome: 'Falco',       sesso: 'm' },
          { roi: 'LO1224169', nome: 'Full',        sesso: 'm' },
          { roi: 'LO1224166', nome: 'Fero Fleming', sesso: 'm' },
          { roi: 'LO1224171', nome: 'Fendy',       sesso: 'f' },
        ],
      },
      {
        data: '26 dicembre 2011',
        figli: [
          { roi: 'LO1210429', nome: "Ever Black Dell'Orgoglio Nero", sesso: 'f' },
          { roi: 'LO1210433', nome: "Evita Dell'Orgoglio Nero",      sesso: 'f' },
        ],
      },
      {
        data: '29 maggio 2012',
        figli: [
          { roi: 'LO12112474', nome: "Dell'Arco Azzurro Rene'",       sesso: 'f' },
          { roi: 'LO12112479', nome: "Dell'Arco Azzurro Ronny",       sesso: 'm' },
          { roi: 'LO12112466', nome: "Dell'Arco Azzurro Diego",       sesso: 'm' },
          { roi: 'LO12112482', nome: "Dell'Arco Azzurro Roxy Saphira", sesso: 'f' },
          { roi: 'LO12112477', nome: "Dell'Arco Azzurro Roy",         sesso: 'm' },
          { roi: 'LO12112470', nome: "Dell'Arco Azzurro Rasha",       sesso: 'f' },
        ],
      },
      {
        data: '10 agosto 2012',
        figli: [
          { roi: 'LO12145488', nome: 'Taraliebe Del Dakarone',     sesso: 'f' },
          { roi: 'LO12145497', nome: 'Tokio Del Dakarone',         sesso: 'm' },
          { roi: 'LO12145501', nome: 'Tiago Del Dakarone',         sesso: 'm' },
          { roi: 'LO12145493', nome: 'Tasia Del Dakarone',         sesso: 'f' },
          { roi: 'LO12145500', nome: 'Tysonxausrobens-J Del Dakarone', sesso: 'm' },
        ],
      },
    ],

  }, // fine Hero Di Casa Fox

  // ============================================================
  'Battista Di Casa Fox': {

    // ---- ANAGRAFICA ----
    anagrafica: {
      nome:         'Battista Di Casa Fox',
      roi:          'LO0366679',
      razza:        'Dobermann',
      mantello:     'Nero focato',
      sesso:        'Maschio',
      nascita:      '8 dicembre 2002',
      allevatore:   'Allevamento Di Casa Fox',
      proprietario: 'Salvadori Luciano',
      microchip:    '—',
      tatuaggio:    '2SRD11',
      stato:        'Deceduto',
    },

    // ---- TITOLI ----
    titoli: [
      'Ch. Italian',
      'AIAD-Sieger',
    ],

    // ---- AVVENIMENTI ----
    avvenimenti: [
      {
        data:        '29 febbraio 2004',
        descrizione: 'Controllo radiografico — Displasia anca HD.A (0)',
        luogo:       '',
      },
    ],

    // ---- RISULTATI ----
    risultati: [
      {
        data:       '3 - 4 giugno 2006',
        evento:     'Esposizione Internazionale',
        localita:   'Terni (TR)',
        giornata:   '3 - 4 giugno 2006',
        sottoprova: 'Classe Lavoro — Nr. cat. 92',
        qualifica:  'Eccellente',
        classifica: '1° classificato — CAC/CACIB',
        giudice:    "Bulò José Maria",
      },
      {
        data:       '3 - 4 settembre 2005',
        evento:     'Esposizione Internazionale',
        localita:   'Livorno (LI)',
        giornata:   '3 - 4 settembre 2005',
        sottoprova: 'Classe Campioni — Nr. cat. 103',
        qualifica:  'Eccellente',
        classifica: '1° classificato — CACIB',
        giudice:    'Bastianini Paolo',
      },
    ],

    // ---- PEDIGREE ----
    pedigree: {
      soggetto: { nome: 'Battista Di Casa Fox', roi: 'LO0366679', titoli: 'CH I · CH A.I.A.D · ZTP 1-A · HD-A', sesso: 'm' },

      padre: { nome: 'Victor Di Casa Balestrieri', roi: 'LO9928601', titoli: 'HD1 · CH', sesso: 'm' },
      madre: { nome: 'Allison',                    roi: 'LO0060631', titoli: '',          sesso: 'f' },

      nonni: {
        pp: { nome: 'Cock Di Casa Balestrieri', roi: '117189',    titoli: '',  sesso: 'm' },
        mp: { nome: 'Elli Di Casa Balestrieri', roi: 'DS137259',  titoli: '',  sesso: 'f' },
        pm: { nome: 'Firefox',                  roi: 'DS126736',  titoli: 'Ch. IT · Sieger AIAD 1996',  sesso: 'm' },
        mm: { nome: 'Ladyhawk Del Montaldo',    roi: 'DS177173',  titoli: '',  sesso: 'f' },
      },

      bisnonni: {
        ppp: { nome: 'Gamon De Campovalano',    roi: '0977477',   titoli: 'CH · SCHH1',  sesso: 'm' },
        mpp: { nome: 'Verena',                  roi: 'DS087904',  titoli: '',             sesso: 'f' },
        pmp: { nome: 'Gamon Di Campovalano',    roi: 'DS097477',  titoli: 'CHMOND J · CH J', sesso: 'm' },
        mmp: { nome: 'Verena',                  roi: 'DS087904',  titoli: '',             sesso: 'f' },
        ppm: { nome: 'Orson Van Roveline',      roi: 'DS113204',  titoli: '',             sesso: 'm' },
        mpm: { nome: 'Daron',                   roi: 'DS107341',  titoli: '',             sesso: 'm' },
        pmm: { nome: 'Firefox',                 roi: 'DS126736',  titoli: 'Ch. IT · Sieger AIAD 1996',             sesso: 'm' },
        mmm: { nome: 'Erica Del Montaldo',      roi: 'DS126792',  titoli: '',             sesso: 'f' },
      },

      quarta: {
        pppp: { nome: 'Gamon De Campovalano',            roi: '0977477',    titoli: 'CH · SCHH1',    sesso: 'm' },
        mppp: { nome: 'Verena',                          roi: 'DS087904',   titoli: '',               sesso: 'f' },
        pmpp: { nome: 'Graaf Quirinus V. Neerlands Stam',roi: 'ZZ6768370',  titoli: '',               sesso: 'm' },
        mmpp: { nome: 'Mali Di Campovalano',             roi: 'DS083197',   titoli: 'CH',             sesso: 'f' },
        ppmp: { nome: 'Gero Dell\'Urbe',                 roi: 'DS069300',   titoli: '',               sesso: 'm' },
        mpmp: { nome: 'Elfi Dei Ferbas',                 roi: 'DS066935',   titoli: '',               sesso: 'f' },
        pmmp: { nome: 'Eela Vom Franckenhorst',          roi: 'ZZ7739430',  titoli: '',               sesso: 'f' },
        mmmp: { nome: 'Lema Van Roveline',               roi: 'ZZ7739460',  titoli: '',               sesso: 'f' },
        pppm: { nome: 'Iron Di Campovalano',             roi: 'DS099535',   titoli: '',               sesso: 'm' },
        mppm: { nome: 'Nat Van Roveline',                roi: 'DS105571',   titoli: '',               sesso: 'f' },
        pmpm: { nome: 'Orson Van Roveline',              roi: 'DS113204',   titoli: '',               sesso: 'm' },
        mmpm: { nome: 'Daron',                           roi: 'DS107341',   titoli: '',               sesso: 'm' },
        ppmm: { nome: 'Gamon Di Campovalano',            roi: 'DS097477',   titoli: '',               sesso: 'm' },
        mpmm: { nome: 'Sissi Dei Nobili Nati',           roi: 'DS101317',   titoli: '',               sesso: 'f' },
        pmmm: null,
        mmmm: null,
      },
    },

    // ---- DISCENDENTI ----
    discendenti: [
      {
        data: '18 ottobre 2004',
        figli: [
          { roi: 'LO0593226', nome: 'Emir Di Casa Fox',    sesso: 'm' },
          { roi: 'LO0593231', nome: 'Elisir Di Casa Fox',  sesso: 'f' },
          { roi: 'LO0593229', nome: 'Edgar Di Casa Fox',   sesso: 'm' },
          { roi: 'LO0593232', nome: 'Evelin Di Casa Fox',  sesso: 'f' },
          { roi: 'LO0593230', nome: 'Endora Di Casa Fox',  sesso: 'f' },
          { roi: 'LO0593234', nome: 'Ester Di Casa Fox',   sesso: 'f' },
          { roi: 'LO0593225', nome: 'Erik Di Casa Fox',    sesso: 'm' },
          { roi: 'LO0593228', nome: 'Elgar Di Casa Fox',   sesso: 'm' },
          { roi: 'LO0593227', nome: 'Edwin Di Casa Fox',   sesso: 'm' },
        ],
      },
      {
        data: '20 settembre 2005',
        figli: [
          { roi: 'LO0636648', nome: 'Ardens Bristol',                  sesso: 'm' },
          { roi: 'LO0636649', nome: 'Ardens Baronbering',              sesso: 'm' },
          { roi: 'LO0636666', nome: 'Ardens Brunetta',                 sesso: 'f' },
          { roi: 'LO0636661', nome: 'Ardens Battistaatkarmelhof',      sesso: 'f' },
          { roi: 'LO0636655', nome: 'Ardens Blueberryforhalitpasa',    sesso: 'f' },
          { roi: 'LO0636652', nome: 'Ardens Bisquitbull',              sesso: 'm' },
          { roi: 'LO0636664', nome: 'Ardens Babochka',                 sesso: 'f' },
          { roi: 'LO0636654', nome: 'Ardens Baronessazenica',          sesso: 'f' },
        ],
      },
      {
        data: '3 ottobre 2005',
        figli: [
          { roi: 'LO0616353', nome: 'Fenimoore Di Casa Fox', sesso: 'f' },
          { roi: 'LO0616346', nome: 'Flacon Di Casa Fox',    sesso: 'm' },
          { roi: 'LO0616347', nome: 'Fantom Di Casa Fox',    sesso: 'm' },
          { roi: 'LO0616348', nome: 'Figaro Di Casa Fox',    sesso: 'm' },
          { roi: 'LO0616355', nome: 'Fiona Di Casa Fox',     sesso: 'f' },
          { roi: 'LO0616350', nome: 'Freedom Di Casa Fox',   sesso: 'm' },
          { roi: 'LO0616351', nome: 'Firelady Di Casa Fox',  sesso: 'f' },
        ],
      },
      {
        data: '28 febbraio 2006',
        figli: [
          { roi: 'LO072948', nome: 'Ijaklothar Del Cesenate',      sesso: 'm' },
          { roi: 'LO072951', nome: 'Jenniferlopez Del Cesenate',   sesso: 'f' },
          { roi: 'LO072947', nome: 'Jodyjuan Del Cesenate',        sesso: 'm' },
          { roi: 'LO072952', nome: 'Jacquelinekennedy Del Cesenate', sesso: 'f' },
          { roi: 'LO072950', nome: 'Jessicarabbit Del Cesenate',   sesso: 'f' },
          { roi: 'LO072949', nome: 'Jamesbond Del Cesenate',       sesso: 'm' },
          { roi: 'LO072954', nome: 'Juliarobert Del Cesenate',     sesso: 'f' },
        ],
      },
      {
        data: '30 settembre 2006',
        figli: [
          { roi: 'LO0750397', nome: 'Navaho Villa Valori', sesso: 'f' },
        ],
      },
      {
        data: '24 novembre 2006',
        figli: [
          { roi: 'LO0778882', nome: 'Wendy', sesso: 'f' },
          { roi: 'LO0778881', nome: 'Bike',  sesso: 'f' },
        ],
      },
    ],

  }, // fine Battista Di Casa Fox

  // ============================================================
  'Ace': {

    // ---- ANAGRAFICA ----
    anagrafica: {
      nome:         'Ace',
      roi:          'LO0060616',
      razza:        'Dobermann',
      mantello:     'Nero focato',
      sesso:        'Maschio',
      nascita:      '18 gennaio 2000',
      allevatore:   'Sardelli Stefano',
      proprietario: 'Caporali Alessandro',
      microchip:    '—',
      tatuaggio:    'OLI41',
      stato:        '',
    },

    // ---- TITOLI ----
    titoli: [
      { data: '30 novembre 2004', titolo: 'Campione Italiano di Bellezza' },
    ],

    // ---- AVVENIMENTI ----
    avvenimenti: [],

    // ---- RISULTATI ----
    risultati: [
      {
        data:       '13 - 14 marzo 2004',
        evento:     'Esposizione Internazionale',
        localita:   'Pescia (PT)',
        giornata:   '13 - 14 marzo 2004',
        sottoprova: '—',
        qualifica:  '—',
        classifica: '—',
        certificati: '—',
        giudice:    '—',
      },
      {
        data:       '15 - 16 novembre 2003',
        evento:     'Esposizione Internazionale',
        localita:   'Genova (GE)',
        giornata:   '15 - 16 novembre 2003',
        sottoprova: '—',
        qualifica:  '—',
        classifica: '—',
        certificati: '—',
        giudice:    '—',
      },
      {
        data:       '11 - 12 ottobre 2003',
        evento:     'Esposizione Internazionale',
        localita:   'Bastia Umbra (PG)',
        giornata:   '11 - 12 ottobre 2003',
        sottoprova: '—',
        qualifica:  '—',
        classifica: '—',
        certificati: '—',
        giudice:    '—',
      },
      {
        data:       '20 - 21 settembre 2003',
        evento:     'Esposizione Internazionale',
        localita:   'Livorno (LI)',
        giornata:   '20 - 21 settembre 2003',
        sottoprova: '—',
        qualifica:  '—',
        classifica: '—',
        certificati: '—',
        giudice:    '—',
      },
      {
        data:       '30 novembre - 1 dicembre 2002',
        evento:     'Esposizione Internazionale',
        localita:   'Verona (VR)',
        giornata:   '30 novembre - 1 dicembre 2002',
        sottoprova: '—',
        qualifica:  '—',
        classifica: '—',
        certificati: '—',
        giudice:    '—',
      },
    ],

    // ---- PEDIGREE ----
    pedigree: {
      soggetto: { nome: 'Ace', roi: 'LO0060616', titoli: 'CH IT', sesso: 'm' },

      padre: { nome: 'Firefox',            roi: 'DS126736',  titoli: 'Ch. IT · Sieger AIAD 1996',  sesso: 'm' },
      madre: { nome: 'Ladyhawk Del Montaldo', roi: 'DS177173', titoli: '', sesso: 'f' },

      nonni: {
        pp: { nome: 'Orson Van Roveline',      roi: 'DS113204',  titoli: '',  sesso: 'm' },
        mp: { nome: 'Daron',                   roi: 'DS107341',  titoli: '',  sesso: 'f' },
        pm: { nome: 'Firefox',                 roi: 'DS126736',  titoli: 'Ch. IT · Sieger AIAD 1996',  sesso: 'm' },
        mm: { nome: 'Erica Del Montaldo',      roi: 'DS126792',  titoli: '',  sesso: 'f' },
      },

      bisnonni: {
        ppp: { nome: 'Fela Vom Franckenhorst', roi: 'ZZ7739430', titoli: 'NHSB-1427508', sesso: 'f' },
        mpp: { nome: 'Lema Van Roveline',      roi: 'ZZ7739460', titoli: 'LOSH 571108 · SCHH1', sesso: 'f' },
        pmp: { nome: 'Iron Di Campovalano',    roi: 'DS099535',  titoli: '',  sesso: 'm' },
        mmp: { nome: 'Nat Van Roveline',       roi: 'DS105571',  titoli: '',  sesso: 'f' },
        ppm: { nome: 'Orson Van Roveline',     roi: 'DS113204',  titoli: '',  sesso: 'm' },
        mpm: { nome: 'Daron',                  roi: 'DS107341',  titoli: '',  sesso: 'f' },
        pmm: { nome: 'Gamon Di Campovalano',   roi: 'DS097477',  titoli: 'CHMOND J · CH J', sesso: 'm' },
        mmm: { nome: 'Sissi Dei Nobili Nati',  roi: 'DS101317',  titoli: '',  sesso: 'f' },
      },

      quarta: {
        pppp: { nome: 'Vincent V. Franchenhorst', roi: 'ZZ7739410', titoli: 'NHSB 1103033',  sesso: 'm' },
        mppp: { nome: 'Pompie Dutch Dewi',         roi: 'ZZ7739420', titoli: 'KCREG 4005405', sesso: 'f' },
        pmpp: { nome: 'Baron Bryan V. Harrosberg',  roi: 'ZZ7739440', titoli: 'NHSB 141975',  sesso: 'm' },
        mmpp: { nome: 'Jenna Van Roveline',         roi: 'ZZ7739450', titoli: 'LOSH 534808',  sesso: 'f' },
        ppmp: { nome: 'Merak Di Campovalano',        roi: 'DS083190',  titoli: 'CH',           sesso: 'm' },
        mpmp: { nome: 'Tula Dei Nobili Nati',        roi: 'DS080580',  titoli: '',             sesso: 'f' },
        pmmp: { nome: 'Lucifer Van Roveline',        roi: 'ZZ7418130', titoli: 'LOSH 571105',  sesso: 'm' },
        mmmp: { nome: 'Shutz Gina',                  roi: 'ZZ7418160', titoli: 'KCREG N 5201706N04', sesso: 'f' },
        pppm: { nome: 'Fela Vom Franckenhorst',      roi: 'ZZ7739430', titoli: 'NHSB-1427508', sesso: 'f' },
        mppm: { nome: 'Lema Van Roveline',           roi: 'ZZ7739460', titoli: 'LOSH 571108',  sesso: 'f' },
        pmpm: { nome: 'Iron Di Campovalano',         roi: 'DS099535',  titoli: '',             sesso: 'm' },
        mmpm: { nome: 'Nat Van Roveline',            roi: 'DS105571',  titoli: '',             sesso: 'f' },
        ppmm: { nome: 'Graaf Quirinus V. Neerlands Stam', roi: 'ZZ6768370', titoli: '', sesso: 'm' },
        mpmm: { nome: 'Mali Di Campovalano',         roi: 'DS083197',  titoli: 'CH',           sesso: 'f' },
        pmmm: { nome: 'Quinn Dei Nobili Nati',       roi: 'DS071871',  titoli: 'BDSG · SCHHIII · ITCH IN', sesso: 'm' },
        mmmm: { nome: 'Franka Vom Vogelbusch',       roi: 'DS099614',  titoli: '',             sesso: 'f' },
      },
    },

    // ---- DISCENDENTI ----
    discendenti: [
      {
        data: '25 settembre 2002',
        figli: [
          { roi: 'LO0363961', nome: 'Ace Di Casa Fox',        sesso: 'm' },
          { roi: 'LO0363963', nome: "Artu' Di Casa Fox",      sesso: 'm' },
          { roi: 'LO0363970', nome: 'Adenger Di Casa Fox',    sesso: 'f' },
          { roi: 'LO0363967', nome: "Ali' Di Casa Fox",       sesso: 'm' },
          { roi: 'LO0363965', nome: 'Astor Di Casa Fox',      sesso: 'm' },
          { roi: 'LO0363968', nome: "Alsafi' Di Casa Fox",    sesso: 'f' },
          { roi: 'LO0363962', nome: 'Airyiordan Di Casa Fox', sesso: 'm' },
          { roi: 'LO0363964', nome: 'Axel Di Casa Fox',       sesso: 'm' },
          { roi: 'LO0363966', nome: 'Aron Di Casa Fox',       sesso: 'm' },
          { roi: 'LO0363969', nome: 'Azul Di Casa Fox',       sesso: 'f' },
        ],
      },
    ],

  }, // fine Ace

  // ============================================================
  // UBALDO DI CASA FOX
  // ============================================================
  'Ubaldo Di Casa Fox': {

    anagrafica: {
      nome:         'Ubaldo Di Casa Fox',
      roi:          'LO1234346',
      razza:        'Dobermann',
      mantello:     'Nero focato',
      sesso:        'Maschio',
      nascita:      '1 gennaio 2012',
      allevatore:   'Allevamento Di Casa Fox',
      proprietario: 'Mei Michela',
      microchip:    '380260000782772',
      tatuaggio:    '',
    },

    avvenimenti: [
      { data: '1 novembre 2014',  descrizione: 'Brevetto 2' },
      { data: '23 luglio 2014',   descrizione: 'Controllo radiografico — Displasia anca HD.B (1)' },
      { data: '2 aprile 2015',    descrizione: 'Deposito campione biologico — Laboratorio Biotecnologie Genetiche dell\'Università di Pisa' },
      { data: '16 giugno 2015',   descrizione: 'Deposito campione biologico — Laboratorio Vetogene - ENCI Servizi' },
    ],

    risultati: [
      { data: '17 - 18 settembre 2016', evento: 'Raduno Nazionale',          localita: 'Cavalese (TN)' },
      { data: '5 giugno 2016',          evento: 'Esposizione Internazionale', localita: 'Pisa (PI)' },
      { data: '25 aprile 2016',         evento: 'Raduno Nazionale',          localita: 'Camposampiero (PD)' },
      { data: '31 gennaio 2016',        evento: 'Raduno Nazionale',          localita: 'Campiglia Marittima (LI)' },
      { data: '26 aprile 2015',         evento: 'Raduno Nazionale',          localita: 'Camposampiero (PD)' },
      { data: '15 febbraio 2015',       evento: 'Esposizione Nazionale',     localita: 'Vicenza (VI)' },
      { data: '4 gennaio 2015',         evento: 'Esposizione Nazionale',     localita: 'Massa (MS)' },
      { data: '21 dicembre 2014',       evento: 'Esposizione Internazionale',localita: 'Sora (FR)' },
      { data: '5 ottobre 2014',         evento: 'Raduno Nazionale',          localita: 'Mondragone (CE)' },
      { data: '29 giugno 2014',         evento: 'Raduno Nazionale',          localita: 'Bernate Ticino (MI)' },
      { data: '14 giugno 2014',         evento: 'Esposizione Internazionale',localita: 'Prato (PO)' },
      { data: 'Dal 31 maggio al 1 giugno 2014', evento: 'Raduno Nazionale',  localita: 'Montelibretti (RM)' },
      { data: '4 maggio 2014',          evento: 'Raduno Nazionale',          localita: 'Padova (PD)' },
      { data: '26 gennaio 2014',        evento: 'Raduno Nazionale',          localita: 'Campiglia Marittima (LI)' },
    ],

    titoli: [
      { data: '15 aprile 2015', titolo: 'Campione Italiano di Bellezza' },
      { data: '29 luglio 2015', titolo: 'Campione Sociale' },
    ],

    discendenti: [
      {
        data: '29 giugno 2015',
        figli: [
          { roi: 'LO15135448', nome: 'Anyssa',                sesso: 'f' },
          { roi: 'LO15135446', nome: 'Artemisia',             sesso: 'f' },
          { roi: 'LO15135445', nome: 'Angel',                 sesso: 'f' },
          { roi: 'LO15135442', nome: 'Arsenico Vecchi Merletti', sesso: 'm' },
          { roi: 'LO15135447', nome: 'Amber',                 sesso: 'f' },
        ],
      },
    ],

    pedigree: {
      soggetto: { nome: 'Ubaldo Di Casa Fox',           roi: 'LO1234346',            titoli: 'CH IT · CH SOC', sesso: 'm' },

      padre: { nome: 'Pride Of Russia Urano',           roi: 'RKF2831616',           titoli: '',               sesso: 'm' },
      madre: { nome: 'Kilauea Di Casa Fox',              roi: 'LO08135898',           titoli: '',               sesso: 'f' },

      nonni: {
        pp: { nome: 'Urbano Del Diamante Nero',          roi: 'LO0453422',            titoli: 'CH INT · CH ITA',sesso: 'm' },
        mp: { nome: 'Barselona Brava Iz Doma Domeni',    roi: 'RKF1864711',           titoli: 'CH JRU...',      sesso: 'f' },
        pm: { nome: 'Zordan Zewi Del Citone',            roi: 'LO0530944',            titoli: 'IDCSG · AIADSG · WS...', sesso: 'm' },
        mm: { nome: 'Ester Di Casa Fox',                 roi: 'LO0593234',            titoli: '',               sesso: 'f' },
      },

      bisnonni: {
        ppp: { nome: 'Victor Vito Del Rio Bianco',       roi: 'LO0168484',            titoli: 'CH · HDO',       sesso: 'm' },
        mpp: { nome: 'Indiana Del Diamante Nero',        roi: 'LO0052352',            titoli: 'CH',             sesso: 'f' },
        pmp: { nome: 'Zedor Del Nasi',                   roi: 'SLRD002747/JR700549',  titoli: 'INTCH · HDO · PHPV/HCO · RDO', sesso: 'm' },
        mmp: { nome: 'Barselona Iz Doma Domeni',         roi: 'RKF1570209',           titoli: 'CH',             sesso: 'f' },
        ppm: { nome: 'Gino Gomez Del Citone',            roi: 'LO9842928',            titoli: 'FH1 · CAMP.MOND F...', sesso: 'm' },
        mpm: { nome: 'Giada Di Villa Conte',             roi: 'LO0078451',            titoli: 'CH',             sesso: 'f' },
        pmm: { nome: 'Battista Di Casa Fox',             roi: 'LO0366679',            titoli: 'CH I · CH A.I.A.D. · ZTP 1-A', sesso: 'm' },
        mmm: { nome: 'Everzigova Di Poggiopiano',        roi: 'LO02140939',           titoli: 'HD-A · CH',      sesso: 'f' },
      },

      quarta: {
        pppp: { nome: 'Moro Del Diamante Nero',          roi: 'LO98134383',           titoli: 'IT CH',          sesso: 'm' },
        mppp: { nome: 'Zeni Del Riobianco',              roi: 'DS169167',             titoli: 'IT CH · HD0',    sesso: 'f' },
        pmpp: { nome: 'Nitro Del Rio Bianco',            roi: 'LO9914550',            titoli: 'AIAD · DV · IDC · SG · BDJSG...', sesso: 'm' },
        mmpp: { nome: 'India Del Diamante Nero',         roi: 'DS149788',             titoli: 'CH',             sesso: 'f' },
        ppmp: { nome: 'Baron Nike Renewal',              roi: 'JR 75450 DOB',         titoli: 'CH YU · CACIB · INTCH', sesso: 'm' },
        mpmp: { nome: 'Akuna-Matata De Grande Vinko',    roi: 'SLR 002731',           titoli: 'CH RUS',         sesso: 'f' },
        pmmp: { nome: 'Pimm\'s Number One Iz Doma Domeni', roi: 'RKF1322940',        titoli: 'CH',             sesso: 'm' },
        mmmp: { nome: 'Nestle Malin Utta Una',           roi: 'RKF1254548',           titoli: '',               sesso: 'f' },
        pppm: { nome: 'Astor Del Citone',                roi: 'DS144318',             titoli: 'ZTP · SCHH3 · HD0 · ZTP · IPO1', sesso: 'm' },
        mppm: { nome: 'Arielle D\'Amour Del Citone',    roi: 'DS144317',             titoli: 'BDSG · DVSG · EU...', sesso: 'f' },
        pmpm: { nome: 'Nitro Del Rio Bianco',            roi: 'LO9914550',            titoli: 'AIAD · DV · IDC · SG · BDJSG...', sesso: 'm' },
        mmpm: { nome: 'Petra Di Villa Conte',            roi: 'LO9897701',            titoli: 'HD-B',           sesso: 'f' },
        ppmm: { nome: 'Victor Di Casa Balestrieri',      roi: 'LO9928601',            titoli: 'HD1 · CH',       sesso: 'm' },
        mpmm: { nome: 'Allison',                         roi: 'LO0060631',            titoli: '',               sesso: 'f' },
        pmmm: { nome: 'Quillanqasim Del Citone',         roi: 'LO01118239',           titoli: '',               sesso: 'm' },
        mmmm: { nome: 'Brigittebardot Di Poggiopiano',   roi: 'LO9966802',            titoli: '',               sesso: 'f' },
      },
    },

  }, // fine Ubaldo Di Casa Fox

  // ============================================================
  // ERMES DI CASA FOX
  // ============================================================
  'Ermes Di Casa Fox': {

    anagrafica: {
      nome:         'Ermes Di Casa Fox',
      roi:          'LO1416769',
      razza:        'Dobermann',
      mantello:     'Nero focato',
      sesso:        'Maschio',
      nascita:      '28 novembre 2013',
      allevatore:   'Allevamento Di Casa Fox',
      proprietario: 'Creatini Giovanni',
      microchip:    '380260002167009',
      tatuaggio:    '',
      stato:        ''
    },

    titoli: [
      {
        data: '9 giugno 2017',
        titolo: 'Campione Italiano di Bellezza'
      },
      {
        data: '',
        titolo: 'Ch. AIAD'
      }
    ],

    avvenimenti: [
      {
        data: '7 marzo 2015',
        descrizione: 'Controllo radiografico — Displasia anca HD.A (0)',
        luogo: ''
      },
      {
        data: '5 luglio 2016',
        descrizione: 'Deposito campione biologico — Laboratorio Vetogene - ENCI Servizi',
        luogo: ''
      }
    ],

    risultati: [],

    discendenti: [],

    pedigree: {
      soggetto: { nome: 'Ermes Di Casa Fox',    roi: 'LO1416769',  titoli: 'CH IT · CH AIAD', sesso: 'm' },

      padre: { nome: 'Xavi Del Monte Aspro',    roi: 'LO1256670',  titoli: '',  sesso: 'm' },
      madre: { nome: 'Schanel Di Casa Fox',      roi: 'LO1163698',  titoli: '',  sesso: 'f' },

      nonni: {
        pp: { nome: 'Dante Delle Querce Nere',   roi: 'LO09129658', titoli: 'CH ITA',  sesso: 'm' },
        mp: { nome: 'Mora Del Monte Aspro',       roi: 'LO0754123',  titoli: '',        sesso: 'f' },
        pm: { nome: 'Hero Di Casa Fox',           roi: 'LO08100422', titoli: 'HD0',     sesso: 'm' },
        mm: { nome: 'Irha Di Casa Fox',           roi: 'LO08117811', titoli: '',        sesso: 'f' },
      },

      bisnonni: {
        ppp: { nome: 'Pathos Delle Querce Nere',  roi: 'LO0547687',           titoli: 'CH',                     sesso: 'm' },
        mpp: { nome: "Ca' Stellamaris Corinne",   roi: 'LO065810',            titoli: '',                       sesso: 'f' },
        pmp: { nome: 'Valiantvaldes Del Citone',   roi: 'LO0528317',           titoli: '',                       sesso: 'm' },
        mmp: { nome: 'Lola Della Sinvessa',        roi: 'LO0187611',           titoli: '',                       sesso: 'f' },
        ppm: { nome: 'Zedor Del Nasi',             roi: 'SLRD002747/JR700549', titoli: 'INTCH · HD0',            sesso: 'm' },
        mpm: { nome: 'Elisir Di Casa Fox',         roi: 'LO0593231',           titoli: 'HD0',                    sesso: 'f' },
        pmm: { nome: 'Grant Di Villa Conte',       roi: 'LO0078427',           titoli: 'CH I · ZTP · HD-A',      sesso: 'm' },
        mmm: { nome: 'Endora Di Casa Fox',         roi: 'LO0593230',           titoli: 'HD-A',                   sesso: 'f' },
      },

      quarta: {
        pppp: { nome: 'Urbano Del Diamante Nero',      roi: 'LO0453422',  titoli: 'CH INT · CH ITA',          sesso: 'm' },
        mppp: { nome: 'Ninette Delle Sinvessa',         roi: 'LO02103523', titoli: '',                         sesso: 'f' },
        pmpp: { nome: 'Leolevante Del Riobianco',       roi: 'LO03110870', titoli: '',                         sesso: 'm' },
        mmpp: { nome: 'Antares',                        roi: 'LO0128313',  titoli: '',                         sesso: 'f' },
        ppmp: { nome: 'Gelo Robis Golden',              roi: 'RKF1052860', titoli: 'CH RU · IPO 3',            sesso: 'm' },
        mpmp: { nome: 'Queenbee Del Citone',            roi: 'LO01118231', titoli: '',                         sesso: 'f' },
        pmmp: { nome: 'Nitro Del Rio Bianco',           roi: 'LO9914550',  titoli: 'AIAD · DV · IDC SG',       sesso: 'm' },
        mmmp: { nome: 'Cocacola Della Sinvessa',        roi: 'LO9892667',  titoli: '',                         sesso: 'f' },
        pppm: { nome: 'Baron Nike Renewal',             roi: 'JR 75450 DOB', titoli: 'CH YU · CACIB · INTCH', sesso: 'm' },
        mppm: { nome: 'Akuna-Matata De Grande Vinko',   roi: 'SLR 002731', titoli: 'CH RUS',                   sesso: 'f' },
        pmpm: { nome: 'Battista Di Casa Fox',           roi: 'LO0366679',  titoli: 'CH I · CH A.I.A.D. · ZTP', sesso: 'm' },
        mmpm: { nome: 'Everzigova Di Poggiopiano',      roi: 'LO02140939', titoli: 'HD-A · CH',                sesso: 'f' },
        ppmm: { nome: 'Nitro Del Rio Bianco',           roi: 'LO9914550',  titoli: 'AIAD · DV · IDC SG',       sesso: 'm' },
        mpmm: { nome: 'Petra Di Villa Conte',           roi: 'LO9897701',  titoli: 'HD-B',                     sesso: 'f' },
        pmmm: { nome: 'Battista Di Casa Fox',           roi: 'LO0366679',  titoli: 'CH I · CH A.I.A.D. · ZTP', sesso: 'm' },
        mmmm: { nome: 'Everzigova Di Poggiopiano',      roi: 'LO02140939', titoli: 'HD-A · CH',                sesso: 'f' },
      },
    },

  }, // fine Ermes Di Casa Fox

  // ============================================================
  // IRON DI CASA FOX
  // ============================================================
  'Iron Di Casa Fox': {

    anagrafica: {
      nome:         'Iron Di Casa Fox ZTP 1-B, HD-A, IPO 1, DNA',
      roi:          'LO08117806',
      razza:        'Dobermann',
      mantello:     'Nero focato',
      sesso:        'Maschio',
      nascita:      '4 gennaio 2008',
      allevatore:   'Allevamento Di Casa Fox',
      proprietario: 'Kedzierska Jowita',
      microchip:    '981100000509138',
      tatuaggio:    '',
      stato:        ''
    },

    titoli: [],

    avvenimenti: [
      {
        data: '10 dicembre 2012',
        descrizione: 'Deposito campione biologico — Laboratorio Biotecnologie Genetiche dell\u2019Universit\u00e0 di Pisa',
        luogo: ''
      }
    ],

    risultati: [
      {
        data: '31 gennaio 2016',
        evento: 'Raduno Nazionale',
        localita: 'Campiglia Marittima (LI)',
        giornata: '31 gennaio 2016',
        sottoprova: 'Nr. catalogo: 85',
        qualifica: 'Eccellente',
        classifica: '1\u00b0 classificato',
        certificati: '',
        giudice: 'Polifrone Attilio'
      },
      {
        data: '25 gennaio 2015',
        evento: 'Raduno Nazionale',
        localita: 'Campiglia Marittima (LI)',
        giornata: '25 gennaio 2015',
        sottoprova: 'Nr. catalogo: 78',
        qualifica: 'Eccellente',
        classifica: '2\u00b0 classificato',
        certificati: '',
        giudice: 'Pezzano Pietro Gino'
      },
      {
        data: '1 agosto 2009',
        evento: 'European Dobermann Trophy',
        localita: 'Austria',
        giornata: '01.08.2009',
        sottoprova: 'Classe Juniores',
        qualifica: 'Eccellente',
        classifica: '1\u00b0 European Jugen Trophy Winner',
        certificati: '',
        giudice: 'N. Daube \u00b7 E. Szokol'
      },
      {
        data: '11 luglio 2009',
        evento: 'Raduno Vergiate 2009',
        localita: 'Vergiate',
        giornata: '11.07.2009',
        sottoprova: 'Speciale Intermedia Class',
        qualifica: 'Eccellente',
        classifica: '1\u00b0 \u00b7 Ris. C.A.C.',
        certificati: 'Ris. C.A.C.',
        giudice: 'Pezzano'
      },
      {
        data: '21 giugno 2009',
        evento: 'Campionato Sociale 2009',
        localita: '',
        giornata: '21.06.2009',
        sottoprova: 'Classe Giovani',
        qualifica: 'Eccellente',
        classifica: '2\u00b0',
        certificati: '',
        giudice: 'Wiblishauser \u00b7 Pezzano \u00b7 E. Szokol'
      },
      {
        data: '24 maggio 2009',
        evento: 'Expo Internazionale di San Marino 2009',
        localita: 'San Marino',
        giornata: '24.05.2009',
        sottoprova: 'Young Class',
        qualifica: 'Eccellente',
        classifica: '2\u00b0',
        certificati: '',
        giudice: ''
      },
      {
        data: '10 maggio 2009',
        evento: 'Expo Nazionale Pisa 2009',
        localita: 'Pisa',
        giornata: '10.05.2009',
        sottoprova: 'Speciale Young Class',
        qualifica: 'Eccellente',
        classifica: '1\u00b0 \u00b7 Miglior Giovane Maschio',
        certificati: '',
        giudice: 'N. Corsini B.'
      },
      {
        data: '3 maggio 2009',
        evento: 'Expo Nazionale di Grosseto 2009',
        localita: 'Grosseto',
        giornata: '03.05.2009',
        sottoprova: 'Young Class',
        qualifica: 'Molto Buono',
        classifica: '1\u00b0',
        certificati: '',
        giudice: ''
      },
      {
        data: '26 aprile 2009',
        evento: 'Expo Internazionale di Livorno 2009',
        localita: 'Livorno',
        giornata: '26.04.2009',
        sottoprova: 'Young Class \u00b7 3\u00b0 Raggruppamento Giovani',
        qualifica: 'Eccellente',
        classifica: '1\u00b0 \u00b7 B.O.B.',
        certificati: 'B.O.B.',
        giudice: ''
      },
      {
        data: '8 gennaio 2009',
        evento: 'Test PHTVL/PHPV',
        localita: '',
        giornata: '08.01.2009',
        sottoprova: '',
        qualifica: 'Free',
        classifica: 'PHTVL/PHPV Free',
        certificati: '',
        giudice: ''
      },
      {
        data: '4 ottobre 2008',
        evento: 'European Dog Show Budapest 2008',
        localita: 'Budapest',
        giornata: '04.10.2008',
        sottoprova: 'Classe Junior',
        qualifica: 'Eccellente',
        classifica: '4\u00b0',
        certificati: '',
        giudice: ''
      },
      {
        data: '3 settembre 2008',
        evento: 'Trofeo Liguria 2008',
        localita: 'Liguria',
        giornata: '03.09.2008',
        sottoprova: 'Classe Juniores',
        qualifica: 'Eccellente',
        classifica: '1\u00b0 Miglior Juniores',
        certificati: '',
        giudice: 'E. Szokol'
      },
      {
        data: '5 giugno 2008',
        evento: 'Campionato A.I.A.D. 2008',
        localita: '',
        giornata: '05.06.2008',
        sottoprova: 'Classe Baby',
        qualifica: 'Eccellente',
        classifica: '1\u00b0',
        certificati: '',
        giudice: 'Pezzano'
      }
    ],

    discendenti: [
      {
        data: '7 ottobre 2009',
        figli: [
          { roi: 'LO10127406', nome: 'Giuda Benhur Di Baia Nera', sesso: 'm' }
        ]
      },
      {
        data: '10 febbraio 2010',
        figli: [
          { roi: 'LO10149690', nome: 'Ufana Ursalina De Grande Vinko', sesso: 'f' }
        ]
      },
      {
        data: '25 maggio 2010',
        figli: [
          { roi: 'LO10113704', nome: 'Pamela Di Casa Fox',      sesso: 'f' },
          { roi: 'LO10113702', nome: 'Petra Di Casa Fox',       sesso: 'f' },
          { roi: 'LO10113699', nome: 'Puma Di Casa Fox',        sesso: 'f' },
          { roi: 'LO10113705', nome: 'Penny Black Di Casa Fox', sesso: 'f' },
          { roi: 'LO10113695', nome: 'Pancho Di Casa Fox',      sesso: 'm' },
          { roi: 'LO10113697', nome: 'Penelope Di Casa Fox',    sesso: 'f' }
        ]
      },
      {
        data: '21 novembre 2011',
        figli: [
          { roi: 'LO1225196', nome: 'Giada Di Casa Gaia',  sesso: 'f' },
          { roi: 'LO1225194', nome: 'Guapa Di Casa Gaia',  sesso: 'f' },
          { roi: 'LO1225195', nome: 'Gamon Di Casa Gaia',  sesso: 'm' }
        ]
      },
      {
        data: '2 giugno 2012',
        figli: [
          { roi: 'LO1276368', nome: "Gladio Dell'Orgoglio Nero",     sesso: 'm' },
          { roi: 'LO1276370', nome: "Glamour Dell'Orgoglio Nero",    sesso: 'f' },
          { roi: 'LO1276371', nome: "Ginevra Dell'Orgoglio Nero",    sesso: 'f' },
          { roi: 'LO1276367', nome: "Gregory Dell'Orgoglio Nero",    sesso: 'm' },
          { roi: 'LO1276375', nome: "Guendalina Dell'Orgoglio Nero", sesso: 'f' },
          { roi: 'LO1276369', nome: "Gemma Dell'Orgoglio Nero",      sesso: 'f' }
        ]
      },
      {
        data: '3 ottobre 2012',
        figli: [
          { roi: 'LO12162082', nome: "Berry Di Tamalu'",  sesso: 'f' },
          { roi: 'LO12162081', nome: "Biuty Di Tamalu'",  sesso: 'f' }
        ]
      },
      {
        data: '14 ottobre 2012',
        figli: [
          { roi: 'LO12163522', nome: 'Pimpa Yuma Dei Nobili Nati',   sesso: 'f' },
          { roi: 'LO12163520', nome: 'Pachille Dei Nobili Nati',     sesso: 'm' },
          { roi: 'LO12159794', nome: 'Zamira Di Casa Fox',           sesso: 'f' },
          { roi: 'LO12163511', nome: 'Phanter Dei Nobili Nati',      sesso: 'm' },
          { roi: 'LO12163523', nome: 'Peperina Pippa Dei Nobili Nati', sesso: 'f' },
          { roi: 'LO12163517', nome: 'Parsi Dei Nobili Nati',        sesso: 'm' },
          { roi: 'LO12159792', nome: 'Zell Di Casa Fox',             sesso: 'f' },
          { roi: 'LO12159786', nome: 'Zico Di Casa Fox',             sesso: 'm' },
          { roi: 'LO12163515', nome: 'Puch Dei Nobili Nati',         sesso: 'm' },
          { roi: 'LO12159789', nome: 'Zorro Di Casa Fox',            sesso: 'm' },
          { roi: 'LO12159787', nome: 'Zeus Di Casa Fox',             sesso: 'm' }
        ]
      },
      {
        data: '6 novembre 2012',
        figli: [
          { roi: 'LO137114', nome: 'Daskarera Aishaladyluna', sesso: 'f' },
          { roi: 'LO137112', nome: 'Anais',                   sesso: 'f' },
          { roi: 'LO137109', nome: 'Airin',                   sesso: 'f' }
        ]
      },
      {
        data: '11 novembre 2012',
        figli: [
          { roi: 'LO12156719', nome: "Icaro Dell'Orgoglio Nero",    sesso: 'm' },
          { roi: 'LO12156730', nome: "Iary Dell'Orgoglio Nero",     sesso: 'm' },
          { roi: 'LO12156736', nome: "Ivonne Dell'Orgoglio Nero",   sesso: 'f' },
          { roi: 'LO12156723', nome: "Igor Dell'Orgoglio Nero",     sesso: 'm' },
          { roi: 'LO12156728', nome: "Ivo Dell'Orgoglio Nero",      sesso: 'm' },
          { roi: 'LO12156725', nome: "Icy Dell'Orgoglio Nero",      sesso: 'm' },
          { roi: 'LO12156724', nome: "Ivory Dell'Orgoglio Nero",    sesso: 'm' },
          { roi: 'LO12156737', nome: "Isabelle Dell'Orgoglio Nero", sesso: 'f' },
          { roi: 'LO12156716', nome: "Indio Dell'Orgoglio Nero",    sesso: 'm' },
          { roi: 'LO12156733', nome: "Ingrid Dell'Orgoglio Nero",   sesso: 'f' }
        ]
      },
      {
        data: '1 dicembre 2012',
        figli: [
          { roi: 'LO1324573', nome: 'Iury Della Piancarda',    sesso: 'm' },
          { roi: 'LO1324574', nome: 'Ice Della Piancarda',     sesso: 'm' },
          { roi: 'LO1324580', nome: 'Ilaki Della Piancarda',   sesso: 'm' },
          { roi: 'LO1324569', nome: 'Ilane Della Piancarda',   sesso: 'm' },
          { roi: 'LO1324575', nome: 'Imera Della Piancarda',   sesso: 'f' },
          { roi: 'LO1324577', nome: 'Iris Della Piancarda',    sesso: 'f' },
          { roi: 'LO1324565', nome: 'Iron Della Piancarda',    sesso: 'm' },
          { roi: 'LO1324576', nome: 'Ira Della Piancarda',     sesso: 'f' },
          { roi: 'LO1324568', nome: 'Iceberg Della Piancarda', sesso: 'm' },
          { roi: 'LO1324596', nome: 'Ilona Della Piancarda',   sesso: 'f' },
          { roi: 'LO1324590', nome: 'Ivone Della Piancarda',   sesso: 'f' },
          { roi: 'LO1324572', nome: 'Igor Della Piancarda',    sesso: 'm' }
        ]
      },
      {
        data: '27 dicembre 2012',
        figli: [
          { roi: 'LO1333305', nome: 'Pandora Del Cesenate', sesso: 'f' },
          { roi: 'LO1333308', nome: 'Patrick Del Cesenate', sesso: 'm' },
          { roi: 'LO1333304', nome: 'Pilar Del Cesenate',   sesso: 'f' },
          { roi: 'LO1333306', nome: 'Paco Del Cesenate',    sesso: 'm' }
        ]
      },
      {
        data: '7 gennaio 2013',
        figli: [
          { roi: 'LO1311494', nome: "Kenia Dell'Orgoglio Nero",      sesso: 'f' },
          { roi: 'LO1311479', nome: "Kaiser Iron Dell'Orgoglio Nero", sesso: 'm' },
          { roi: 'LO1311480', nome: "Kiram Dago Dell'Orgoglio Nero", sesso: 'm' },
          { roi: 'LO1311490', nome: "Kosmos Dell'Orgoglio Nero",     sesso: 'm' },
          { roi: 'LO1311486', nome: "Konan Dell'Orgoglio Nero",      sesso: 'm' },
          { roi: 'LO1311485', nome: "Kuma Dell'Orgoglio Nero",       sesso: 'm' },
          { roi: 'LO1311493', nome: "Kaya Dell'Orgoglio Nero",       sesso: 'f' },
          { roi: 'LO1311483', nome: "Kendo Dell'Orgoglio Nero",      sesso: 'm' },
          { roi: 'LO1311488', nome: "Kronos Dell'Orgoglio Nero",     sesso: 'm' },
          { roi: 'LO1311482', nome: "King Rocco Dell'Orgoglio Nero", sesso: 'm' },
          { roi: 'LO1311491', nome: "Kiwi Dell'Orgoglio Nero",       sesso: 'm' },
          { roi: 'LO1311492', nome: "Kelly Dell'Orgoglio Nero",      sesso: 'f' }
        ]
      },
      {
        data: '20 febbraio 2013',
        figli: [
          { roi: 'LO1356326', nome: 'Einar Campagnanensis', sesso: 'm' }
        ]
      },
      {
        data: '13 marzo 2013',
        figli: [
          { roi: 'LO1370405', nome: 'Sansone', sesso: 'm' },
          { roi: 'LO1370404', nome: 'Vlad',    sesso: 'm' }
        ]
      },
      {
        data: '18 maggio 2013',
        figli: [
          { roi: 'LO13107087', nome: 'Bach-Alifax Della Collina Degli Ulivi',   sesso: 'm' },
          { roi: 'LO13107081', nome: 'Biorka-Kaska Della Collina Degli Ulivi',  sesso: 'f' },
          { roi: 'LO13107083', nome: 'Bayron-Jivago Della Collina Degli Ulivi', sesso: 'm' },
          { roi: 'LO13107084', nome: 'Byblos-Bri Jon Della Collina Degli Ulivi', sesso: 'm' },
          { roi: 'LO13107086', nome: 'Blink-Oderik Della Collina Degli Ulivi',  sesso: 'm' },
          { roi: 'LO13107080', nome: 'Beky-Jey Della Collina Degli Ulivi',      sesso: 'f' },
          { roi: 'LO13107090', nome: 'Bairon-Boomer Della Collina Degli Ulivi', sesso: 'm' },
          { roi: 'LO13107082', nome: 'Baron-Hide Della Collina Degli Ulivi',    sesso: 'm' },
          { roi: 'LO13107074', nome: 'Betsy-Jane Della Collina Degli Ulivi',    sesso: 'f' },
          { roi: 'LO13107085', nome: 'Blade-Grey Della Collina Degli Ulivi',    sesso: 'm' }
        ]
      },
      {
        data: '25 novembre 2013',
        figli: [
          { roi: 'LO1423174', nome: 'Irha Campagnanensis',  sesso: 'f' },
          { roi: 'LO1423169', nome: 'Iron Campagnanensis',  sesso: 'm' },
          { roi: 'LO1423173', nome: 'I-Roy Campagnanensis', sesso: 'm' }
        ]
      },
      {
        data: '20 ottobre 2014',
        figli: [
          { roi: 'LO14176969', nome: 'Black Kosmos Jose',  sesso: 'm' },
          { roi: 'LO14176970', nome: 'Black Kosmos Juan',  sesso: 'm' },
          { roi: 'LO14176972', nome: 'Black Kosmos Julia', sesso: 'f' },
          { roi: 'LO14176973', nome: 'Black Kosmos Jamie', sesso: 'f' }
        ]
      },
      {
        data: '19 marzo 2015',
        figli: [
          { roi: 'LO1576249', nome: 'Tequila Del Cesenate',                sesso: 'f' },
          { roi: 'LO1576256', nome: 'Tamara Del Cesenate',                 sesso: 'f' },
          { roi: 'LO1576260', nome: 'Thomas Del Cesenate',                 sesso: 'm' },
          { roi: 'LO1576254', nome: 'Tasia Del Cesenate',                  sesso: 'f' },
          { roi: 'LO1577107', nome: 'Apocalisse Della Nuova Villa Valori', sesso: 'm' },
          { roi: 'LO1577112', nome: 'Adelante Antifa Della Nuova Villa Valori', sesso: 'f' },
          { roi: 'LO1577120', nome: 'Aethan Della Nuova Villa Valori',     sesso: 'm' },
          { roi: 'LO1576245', nome: 'Tosca Del Cesenate',                  sesso: 'f' },
          { roi: 'LO1576258', nome: 'Tyson Del Cesenate',                  sesso: 'm' },
          { roi: 'LO1577114', nome: 'Avana Della Nuova Villa Valori',      sesso: 'f' }
        ]
      },
      {
        data: '1 maggio 2015',
        figli: [
          { roi: 'LO15129820', nome: 'Maya',  sesso: 'f' },
          { roi: 'LO15129825', nome: 'Lara',  sesso: 'f' },
          { roi: 'LO15128014', nome: 'Lex',   sesso: 'm' },
          { roi: 'LO15128109', nome: 'Max',   sesso: 'm' },
          { roi: 'LO15127919', nome: 'Aron',  sesso: 'm' },
          { roi: 'LO15129823', nome: 'Sophia', sesso: 'f' },
          { roi: 'LO15129819', nome: 'Kira',  sesso: 'f' },
          { roi: 'LO15128104', nome: 'Athos', sesso: 'm' },
          { roi: 'LO15128110', nome: 'Leon',  sesso: 'm' },
          { roi: 'LO15127914', nome: 'Gamon', sesso: 'm' },
          { roi: 'LO15128101', nome: 'Thor',  sesso: 'm' },
          { roi: 'LO15129817', nome: 'Ira',   sesso: 'f' },
          { roi: 'LO15127912', nome: 'Moon',  sesso: 'f' },
          { roi: 'LO15128106', nome: 'Tyson', sesso: 'm' },
          { roi: 'LO15127909', nome: 'Crono', sesso: 'm' }
        ]
      },
      {
        data: '25 giugno 2015',
        figli: [
          { roi: 'LO15133185', nome: 'King Di Casa Fox',           sesso: 'm' },
          { roi: 'LO15133199', nome: 'Kassandra Di Casa Fox',      sesso: 'f' },
          { roi: 'LO15133194', nome: 'Kenya Di Casa Fox',          sesso: 'f' },
          { roi: 'LO15133192', nome: 'King Yago Di Casa Fox',      sesso: 'm' },
          { roi: 'LO15133177', nome: 'Kronos Di Casa Fox',         sesso: 'm' },
          { roi: 'LO15133214', nome: 'Kristas Di Casa Fox',        sesso: 'f' },
          { roi: 'LO15133222', nome: 'Kalifornia Joy Di Casa Fox', sesso: 'f' },
          { roi: 'LO15133178', nome: 'Klay Di Casa Fox',           sesso: 'm' },
          { roi: 'LO15133201', nome: 'Kahalo Frida Di Casa Fox',   sesso: 'f' },
          { roi: 'LO15133183', nome: 'King Amos Di Casa Fox',      sesso: 'm' },
          { roi: 'LO15133203', nome: 'Keyra Di Casa Fox',          sesso: 'f' }
        ]
      }
    ],

    pedigree: {
      soggetto: { nome: 'Iron Di Casa Fox ZTP 1-B, HD-A, IPO 1, DNA', roi: 'LO08117806', titoli: 'ZTP 1-B \u00b7 HD-A \u00b7 IPO 1 \u00b7 DNA', sesso: 'm' },

      padre: { nome: 'Grant Di Villa Conte',       roi: 'LO0078427',  titoli: 'CH I \u00b7 ZTP \u00b7 HD-A', sesso: 'm' },
      madre: { nome: 'Endora Di Casa Fox',          roi: 'LO0593230',  titoli: 'HD-A',                       sesso: 'f' },

      nonni: {
        pp: { nome: 'Nitro Del Rio Bianco',          roi: 'LO9914550',  titoli: 'AIAD \u00b7 DV \u00b7 IDC SG', sesso: 'm' },
        mp: { nome: 'Petra Di Villa Conte',          roi: 'LO9897701',  titoli: 'HD-B',                         sesso: 'f' },
        pm: { nome: 'Battista Di Casa Fox',          roi: 'LO0366679',  titoli: 'CH I \u00b7 CH A.I.A.D. \u00b7 ZTP', sesso: 'm' },
        mm: { nome: 'Everzigova Di Poggiopiano',     roi: 'LO02140939', titoli: 'HD-A \u00b7 CH',               sesso: 'f' },
      },

      bisnonni: {
        ppp: { nome: 'Nilo Del Rio Bianco',          roi: 'DS132577',     titoli: 'CH',                         sesso: 'm' },
        mpp: { nome: 'Farah Del Riobianco',          roi: 'DS115088',     titoli: '',                           sesso: 'f' },
        pmp: { nome: 'Graaf Vito V. Neerlands Stam', roi: 'NHSB2033689',  titoli: 'CH NED \u00b7 INT',          sesso: 'm' },
        mmp: { nome: 'Morgana Di Villa Conte',       roi: 'DS145366',     titoli: '',                           sesso: 'f' },
        ppm: { nome: 'Victor Di Casa Balestrieri',   roi: 'LO9928601',    titoli: 'HD1 \u00b7 CH',              sesso: 'm' },
        mpm: { nome: 'Allison',                      roi: 'LO0060631',    titoli: '',                           sesso: 'f' },
        pmm: { nome: 'Quillanqasim Del Citone',      roi: 'LO01118239',   titoli: '',                           sesso: 'm' },
        mmm: { nome: 'Brigittebardot Di Poggiopiano', roi: 'LO9966802',   titoli: '',                           sesso: 'f' },
      },

      quarta: {
        pppp: { nome: 'Nero Del Diamante Nero',      roi: 'DS108119',     titoli: 'CH',                         sesso: 'm' },
        mppp: { nome: 'Athena Del Riobianco',        roi: 'DS105249',     titoli: '',                           sesso: 'f' },
        pmpp: { nome: 'Graaf Quirinus V. Neerlands Stam', roi: 'ZZ6768370', titoli: 'NHSB',                    sesso: 'm' },
        mmpp: { nome: 'Sophie Del Riobianco',        roi: 'DS092935',     titoli: 'CH',                         sesso: 'f' },
        ppmp: { nome: 'Baron Bryan Vom Harrosberg',  roi: 'ZZ6952400',    titoli: 'NHSB',                       sesso: 'm' },
        mpmp: { nome: 'Gravin Isis V. Neerlands Stam', roi: 'NHSB1797306', titoli: '',                          sesso: 'f' },
        pmmp: { nome: 'Larson Royal-Bell',           roi: 'ZZ8581370',    titoli: 'CH I',                       sesso: 'm' },
        mmmp: { nome: 'Mery Di Villa Conte',         roi: 'DS118857',     titoli: '',                           sesso: 'f' },
        pppm: { nome: 'Cock Di Casa Balestrieri',    roi: '117189',       titoli: '',                           sesso: 'm' },
        mppm: { nome: 'Elli Di Casa Balestrieri',    roi: 'DS137259',     titoli: '',                           sesso: 'f' },
        pmpm: { nome: 'Firefox',                     roi: 'DS126736',     titoli: 'Ch. IT · Sieger AIAD 1996',                           sesso: 'm' },
        mmpm: { nome: 'Ladyhawk Del Montaldo',       roi: 'DS177173',     titoli: '',                           sesso: 'f' },
        ppmm: { nome: 'Tigr Iz Slavnoi Stai',        roi: 'RKF0031707',   titoli: 'RUS \u00b7 CL CH',           sesso: 'm' },
        mpmm: { nome: 'Katrinakristal Del Citone',   roi: 'LO9971414',    titoli: '',                           sesso: 'f' },
        pmmm: { nome: 'Alfa Adelante Del Citone',    roi: 'DS144314',     titoli: 'BD \u00b7 DV \u00b7 EUR IDC', sesso: 'm' },
        mmmm: { nome: 'Ghislaineginevra Di Acquanegra', roi: 'DS127799',  titoli: '',                           sesso: 'f' },
      },
    },

  }, // fine Iron Di Casa Fox

  // ============================================================
  // KORA DI CASA FOX
  // ============================================================
  'Kora Di Casa Fox': {

    anagrafica: {
      nome:         'Kora Di Casa Fox',
      roi:          'LO08135900',
      razza:        'Dobermann',
      mantello:     'Nero focato',
      sesso:        'Femmina',
      nascita:      '7 aprile 2008',
      allevatore:   'Allevamento Di Casa Fox',
      proprietario: 'Pucci Dario',
      microchip:    '981100000520136',
      tatuaggio:    '',
      stato:        ''
    },

    titoli: [
      { titolo: 'Salute: HDA',                                              data: '' },
      { titolo: 'ECO CARDIO negativo',                                       data: '16 aprile 2012' },
      { titolo: 'PHTVL/PHPV 1',                                             data: '' },
      { titolo: 'VW Carrier',                                               data: '' },
      { titolo: 'EchoCardio Doppler negativo',                              data: '2014' },
      { titolo: 'ZTP Germany 1\u00b0 MB',                                   data: '' },
      { titolo: 'K\u00f6rung 2012 Germany 2B MB',                           data: '2012' },
      { titolo: 'K\u00f6rung ZVA 2014 Germany 2A MB',                       data: '2014' },
      { titolo: 'Working Cert \u2014 Internationale EXPO Livorno Working Class 1\u00b0 MB', data: '' },
      { titolo: 'Working Cert \u2014 Internazionale EXPO Pisa Working Class 1\u00b0 Ecc Res. CACIB', data: '' }
    ],

    avvenimenti: [
      {
        data: '7 maggio 2010',
        descrizione: 'Deposito campione biologico \u2014 Laboratorio Biotecnologie Genetiche dell\u2019Universit\u00e0 di Pisa',
        luogo: ''
      }
    ],

    risultati: [
      {
        data: '15 aprile 2012',
        evento: 'Esposizione Internazionale',
        localita: 'Livorno (LI)',
        giornata: '15.04.2012',
        sottoprova: 'Nr. catalogo: 71 \u00b7 Classe Lavoro',
        qualifica: 'Eccellente',
        classifica: '1\u00aa classificata',
        certificati: 'CAC/R. CACIB',
        giudice: 'Matakovic Boyan'
      },
      {
        data: '14 aprile 2012',
        evento: 'Esposizione Internazionale',
        localita: 'Livorno (LI)',
        giornata: '14.04.2012',
        sottoprova: 'Nr. catalogo: 80 \u00b7 Classe Lavoro',
        qualifica: 'Molto Buono',
        classifica: '1\u00aa classificata',
        certificati: '',
        giudice: 'Perosino Guido'
      }
    ],

    discendenti: [
      {
        data: '28 agosto 2010',
        figli: [
          { roi: 'LO10189950', nome: 'Quentin Di Casa Fox',  sesso: 'm' },
          { roi: 'LO10189942', nome: 'Quick Di Casa Fox',    sesso: 'm' },
          { roi: 'LO10189980', nome: 'Ozoe Di Casa Fox',     sesso: 'f' },
          { roi: 'LO10189977', nome: 'Quara Di Casa Fox',    sesso: 'f' },
          { roi: 'LO10189964', nome: 'Quinto Di Casa Fox',   sesso: 'm' },
          { roi: 'LO10189940', nome: 'Qyankora Di Casa Fox', sesso: 'm' },
          { roi: 'LO10189978', nome: 'Querida Di Casa Fox',  sesso: 'f' },
          { roi: 'LO10189976', nome: 'Quanita Di Casa Fox',  sesso: 'f' }
        ]
      },
      {
        data: '28 settembre 2013',
        figli: [
          { roi: 'LO142421', nome: 'Duffy Di Casa Fox',       sesso: 'f' },
          { roi: 'LO142412', nome: 'Dylan Dog Di Casa Fox',   sesso: 'm' },
          { roi: 'LO142408', nome: 'Dandy Di Casa Fox',       sesso: 'm' },
          { roi: 'LO142417', nome: 'Dante Di Casa Fox',       sesso: 'm' },
          { roi: 'LO142438', nome: 'Dafne Di Casa Fox',       sesso: 'f' },
          { roi: 'LO142410', nome: 'Donnie Darko Di Casa Fox', sesso: 'm' },
          { roi: 'LO142440', nome: 'Dakota Di Casa Fox',      sesso: 'f' },
          { roi: 'LO142419', nome: 'Dolly Pop Di Casa Fox',   sesso: 'f' },
          { roi: 'LO142429', nome: 'Demy Di Casa Fox',        sesso: 'f' }
        ]
      }
    ],

    pedigree: {
      soggetto: { nome: 'Kora Di Casa Fox', roi: 'LO08135900', titoli: '', sesso: 'f' },

      padre: { nome: 'Zordan Zewi Del Citone', roi: 'LO0530944', titoli: 'IDCSG \u00b7 AIADSG \u00b7 WS', sesso: 'm' },
      madre: { nome: 'Ester Di Casa Fox',      roi: 'LO0593234', titoli: '',                              sesso: 'f' },

      nonni: {
        pp: { nome: 'Gino Gomez Del Citone',    roi: 'LO9842928',    titoli: 'FH1 \u00b7 Camp. Mond.',       sesso: 'm' },
        mp: { nome: 'Giada Di Villa Conte',     roi: 'LO0078451',    titoli: 'CH',                          sesso: 'f' },
        pm: { nome: 'Battista Di Casa Fox',     roi: 'LO0366679',    titoli: 'CH I \u00b7 CH A.I.A.D. \u00b7 ZTP', sesso: 'm' },
        mm: { nome: 'Everzigova Di Poggiopiano', roi: 'LO02140939',  titoli: 'HD-A \u00b7 CH',               sesso: 'f' },
      },

      bisnonni: {
        ppp: { nome: 'Astor Del Citone',             roi: 'DS144318',     titoli: 'ZTP \u00b7 SCHH3 \u00b7 HD0 \u00b7 IPO1', sesso: 'm' },
        mpp: { nome: 'Arielle D\u2019Amour Del Citone', roi: 'DS144317', titoli: 'BDSG \u00b7 DVSG \u00b7 EU',  sesso: 'f' },
        pmp: { nome: 'Nitro Del Rio Bianco',         roi: 'LO9914550',    titoli: 'AIAD \u00b7 DV \u00b7 IDC SG \u00b7 BDJSG', sesso: 'm' },
        mmp: { nome: 'Petra Di Villa Conte',         roi: 'LO9897701',    titoli: 'HD-B',                    sesso: 'f' },
        ppm: { nome: 'Victor Di Casa Balestrieri',   roi: 'LO9928601',    titoli: 'HD1 \u00b7 CH',            sesso: 'm' },
        mpm: { nome: 'Allison',                      roi: 'LO0060631',    titoli: '',                        sesso: 'f' },
        pmm: { nome: 'Quillanqasim Del Citone',      roi: 'LO01118239',   titoli: '',                        sesso: 'm' },
        mmm: { nome: 'Brigittebardot Di Poggiopiano', roi: 'LO9966802',   titoli: '',                        sesso: 'f' },
      },

      quarta: {
        pppp: { nome: 'Prinz Vom Norden Stamm',      roi: 'DS091001',     titoli: 'CH IT \u00b7 CH AIAD \u00b7 INT', sesso: 'm' },
        mppp: { nome: 'Tequillamali Del Citone',     roi: 'DS106530',     titoli: 'BDSG \u00b7 DVSG \u00b7 IDCSG', sesso: 'f' },
        pmpp: { nome: 'Prinz Vom Norden Stamm',      roi: 'DS091001',     titoli: 'CH IT \u00b7 CH AIAD \u00b7 INT', sesso: 'm' },
        mmpp: { nome: 'Tequillamali Del Citone',     roi: 'DS106530',     titoli: 'BDSG \u00b7 DVSG \u00b7 IDCSG', sesso: 'f' },
        ppmp: { nome: 'Nilo Del Rio Bianco',         roi: 'DS132577',     titoli: 'CH',                      sesso: 'm' },
        mpmp: { nome: 'Farah Del Riobianco',         roi: 'DS115088',     titoli: '',                        sesso: 'f' },
        pmmp: { nome: 'Graaf Vito V. Neerlands Stam', roi: 'NHSB2033689', titoli: 'CH NED \u00b7 INT',        sesso: 'm' },
        mmmp: { nome: 'Morgana Di Villa Conte',      roi: 'DS145366',     titoli: '',                        sesso: 'f' },
        pppm: { nome: 'Cock Di Casa Balestrieri',    roi: '117189',       titoli: '',                        sesso: 'm' },
        mppm: { nome: 'Elli Di Casa Balestrieri',    roi: 'DS137259',     titoli: '',                        sesso: 'f' },
        pmpm: { nome: 'Firefox',                     roi: 'DS126736',     titoli: 'Ch. IT · Sieger AIAD 1996',                        sesso: 'm' },
        mmpm: { nome: 'Ladyhawk Del Montaldo',       roi: 'DS177173',     titoli: '',                        sesso: 'f' },
        ppmm: { nome: 'Tigr Iz Slavnoi Stai',        roi: 'RKF0031707',   titoli: 'RUS \u00b7 CL CH',        sesso: 'm' },
        mpmm: { nome: 'Katrinakristal Del Citone',   roi: 'LO9971414',    titoli: '',                        sesso: 'f' },
        pmmm: { nome: 'Alfa Adelante Del Citone',    roi: 'DS144314',     titoli: 'BD \u00b7 DV \u00b7 EUR IDC', sesso: 'm' },
        mmmm: { nome: 'Ghislaineginevra Di Acquanegra', roi: 'DS127799',  titoli: '',                        sesso: 'f' },
      },
    },

  }, // fine Kora Di Casa Fox

  // ============================================================
  // FIREFOX
  // ============================================================
  'FireFox': {

    anagrafica: {
      nome:         'FireFox',
      roi:          'DS126736',
      razza:        'Dobermann',
      mantello:     'Black&Tan',
      sesso:        'Maschio',
      nascita:      '7 febbraio 1993',
      luogo:        'Italia',
      allevatore:   'Luca Gori',
      kennel:       'Della Fortezza Vecchia',
      proprietario: '',
      microchip:    '',
      tatuaggio:    '',
      organizzazione: 'FCI',
      stato:        ''
    },

    titoli: [
      { titolo: 'Ch. Italiano',                                          data: '' },
      { titolo: 'Sieger AIAD 1996',                                      data: '1996' },
      { titolo: 'DV Germania \u2014 1\u00b0 Classificato Classe Libera',    data: '' },
      { titolo: 'DV Germania \u2014 1\u00b0 Classificato Classe Campioni',  data: '' }
    ],

    avvenimenti: [
      { data: '', descrizione: 'HD A', luogo: '' }
    ],
    risultati:   [],
    discendenti: [],

    pedigree: {
      soggetto: { nome: 'FireFox', roi: 'DS126736', titoli: 'Ch. IT \u00b7 Sieger AIAD 1996', sesso: 'm' },

      padre: { nome: 'Orson V. Roveline',  roi: '',          titoli: '', sesso: 'm' },
      madre: { nome: 'Daron',              roi: '',          titoli: '', sesso: 'f' },

      nonni: {
        pp: { nome: 'Fela V. Franckenhorst',      roi: '', titoli: '', sesso: 'm' },
        mp: { nome: 'Lema V. Roveline',           roi: '', titoli: '', sesso: 'f' },
        pm: { nome: 'Iron Di Campovalano',        roi: 'DS099535', titoli: '', sesso: 'm' },
        mm: { nome: 'Nat V. Roveline',            roi: '', titoli: '', sesso: 'f' },
      },

      bisnonni: {
        ppp: { nome: 'Vincent V. Franckenhorst',  roi: '', titoli: '', sesso: 'm' },
        mpp: { nome: 'Pompie Dutch Dewi',         roi: '', titoli: '', sesso: 'f' },
        pmp: { nome: 'Baron Bryan V. Harro\u2019s Berg', roi: '', titoli: '', sesso: 'm' },
        mmp: { nome: 'Jenna V. Roveline',         roi: '', titoli: '', sesso: 'f' },
        ppm: { nome: 'Merak Di Campovalano',      roi: '', titoli: '', sesso: 'm' },
        mpm: { nome: 'Tula Dei Nobili Nati',      roi: 'DS080580', titoli: '', sesso: 'f' },
        pmm: { nome: 'Lucifer V. Roveline',       roi: '', titoli: '', sesso: 'm' },
        mmm: { nome: 'Schutz Gina',               roi: '', titoli: '', sesso: 'f' },
      },

      quarta: {
        pppp: { nome: 'Nimrod-Hilo V. Franckenhorst', roi: '', titoli: '', sesso: 'm' },
        mppp: { nome: 'Medina Dei Piani Di Praglia',  roi: '', titoli: '', sesso: 'f' },
        pmpp: { nome: 'Salvador V. Franckenhorst',    roi: '', titoli: '', sesso: 'm' },
        mmpp: { nome: 'Pompie Alcyone',               roi: '', titoli: '', sesso: 'f' },
        ppmp: { nome: 'Baron Cesar V. Rensloo',       roi: '', titoli: '', sesso: 'm' },
        mpmp: { nome: 'Vitesse V. Franckenhorst',     roi: '', titoli: '', sesso: 'f' },
        pmmp: { nome: 'Hertog Alpha V. Le Dobry',     roi: '', titoli: '', sesso: 'm' },
        mmmp: { nome: 'Hattie V. Roveline',           roi: '', titoli: '', sesso: 'f' },
        pppm: { nome: 'Eltaipan Di Campovalano',      roi: '', titoli: '', sesso: 'm' },
        mppm: { nome: 'Zuma Di Campovalano',          roi: 'DS076528', titoli: '', sesso: 'f' },
        pmpm: { nome: 'Quinn Dei Nobili Nati',        roi: '', titoli: '', sesso: 'm' },
        mmpm: { nome: 'Fashion Dei Nobili Nati',      roi: '', titoli: '', sesso: 'f' },
        ppmm: { nome: 'Baron Bryan V. Harro\u2019s Berg', roi: '', titoli: '', sesso: 'm' },
        mpmm: { nome: 'Jenna V. Roveline',            roi: '', titoli: '', sesso: 'f' },
        pmmm: { nome: 'Kazou-Kher V. Roveline',       roi: '', titoli: '', sesso: 'm' },
        mmmm: { nome: 'Jenna V. Roveline',            roi: '', titoli: '', sesso: 'f' },
      },
    },

  }, // fine FireFox

  // ============================================================
  // EDGAR DI CASA FOX
  // ============================================================
  'Edgar Di Casa Fox': {

    anagrafica: {
      nome:         'Edgar Di Casa Fox',
      roi:          'LO0593229',
      razza:        'Dobermann',
      mantello:     'Nero focato',
      sesso:        'Maschio',
      nascita:      '18 ottobre 2004',
      allevatore:   'Allevamento Di Casa Fox',
      proprietario: 'Allevamento Di Casa Fox',
      microchip:    '',
      tatuaggio:    '4SRD5',
      stato:        ''
    },

    titoli: [
      { data: '', titolo: 'Miglior ZTP 1A Ecc. Genova' }
    ],

    avvenimenti: [],
    risultati:   [],
    discendenti: [],

    pedigree: {
      soggetto: { nome: 'Edgar Di Casa Fox', roi: 'LO0593229', titoli: 'ZTP 1A', sesso: 'm' },

      padre: { nome: 'Battista Di Casa Fox', roi: 'LO0366679', titoli: 'CH I \u00b7 CH A.I.A.D. \u00b7 ZTP', sesso: 'm' },
      madre: { nome: 'Everzigova Di Poggiopiano', roi: 'LO02140939', titoli: 'HD-A \u00b7 CH', sesso: 'f' },

      nonni: {
        pp: { nome: 'Victor Di Casa Balestrieri', roi: 'LO9928601',  titoli: 'HD1 \u00b7 CH',  sesso: 'm' },
        mp: { nome: 'Allison',                   roi: 'LO0060631',  titoli: '',              sesso: 'f' },
        pm: { nome: 'Quillanqasim Del Citone',   roi: 'LO01118239', titoli: '',              sesso: 'm' },
        mm: { nome: 'Brigittebardot Di Poggiopiano', roi: 'LO9966802', titoli: '',           sesso: 'f' },
      },

      bisnonni: {
        ppp: { nome: 'Cock Di Casa Balestrieri',     roi: '117189',       titoli: '',                            sesso: 'm' },
        mpp: { nome: 'Elli Di Casa Balestrieri',     roi: 'DS137259',     titoli: '',                            sesso: 'f' },
        pmp: { nome: 'FireFox',                      roi: 'DS126736',     titoli: 'Ch. IT \u00b7 Sieger AIAD 1996', sesso: 'm' },
        mmp: { nome: 'Ladyhawk Del Montaldo',        roi: 'DS177173',     titoli: '',                            sesso: 'f' },
        ppm: { nome: 'Tigr Iz Slavnoi Stai',         roi: 'RKF0031707',   titoli: 'RUS \u00b7 CL CH',             sesso: 'm' },
        mpm: { nome: 'Katrinakristal Del Citone',    roi: 'LO9971414',    titoli: '',                            sesso: 'f' },
        pmm: { nome: 'Alfa Adelante Del Citone',     roi: 'DS144314',     titoli: 'BD \u00b7 DV \u00b7 EUR IDC',   sesso: 'm' },
        mmm: { nome: 'Ghislaineginevra Di Acquanegra', roi: 'DS127799',   titoli: '',                            sesso: 'f' },
      },

      quarta: {
        pppp: { nome: 'Gamon De Campovalano',         roi: '0977477',      titoli: 'CH \u00b7 SCHH1',             sesso: 'm' },
        mppp: { nome: 'Verena',                       roi: 'DS087904',     titoli: '',                            sesso: 'f' },
        pmpp: { nome: 'Gamon Di Campovalano',         roi: 'DS097477',     titoli: 'CH MOND \u00b7 J CH J I',      sesso: 'm' },
        mmpp: { nome: 'Verena',                       roi: 'DS087904',     titoli: '',                            sesso: 'f' },
        ppmp: { nome: 'Orson Van Roveline',           roi: 'DS113204',     titoli: '',                            sesso: 'm' },
        mpmp: { nome: 'Daron',                        roi: 'DS107341',     titoli: '',                            sesso: 'f' },
        pmmp: { nome: 'FireFox',                      roi: 'DS126736',     titoli: 'Ch. IT \u00b7 Sieger AIAD 1996', sesso: 'm' },
        mmmp: { nome: 'Erica Del Montaldo',           roi: 'DS126792',     titoli: '',                            sesso: 'f' },
        pppm: { nome: 'Ugor Di Villa Conte',          roi: 'DS127362',     titoli: 'CH ZTP \u00b7 INT \u00b7 IT \u00b7 LUX', sesso: 'm' },
        mppm: { nome: 'Indira V. D. Rauberhohle',    roi: 'RKF0018800',   titoli: 'CH',                          sesso: 'f' },
        pmpm: { nome: 'Astor Del Citone',             roi: 'DS144318',     titoli: 'ZTP \u00b7 SCHH3 \u00b7 HD0 \u00b7 IPO1', sesso: 'm' },
        mmpm: { nome: 'Crystalconny Del Citone',      roi: 'DS161428',     titoli: '',                            sesso: 'f' },
        ppmm: { nome: 'Prinz Vom Norden Stamm',       roi: 'DS091001',     titoli: 'CH IT \u00b7 CH AIAD \u00b7 INT',  sesso: 'm' },
        mpmm: { nome: 'Tequilamali Del Citone',       roi: 'DS106530',     titoli: 'BDSG \u00b7 DVSG \u00b7 IDCSG',   sesso: 'f' },
        pmmm: { nome: 'Rhesa Vom Franckenhorst',      roi: 'DS097852',     titoli: '',                            sesso: 'm' },
        mmmm: { nome: 'Sierra Vom Franckenhorst',     roi: 'DS120218',     titoli: '',                            sesso: 'f' },
      },
    },

  }, // fine Edgar Di Casa Fox

  // ============================================================
  // RENOIR DI CASA FOX
  // ============================================================
  'Renoir Di Casa Fox': {

    anagrafica: {
      nome:         'Renoir Di Casa Fox',
      roi:          'LO10189982',
      razza:        'Dobermann',
      mantello:     'Nero focato',
      sesso:        'Maschio',
      nascita:      '15 settembre 2010',
      allevatore:   'Allevamento Di Casa Fox',
      proprietario: 'Platone Domenico',
      microchip:    '380260080066668',
      tatuaggio:    '',
      stato:        ''
    },

    titoli: [],

    avvenimenti: [
      { data: '12 gennaio 2012',  tipo: 'Controllo radiografico',      descrizione: 'Displasia anca HD.A (0)',                 luogo: '' },
      { data: '21 marzo 2014',    tipo: 'Deposito campione biologico', descrizione: 'Laboratorio Vetogene - ENCI Servizi',       luogo: '' },
    ],

    risultati: [
      { data: '22 novembre 2014',           tipo: 'Esposizione Internazionale', luogo: 'Latina (LT)',              classe: '', qualifica: '', classifica: '', certificati: '', giudice: '' },
      { data: '5 ottobre 2014',             tipo: 'Raduno Nazionale',           luogo: 'Mondragone (CE)',          classe: '', qualifica: '', classifica: '', certificati: '', giudice: '' },
      { data: '31 maggio - 1 giugno 2014',  tipo: 'Raduno Nazionale',           luogo: 'Montelibretti (RM)',       classe: '', qualifica: '', classifica: '', certificati: '', giudice: '' },
      { data: '27 ottobre 2013',            tipo: 'Raduno Nazionale',           luogo: 'Mondragone (CE)',          classe: '', qualifica: '', classifica: '', certificati: '', giudice: '' },
      { data: '8 - 9 giugno 2013',          tipo: 'Raduno Nazionale',           luogo: 'Montelibretti (RM)',       classe: '', qualifica: '', classifica: '', certificati: '', giudice: '' },
      { data: '5 maggio 2013',              tipo: 'Esposizione Internazionale', luogo: 'Ercolano (NA)',            classe: '', qualifica: '', classifica: '', certificati: '', giudice: '' },
      { data: '4 maggio 2013',              tipo: 'Esposizione Internazionale', luogo: 'Ercolano (NA)',            classe: '', qualifica: '', classifica: '', certificati: '', giudice: '' },
      { data: '27 gennaio 2013',            tipo: 'Raduno Nazionale',           luogo: 'Campiglia Marittima (LI)', classe: '', qualifica: '', classifica: '', certificati: '', giudice: '' },
      { data: '14 - 16 settembre 2012',     tipo: 'Raduno Nazionale',           luogo: 'Tesero (TN)',              classe: '', qualifica: '', classifica: '', certificati: '', giudice: '' },
      { data: '16 giugno 2012',             tipo: 'Esposizione Internazionale', luogo: 'Terni (TR)',               classe: '', qualifica: '', classifica: '', certificati: '', giudice: '' },
      { data: '20 maggio 2012',             tipo: 'Esposizione Nazionale',      luogo: 'Telese Terme (BN)',        classe: '', qualifica: '', classifica: '', certificati: '', giudice: '' },
      { data: '6 maggio 2012',              tipo: 'Esposizione Internazionale', luogo: 'Ercolano (NA)',            classe: '', qualifica: '', classifica: '', certificati: '', giudice: '' },
      { data: '16 ottobre 2011',            tipo: 'Esposizione Internazionale', luogo: 'Campobasso (CB)',          classe: '', qualifica: '', classifica: '', certificati: '', giudice: '' },
      { data: '',                           tipo: 'Prove di utilit\u00e0 e difesa', luogo: '',                   classe: '', qualifica: 'ZTP 1A', classifica: '', certificati: '', giudice: '' },
      { data: '',                           tipo: 'Prove di utilit\u00e0 e difesa', luogo: '',                   classe: '', qualifica: 'ENCI 2', classifica: '', certificati: '', giudice: '' },
    ],

    discendenti: [],

    pedigree: {
      soggetto: { nome: 'Renoir Di Casa Fox', roi: 'LO10189982', titoli: '', sesso: 'm' },

      padre: { nome: 'Hero Di Casa Fox',          roi: 'LO08100422', titoli: 'HD0',                sesso: 'm' },
      madre: { nome: 'Reginaquanita Di Prisconte', roi: 'LO0875964',  titoli: '',                   sesso: 'f' },

      nonni: {
        pp: { nome: 'Zedor Del Nasi',              roi: 'SLRD002747/JR700549', titoli: 'INTCH \u00b7 HD0 \u00b7 PHPV \u00b7 HC0 \u00b7 RD0 \u00b7 P', sesso: 'm' },
        mp: { nome: 'Elisir Di Casa Fox',          roi: 'LO0593231',           titoli: 'HD0',                sesso: 'f' },
        pm: { nome: 'Pathos Delle Querce Nere',    roi: 'LO0547687',           titoli: 'CH',                 sesso: 'm' },
        mm: { nome: 'Ully Di Prisconte',           roi: 'LO0518840',           titoli: 'HDA',                sesso: 'f' },
      },

      bisnonni: {
        ppp: { nome: 'Baron Nike Renewal',         roi: 'JR 75450 DOB',  titoli: 'CH YU \u00b7 CACIB \u00b7 INTCH', sesso: 'm' },
        mpp: { nome: 'Akuna-Matata De Grande Vinko', roi: 'SLR 002731',  titoli: 'CH RUS',             sesso: 'f' },
        pmp: { nome: 'Battista Di Casa Fox',       roi: 'LO0366679',     titoli: 'CH I \u00b7 CH A.I.A.D. \u00b7 ZTP', sesso: 'm' },
        mmp: { nome: 'Everzigova Di Poggiopiano',  roi: 'LO02140939',    titoli: 'HD-A \u00b7 CH',     sesso: 'f' },
        ppm: { nome: 'Urbano Del Diamante Nero',   roi: 'LO0453422',     titoli: 'CH INT \u00b7 ITA',  sesso: 'm' },
        mpm: { nome: 'Ninette Delle Sinvessa',     roi: 'LO02103523',    titoli: '',                   sesso: 'f' },
        pmm: { nome: 'Heartless Di Prisconte',     roi: 'LO0261637',     titoli: 'ZTP \u00b7 HDA',    sesso: 'm' },
        mmm: { nome: 'Enoir Di Prisconte',         roi: 'LO9892496',     titoli: '',                   sesso: 'f' },
      },

      quarta: {
        pppp: { nome: 'Prinz Vom Norden Stamm',    roi: 'DS091001',      titoli: 'CH IT \u00b7 CH AIAD \u00b7 INT',  sesso: 'm' },
        mppp: { nome: 'Borana Sawages',            roi: 'JR 71417 DOB',  titoli: 'CAC \u00b7 CACIB \u00b7 BOB \u00b7 PRM', sesso: 'f' },
        pmpp: { nome: 'Tigr Iz Slavnoi Stai',      roi: 'RKF 0031707',   titoli: 'CH RUS',             sesso: 'm' },
        mmpp: { nome: 'Ak-Yar Andromeda',          roi: 'UKU 004311/97', titoli: 'CH RUS \u00b7 IPO I', sesso: 'f' },
        ppmp: { nome: 'Victor Di Casa Balestrieri', roi: 'LO9928601',    titoli: 'HD1 \u00b7 CH',      sesso: 'm' },
        mpmp: { nome: 'Allison',                   roi: 'LO0060631',     titoli: '',                   sesso: 'f' },
        pmmp: { nome: 'Quillanqasim Del Citone',   roi: 'LO01118239',    titoli: '',                   sesso: 'm' },
        mmmp: { nome: 'Brigittebardot Di Poggiopiano', roi: 'LO9966802', titoli: '',                   sesso: 'f' },
        pppm: { nome: 'Victor Vito Del Rio Bianco', roi: 'LO0168484',    titoli: 'CH \u00b7 HD0',     sesso: 'm' },
        mppm: { nome: 'Indiana Del Diamante Nero', roi: 'LO0052352',     titoli: 'CH',                 sesso: 'f' },
        pmpm: { nome: 'Quillanqasim Del Citone',   roi: 'LO01118239',    titoli: '',                   sesso: 'm' },
        mmpm: { nome: 'Cocacola Della Sinvessa',   roi: 'LO9892667',     titoli: '',                   sesso: 'f' },
        ppmm: { nome: 'Gino Gomez Del Citone',     roi: 'LO9842928',     titoli: 'FH1 \u00b7 CAMPMOND F', sesso: 'm' },
        mpmm: { nome: 'Oregina Di Prisconte',      roi: 'LO0034701',     titoli: 'CH',                 sesso: 'f' },
        pmmm: { nome: 'Graaf Vito V. Neerlands Stam', roi: 'NHSB2033689', titoli: 'CH NED \u00b7 INT', sesso: 'm' },
        mmmm: { nome: 'Rea Di Prisconte',          roi: 'DS165936',      titoli: '',                   sesso: 'f' },
      },
    },

  }, // fine Renoir Di Casa Fox

}; // fine DOG_DB

// Alias per compatibilità con il vecchio sistema (pulsante pedigree)
const PEDIGREE_DATA = Object.fromEntries(
  Object.entries(DOG_DB).map(([k, v]) => [k, v.pedigree])
);
// MODAL PRINCIPALE - struttura a 5 schede

// ============================================================
// MODAL PRINCIPALE — struttura a 5 schede
// ============================================================
const TABS = [
  { id: 'pedigree',     label: 'Pedigree'     },
  { id: 'anagrafica',   label: 'Anagrafica'   },
  { id: 'avvenimenti',  label: 'Avvenimenti'  },
  { id: 'risultati',    label: 'Risultati'    },
  { id: 'titoli',       label: 'Titoli'       },
  { id: 'discendenti',  label: 'Discendenti'  },
];

function createDogModal() {
  if (document.getElementById('dogDataModal')) return;

  const modal = document.createElement('div');
  modal.id = 'dogDataModal';
  modal.className = 'dog-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');

  const tabsHTML = TABS.map(t =>
    `<button class="dm-tab" data-tab="${t.id}">${t.label}</button>`
  ).join('');

  modal.innerHTML = `
    <div class="dm-inner">
      <div class="dm-header">
        <h2 id="dmTitle" class="dm-title">Scheda Cane</h2>
        <button id="dmClose" class="dm-close" aria-label="Chiudi">✕</button>
      </div>
      <div class="dm-tabs" role="tablist">${tabsHTML}</div>
      <div class="dm-body" id="dmBody"></div>
    </div>`;

  document.body.appendChild(modal);

  document.getElementById('dmClose').addEventListener('click', closeDogModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeDogModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeDogModal();
  });

  modal.querySelectorAll('.dm-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      modal.querySelectorAll('.dm-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTab(btn.dataset.tab);
    });
  });
}

let _currentDog = null;

function openDogTab(dogName, tabId) {
  createDogModal();
  _currentDog = DOG_DB[dogName] || null;

  const modal = document.getElementById('dogDataModal');
  document.getElementById('dmTitle').textContent = dogName;

  // Attiva la scheda richiesta
  modal.querySelectorAll('.dm-tab').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tabId);
  });
  renderTab(tabId);

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDogModal() {
  const modal = document.getElementById('dogDataModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function renderTab(tabId) {
  const body = document.getElementById('dmBody');
  if (!body) return;

  if (!_currentDog) {
    body.innerHTML = '<p class="dm-empty">Dati non disponibili per questo soggetto.</p>';
    return;
  }

  switch (tabId) {
    case 'pedigree':    body.innerHTML = buildPedigreeContent(_currentDog.pedigree);  break;
    case 'anagrafica':  body.innerHTML = buildAnagraficaContent(_currentDog.anagrafica); break;
    case 'avvenimenti': body.innerHTML = buildAvvenamentiContent(_currentDog.avvenimenti); break;
    case 'risultati':   body.innerHTML = buildRisultatiContent(_currentDog.risultati); break;
    case 'titoli':      body.innerHTML = buildTitoliContent(_currentDog.titoli);       break;
    case 'discendenti': body.innerHTML = buildDiscendentiContent(_currentDog.discendenti); break;
    default:            body.innerHTML = '<p class="dm-empty">Sezione non disponibile.</p>';
  }
}

// Esponi globalmente
window.openDogTab     = openDogTab;
window.closeDogModal  = closeDogModal;
// Compatibilità vecchio pulsante pedigree
window.openPedigreeModal = (name) => openDogTab(name, 'pedigree');

// ============================================================
// RENDER — ANAGRAFICA
// ============================================================
function buildAnagraficaContent(a) {
  if (!a) return '<p class="dm-empty">Anagrafica non disponibile.</p>';

  const rows = [
    ['Nome',            a.nome],
    ['ROI / LOI',       a.roi],
    ['Razza',           a.razza],
    ['Mantello',        a.mantello],
    ['Sesso',           a.sesso],
    ['Data di nascita', a.nascita],
    ['Allevatore',      a.allevatore],
    ['Proprietario',    a.proprietario],
    ['Microchip',       a.microchip],
    ['Tatuaggio',       a.tatuaggio],
    ['Stato',           a.stato],
  ].filter(r => r[1]).map(r => `
    <tr>
      <td class="ana-label">${r[0]}</td>
      <td class="ana-value">${r[1]}</td>
    </tr>`).join('');

  return `
    <div class="dm-section">
      <table class="ana-table">
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

// ============================================================
// RENDER — AVVENIMENTI
// ============================================================
function buildAvvenamentiContent(list) {
  if (!list || list.length === 0) return '<p class="dm-empty">Nessun avvenimento registrato.</p>';

  const items = list.map(ev => `
    <div class="av-card">
      <span class="av-data">${ev.data}</span>
      <p class="av-desc">${ev.descrizione}</p>
      ${ev.luogo ? `<span class="av-luogo">${ev.luogo}</span>` : ''}
    </div>`).join('');

  return `<div class="dm-section">${items}</div>`;
}

// ============================================================
// RENDER — RISULTATI
// ============================================================
function buildRisultatiContent(list) {
  if (!list || list.length === 0) return '<p class="dm-empty">Nessun risultato registrato.</p>';

  const items = list.map((r, i) => `
    <div class="ris-card">
      <div class="ris-header">
        <span class="ris-num">${i + 1}</span>
        <span class="ris-data">${r.data}</span>
        <span class="ris-sottoprova">${r.sottoprova}</span>
        <span class="ris-qualifica">${r.qualifica}</span>
      </div>
      <div class="ris-body">
        <div class="ris-row"><span class="ris-lbl">Evento</span><span>${r.evento}</span></div>
        <div class="ris-row"><span class="ris-lbl">Località</span><span>${r.localita}</span></div>
        <div class="ris-row"><span class="ris-lbl">Giornata</span><span>${r.giornata}</span></div>
        ${r.classifica ? `<div class="ris-row"><span class="ris-lbl">Classifica</span><span>${r.classifica}</span></div>` : ''}
        <div class="ris-row"><span class="ris-lbl">Giudice</span><span>${r.giudice}</span></div>
      </div>
    </div>`).join('');

  return `<div class="dm-section">${items}</div>`;
}

// ============================================================
// RENDER — TITOLI
// ============================================================
function buildTitoliContent(list) {
  if (!list || list.length === 0) return '<p class="dm-empty">Nessun titolo registrato.</p>';

  const items = list.map(t => {
    // Supporta sia stringhe semplici che oggetti {data, titolo}
    const nome = (typeof t === 'object' && t.titolo) ? t.titolo : t;
    const data = (typeof t === 'object' && t.data)   ? `<span class="titolo-data">${t.data}</span>` : '';
    return `
    <div class="titolo-card">
      <span class="titolo-icon">🏆</span>
      <div>
        <div class="titolo-nome">${nome}</div>
        ${data}
      </div>
    </div>`;
  }).join('');

  return `<div class="dm-section"><div class="titoli-list">${items}</div></div>`;
}

// ============================================================
// RENDER — DISCENDENTI
// ============================================================
function buildDiscendentiContent(list) {
  if (!list || list.length === 0) return '<p class="dm-empty">Nessun discendente registrato.</p>';

  const groups = list.map(g => {
    const figli = g.figli.map(f => {
      const badge = f.sesso === 'm'
        ? '<span class="disc-badge disc-m">♂</span>'
        : '<span class="disc-badge disc-f">♀</span>';
      return `<div class="disc-row">${badge}<span class="disc-roi">${f.roi}</span><span class="disc-nome">${f.nome}</span></div>`;
    }).join('');

    return `
      <div class="disc-group">
        <div class="disc-data">Nati il ${g.data} — ${g.figli.length} soggett${g.figli.length === 1 ? 'o' : 'i'}</div>
        ${figli}
      </div>`;
  }).join('');

  return `<div class="dm-section">${groups}</div>`;
}

// ============================================================
// RENDER — PEDIGREE (albero grafico + tabella)
// ============================================================
function buildPedigreeContent(d) {
  if (!d) return '<p class="dm-empty">Pedigree non disponibile.</p>';
  return buildPedigreeTree(d) + buildMobileTree(d) + buildPedigreeTable(d);
}

// ---- Albero grafico desktop ----
function sexClass(sesso) {
  if (sesso === 'm') return 'pb-male';
  if (sesso === 'f') return 'pb-female';
  return 'pb-unknown';
}

function pedigreeBox(node, extraClass) {
  if (!node) return '<div class="pb pb-unknown pb-empty"><span class="pb-name">—</span></div>';
  const cls    = sexClass(node.sesso);
  const titoli = node.titoli ? `<span class="pb-titoli">${node.titoli}</span>` : '';
  const roi    = node.roi    ? `<span class="pb-roi">${node.roi}</span>` : '';
  return `
    <div class="pb ${cls} ${extraClass || ''}">
      <span class="pb-name">${node.nome}</span>
      ${roi}
      ${titoli}
    </div>`;
}

function buildPedigreeTree(d) {
  const q = d.quarta   || {};
  const b = d.bisnonni || {};
  const n = d.nonni    || {};

  return `
  <div class="pedigree-scroll-wrap">
    <div class="pedigree-grid">
      <div class="pg-col pg-col-1">
        <div class="pg-cell pg-cell-subject">${pedigreeBox(d.soggetto, 'pb-subject')}</div>
      </div>
      <div class="pg-col pg-col-2">
        <div class="pg-cell pg-cell-top">${pedigreeBox(d.padre, 'pb-gen2')}</div>
        <div class="pg-cell pg-cell-bottom">${pedigreeBox(d.madre, 'pb-gen2')}</div>
      </div>
      <div class="pg-col pg-col-3">
        <div class="pg-cell">${pedigreeBox(n.pp, 'pb-gen3')}</div>
        <div class="pg-cell">${pedigreeBox(n.mp, 'pb-gen3')}</div>
        <div class="pg-cell">${pedigreeBox(n.pm, 'pb-gen3')}</div>
        <div class="pg-cell">${pedigreeBox(n.mm, 'pb-gen3')}</div>
      </div>
      <div class="pg-col pg-col-4">
        <div class="pg-cell">${pedigreeBox(b.ppp, 'pb-gen4')}</div>
        <div class="pg-cell">${pedigreeBox(b.mpp, 'pb-gen4')}</div>
        <div class="pg-cell">${pedigreeBox(b.pmp, 'pb-gen4')}</div>
        <div class="pg-cell">${pedigreeBox(b.mmp, 'pb-gen4')}</div>
        <div class="pg-cell">${pedigreeBox(b.ppm, 'pb-gen4')}</div>
        <div class="pg-cell">${pedigreeBox(b.mpm, 'pb-gen4')}</div>
        <div class="pg-cell">${pedigreeBox(b.pmm, 'pb-gen4')}</div>
        <div class="pg-cell">${pedigreeBox(b.mmm, 'pb-gen4')}</div>
      </div>
      <div class="pg-col pg-col-5">
        <div class="pg-cell">${pedigreeBox(q.pppp, 'pb-gen5')}</div>
        <div class="pg-cell">${pedigreeBox(q.mppp, 'pb-gen5')}</div>
        <div class="pg-cell">${pedigreeBox(q.pmpp, 'pb-gen5')}</div>
        <div class="pg-cell">${pedigreeBox(q.mmpp, 'pb-gen5')}</div>
        <div class="pg-cell">${pedigreeBox(q.ppmp, 'pb-gen5')}</div>
        <div class="pg-cell">${pedigreeBox(q.mpmp, 'pb-gen5')}</div>
        <div class="pg-cell">${pedigreeBox(q.pmmp, 'pb-gen5')}</div>
        <div class="pg-cell">${pedigreeBox(q.mmmp, 'pb-gen5')}</div>
        <div class="pg-cell">${pedigreeBox(q.pppm, 'pb-gen5')}</div>
        <div class="pg-cell">${pedigreeBox(q.mppm, 'pb-gen5')}</div>
        <div class="pg-cell">${pedigreeBox(q.pmpm, 'pb-gen5')}</div>
        <div class="pg-cell">${pedigreeBox(q.mmpm, 'pb-gen5')}</div>
        <div class="pg-cell">${pedigreeBox(q.ppmm, 'pb-gen5')}</div>
        <div class="pg-cell">${pedigreeBox(q.mpmm, 'pb-gen5')}</div>
        <div class="pg-cell">${pedigreeBox(q.pmmm, 'pb-gen5')}</div>
        <div class="pg-cell">${pedigreeBox(q.mmmm, 'pb-gen5')}</div>
      </div>
    </div>
  </div>
  <div class="pedigree-legend">
    <span class="legend-item"><span class="legend-dot pb-male"></span> Maschio</span>
    <span class="legend-item"><span class="legend-dot pb-female"></span> Femmina</span>
    <span class="legend-item"><span class="legend-dot pb-unknown"></span> N/D</span>
  </div>`;
}

// ---- Albero mobile (blocchi espandibili) ----
function mobileBox(node, label) {
  if (!node) return '';
  const cls    = node.sesso === 'm' ? 'pb-male' : node.sesso === 'f' ? 'pb-female' : 'pb-unknown';
  const titoli = node.titoli ? `<span class="pb-titoli">${node.titoli}</span>` : '';
  const roi    = node.roi    ? `<span class="pb-roi">${node.roi}</span>` : '';
  return `<div class="pb-mobile ${cls}">
    <span class="pb-label">${label}</span>
    <span class="pb-name">${node.nome}</span>
    ${roi}${titoli}
  </div>`;
}

function buildMobileTree(d) {
  const n = d.nonni    || {};
  const b = d.bisnonni || {};
  const q = d.quarta   || {};

  return `
  <div class="pedigree-mobile-tree">
    <details class="pedigree-gen-block" open>
      <summary class="pedigree-gen-summary">♂/♀ Genitori</summary>
      <div class="pedigree-gen-content">
        ${mobileBox(d.padre, 'Padre')}
        ${mobileBox(d.madre, 'Madre')}
      </div>
    </details>
    <details class="pedigree-gen-block">
      <summary class="pedigree-gen-summary">Nonni</summary>
      <div class="pedigree-gen-content">
        ${mobileBox(n.pp, 'Padre del Padre')}
        ${mobileBox(n.mp, 'Madre del Padre')}
        ${mobileBox(n.pm, 'Padre della Madre')}
        ${mobileBox(n.mm, 'Madre della Madre')}
      </div>
    </details>
    <details class="pedigree-gen-block">
      <summary class="pedigree-gen-summary">Bisnonni</summary>
      <div class="pedigree-gen-content">
        ${mobileBox(b.ppp, 'P.P. del Padre')}
        ${mobileBox(b.mpp, 'M.P. del Padre')}
        ${mobileBox(b.pmp, 'P.M. del Padre')}
        ${mobileBox(b.mmp, 'M.M. del Padre')}
        ${mobileBox(b.ppm, 'P.P. della Madre')}
        ${mobileBox(b.mpm, 'M.P. della Madre')}
        ${mobileBox(b.pmm, 'P.M. della Madre')}
        ${mobileBox(b.mmm, 'M.M. della Madre')}
      </div>
    </details>
    <details class="pedigree-gen-block">
      <summary class="pedigree-gen-summary">Quarta Generazione</summary>
      <div class="pedigree-gen-content">
        ${mobileBox(q.pppp, 'P.P.P. del Padre')}
        ${mobileBox(q.mppp, 'M.P.P. del Padre')}
        ${mobileBox(q.pmpp, 'P.M.P. del Padre')}
        ${mobileBox(q.mmpp, 'M.M.P. del Padre')}
        ${mobileBox(q.ppmp, 'P.P.M. del Padre')}
        ${mobileBox(q.mpmp, 'M.P.M. del Padre')}
        ${mobileBox(q.pmmp, 'P.M.M. del Padre')}
        ${mobileBox(q.mmmp, 'M.M.M. del Padre')}
        ${mobileBox(q.pppm, 'P.P.P. della Madre')}
        ${mobileBox(q.mppm, 'M.P.P. della Madre')}
        ${mobileBox(q.pmpm, 'P.M.P. della Madre')}
        ${mobileBox(q.mmpm, 'M.M.P. della Madre')}
        ${mobileBox(q.ppmm, 'P.P.M. della Madre')}
        ${mobileBox(q.mpmm, 'M.P.M. della Madre')}
        ${mobileBox(q.pmmm, 'P.M.M. della Madre')}
        ${mobileBox(q.mmmm, 'M.M.M. della Madre')}
      </div>
    </details>
  </div>`;
}

// ---- Tabella testuale pedigree ----
function buildPedigreeTable(d) {
  const n = d.nonni    || {};
  const b = d.bisnonni || {};
  const q = d.quarta   || {};

  function row(label, node) {
    if (!node) return '';
    const titoli = node.titoli ? ` <em>${node.titoli}</em>` : '';
    const roi    = node.roi    ? ` <span class="pt-roi">${node.roi}</span>` : '';
    return `<tr>
      <td class="pt-label">${label}</td>
      <td class="pt-name">${node.nome}${roi}${titoli}</td>
    </tr>`;
  }

  return `
  <details class="pedigree-table-details">
    <summary class="pedigree-table-summary">📋 Versione testuale completa</summary>
    <div class="pedigree-table-wrap">
      <table class="pedigree-table">
        <tbody>
          <tr class="pt-section"><td colspan="2">Genitori</td></tr>
          ${row('Padre', d.padre)}
          ${row('Madre', d.madre)}
          <tr class="pt-section"><td colspan="2">Nonni</td></tr>
          ${row('Padre del Padre', n.pp)}
          ${row('Madre del Padre', n.mp)}
          ${row('Padre della Madre', n.pm)}
          ${row('Madre della Madre', n.mm)}
          <tr class="pt-section"><td colspan="2">Bisnonni</td></tr>
          ${row('P.P. del Padre', b.ppp)}
          ${row('M.P. del Padre', b.mpp)}
          ${row('P.M. del Padre', b.pmp)}
          ${row('M.M. del Padre', b.mmp)}
          ${row('P.P. della Madre', b.ppm)}
          ${row('M.P. della Madre', b.mpm)}
          ${row('P.M. della Madre', b.pmm)}
          ${row('M.M. della Madre', b.mmm)}
          <tr class="pt-section"><td colspan="2">Quarta Generazione</td></tr>
          ${row('P.P.P. del Padre', q.pppp)}
          ${row('M.P.P. del Padre', q.mppp)}
          ${row('P.M.P. del Padre', q.pmpp)}
          ${row('M.M.P. del Padre', q.mmpp)}
          ${row('P.P.M. del Padre', q.ppmp)}
          ${row('M.P.M. del Padre', q.mpmp)}
          ${row('P.M.M. del Padre', q.pmmp)}
          ${row('M.M.M. del Padre', q.mmmp)}
          ${row('P.P.P. della Madre', q.pppm)}
          ${row('M.P.P. della Madre', q.mppm)}
          ${row('P.M.P. della Madre', q.pmpm)}
          ${row('M.M.P. della Madre', q.mmpm)}
          ${row('P.P.M. della Madre', q.ppmm)}
          ${row('M.P.M. della Madre', q.mpmm)}
          ${row('P.M.M. della Madre', q.pmmm)}
          ${row('M.M.M. della Madre', q.mmmm)}
        </tbody>
      </table>
    </div>
  </details>`;
}