const dataApproximation = [
  {
    title:
      "Aproksymacja (np. metodą najmniejszych kwadratów) to sposób znajdowania funkcji, która **najlepiej dopasowuje się** do danych punktów, ale niekoniecznie przez nie przechodzi.",
  },
  {
    title: "",
    textBlock: "",
    question: "Do czego służy aproksymacja?",
    explanation:
      "Aproksymacja służy do znalezienia funkcji (np. liniowej, kwadratowej), która **przybliża** dane punkty w optymalny sposób. Jest używana, gdy dane są przybliżone, z błędami pomiarowymi, i nie oczekujemy idealnego dopasowania.",
  },
  {
    title: "",
    textBlock: "",
    question: "Kiedy się ją stosuje?",
    explanation:
      "1. Gdy dane są przybliżone lub zawierają szum (np. dane pomiarowe)\n2. Gdy chcemy znaleźć trend lub ogólną zależność\n3. Gdy interpolacja nie ma sensu — np. punkty nie leżą dokładnie na jednej funkcji",
  },

  {
    title: "Jak działa metoda najmniejszych kwadratów?",
    textBlock: "",
    question: "Jak działa aproksymacja metodą najmniejszych kwadratów?",
    explanation:
      "1. Zakładamy postać funkcji (np. liniowa: y = ax + b)\n2. Obliczamy współczynniki a, b tak, aby suma kwadratów odległości między punktami a wykresem była minimalna\n3. Dla funkcji wyższych stopni budujemy układ równań normalnych i rozwiązujemy go",
  },

  {
    title: "Przykład",
    textBlock: "",
    question: "Jak wygląda przykład aproksymacji?",
    explanation:
      "Dane punkty: (1,2), (2,3), (3,5)\n1. Zakładamy postać liniową: y = ax + b\n2. Obliczamy współczynniki a, b metodą najmniejszych kwadratów\n3. Otrzymujemy przybliżoną prostą, która dobrze dopasowuje się do punktów, ale przez nie niekoniecznie przechodzi",
  },

  {
    title: "Zalety metody",
    textBlock: "",
    question: "Jakie są zalety aproksymacji?",
    explanation:
      "1. Dobrze działa przy danych z błędami\n2. Można dopasować funkcje różnego stopnia (liniowe, kwadratowe, sześcienne...)\n3. Powszechnie stosowana w nauce, inżynierii i statystyce",
  },
  {
    title: "Wady metody",
    textBlock: "",
    question: "Jakie są wady aproksymacji?",
    explanation:
      "1. Nie przechodzi przez dane punkty — to tylko przybliżenie\n2. Dla zbyt skomplikowanych funkcji może dojść do przefitowania (overfittingu)\n3. Wymaga rozwiązania układu równań (dla wyższych stopni)",
  },
];

export default dataApproximation;
