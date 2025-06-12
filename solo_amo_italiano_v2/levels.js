const levels = [
  // Abschnitt 1: Begrüßungen
  [
    { frage: "Wie heißt 'Hallo' auf Italienisch?", antworten: ["ciao", "grazie", "buongiorno", "arrivederci"], korrekt: "ciao" }
  ],
  [
    { frage: "Wie sagt man 'Guten Tag'?", antworten: ["buonanotte", "buongiorno", "ciao", "per favore"], korrekt: "buongiorno" }
  ],
  [
    { frage: "Konjugiere 'essere' (du bist)", antworten: ["sei", "sono", "è", "siamo"], korrekt: "sei" }
  ],
  [
    { frage: "Wie sagt man 'Auf Wiedersehen'?", antworten: ["Arrivederci", "Ciao", "Grazie", "Per favore"], korrekt: "Arrivederci" }
  ],
  [
    { frage: "Finde das passende Verb: Io ___ italiano.", antworten: ["parlo", "parli", "parla", "parliamo"], korrekt: "parlo" }
  ],
  [
    { frage: "Satz vervollständigen: ___, come stai?", antworten: ["Ciao", "Per favore", "Grazie", "Arrivederci"], korrekt: "Ciao" }
  ],
  [
    { frage: "Was bedeutet 'Mi chiamo'?", antworten: ["Ich heiße", "Ich bin", "Ich habe", "Ich wohne"], korrekt: "Ich heiße" }
  ],
  [
    { frage: "Wie sagt man 'Gute Nacht'?", antworten: ["Buonanotte", "Ciao", "Arrivederci", "Per favore"], korrekt: "Buonanotte" }
  ],
  [
    { frage: "Wie sagt man 'Schön, dich kennenzulernen'?", antworten: ["Piacere di conoscerti", "Per favore", "Buongiorno", "Ciao"], korrekt: "Piacere di conoscerti" }
  ],
  [
    { frage: "Wie antwortet man höflich auf ein Dankeschön?", antworten: ["Prego", "Ciao", "Piacere", "Bene"], korrekt: "Prego" }
  ],
  // Abschnitt 2: Familie
  [
    { frage: "Wie heißt 'Mutter'?", antworten: ["madre", "padre", "sorella", "nonna"], korrekt: "madre" }
  ],
  [
    { frage: "Wie heißt 'Bruder'?", antworten: ["fratello", "zio", "cugino", "amico"], korrekt: "fratello" }
  ],
  [
    { frage: "Konjugiere 'avere' (sie haben)", antworten: ["hanno", "ha", "abbiamo", "avete"], korrekt: "hanno" }
  ],
  [
    { frage: "Lui ___ un fratello.", antworten: ["ha", "hai", "ho", "hanno"], korrekt: "ha" }
  ],
  [
    { frage: "Wer ist 'cugino'?", antworten: ["Cousin", "Vater", "Bruder", "Onkel"], korrekt: "Cousin" }
  ],
  [
    { frage: "Wie sagt man 'Onkel'?", antworten: ["zio", "padre", "cugino", "fratello"], korrekt: "zio" }
  ],
  [
    { frage: "Wie sagt man 'Tante'?", antworten: ["zia", "nonna", "madre", "sorella"], korrekt: "zia" }
  ],
  [
    { frage: "Wie sagt man 'Schwester'?", antworten: ["sorella", "madre", "zia", "figlia"], korrekt: "sorella" }
  ],
  [
    { frage: "Wie heißt 'Vater'?", antworten: ["padre", "nonno", "zio", "fratello"], korrekt: "padre" }
  ],
  [
    { frage: "Was heißt 'Familie' auf Italienisch?", antworten: ["famiglia", "parenti", "casa", "gruppo"], korrekt: "famiglia" }
  ],
  // Abschnitt 3: Alltag
  [
    { frage: "Wie sagt man 'Haus'?", antworten: ["casa", "strada", "scuola", "chiesa"], korrekt: "casa" }
  ],
  [
    { frage: "Was heißt 'Arbeit'?", antworten: ["lavoro", "tempo", "giorno", "città"], korrekt: "lavoro" }
  ],
  [
    { frage: "Wie sagt man 'Ich gehe zur Arbeit'?", antworten: ["Vado al lavoro", "Sono al lavoro", "Faccio lavoro", "Ho lavoro"], korrekt: "Vado al lavoro" }
  ],
  [
    { frage: "Konjugiere 'andare' (wir gehen)", antworten: ["andiamo", "andate", "vanno", "va"], korrekt: "andiamo" }
  ],
  [
    { frage: "Wie sagt man 'Ich wohne in Rom'?", antworten: ["Abito a Roma", "Vivo a Roma", "Sono in Roma", "Stare Roma"], korrekt: "Abito a Roma" }
  ],
  [
    { frage: "Wie sagt man 'Ich esse Pizza'?", antworten: ["Mangio la pizza", "Ho pizza", "Prendo pizza", "Pizza mangia"], korrekt: "Mangio la pizza" }
  ],
  [
    { frage: "Wie sagt man 'Ich trinke Wasser'?", antworten: ["Bevo acqua", "Prendo acqua", "Acqua bevo", "Bevi acqua"], korrekt: "Bevo acqua" }
  ],
  [
    { frage: "Wie heißt 'Schule'?", antworten: ["scuola", "strada", "classe", "lezione"], korrekt: "scuola" }
  ],
  [
    { frage: "Wie sagt man 'Ich lerne Italienisch'?", antworten: ["Studio italiano", "Imparo italiano", "Parlo italiano", "Vado italiano"], korrekt: "Studio italiano" }
  ],
  [
    { frage: "Wie sagt man 'Ich lese ein Buch'?", antworten: ["Leggo un libro", "Ho un libro", "Studio un libro", "Libro leggere"], korrekt: "Leggo un libro" }
  ]
];