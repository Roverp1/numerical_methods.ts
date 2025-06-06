const dataLagrange = [
  {
    title:
      "Interpolacja Lagrange’a to metoda znajdowania wielomianu, który przechodzi dokładnie przez dane punkty (x₀, y₀), (x₁, y₁), ..., (xₙ, yₙ).",
  },
  {
    title: "",
    textBlock: "",
    question: "Do czego służy interpolacja Lagrange’a?",
    explanation:
      "Służy do znalezienia funkcji (wielomianu), która dokładnie przechodzi przez zadany zbiór punktów. Jest używana w analizie danych, aproksymacji i grafice komputerowej.",
  },
  {
    title: "",
    textBlock: "",
    question: "Kiedy się ją stosuje?",
    explanation:
      "1. Gdy mamy skończony zbiór punktów (x, y)\n2. Gdy chcemy uzyskać funkcję, która dokładnie przechodzi przez te punkty\n3. Gdy nie mamy wzoru funkcji, ale mamy jej wartości w określonych miejscach",
  },

  {
    title: "Jak działa metoda?",
    textBlock: "",
    question: "Jak stosować interpolację Lagrange’a?",
    explanation:
      "1. Dla każdego punktu tworzony jest tzw. wielomian podstawowy Lₖ(x), który przyjmuje wartość 1 w xₖ i 0 w pozostałych punktach\n2. Cała funkcja to suma: P(x) = Σ [yₖ * Lₖ(x)] dla k = 0 do n\n3. Wielomiany Lₖ(x) mają postać: Lₖ(x) = Π[(x - xⱼ) / (xₖ - xⱼ)], gdzie j ≠ k",
  },

  {
    title: "Przykład",
    textBlock: "",
    question: "Jak wygląda przykład interpolacji Lagrange’a?",
    explanation:
      "Dane punkty: (1, 2), (2, 3), (4, 1)\n1. Tworzymy L₀(x), L₁(x), L₂(x) według wzoru\n2. Obliczamy P(x) = 2·L₀(x) + 3·L₁(x) + 1·L₂(x)\n3. Otrzymujemy wielomian, który przechodzi przez wszystkie trzy punkty",
  },

  {
    title: "Zalety metody",
    textBlock: "",
    question: "Jakie są zalety interpolacji Lagrange’a?",
    explanation:
      "1. Nie wymaga obliczania pochodnych\n2. Zapewnia dokładne przejście przez dane punkty\n3. Łatwa do zaimplementowania dla małej liczby punktów",
  },
  {
    title: "Wady metody",
    textBlock: "",
    question: "Jakie są wady interpolacji Lagrange’a?",
    explanation:
      "1. Dla dużej liczby punktów wielomian może być niestabilny (oscylacje)\n2. Trudna do aktualizacji — dodanie nowego punktu wymaga przeliczenia całego wielomianu\n3. Może być obliczeniowo kosztowna przy wielu punktach",
  },
];

export default dataLagrange;
