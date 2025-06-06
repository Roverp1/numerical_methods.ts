const dataBisection = [
  {
    title:
      "Metoda bisekcji (czyli metoda dzielenia przedziału na pół) to prosty i niezawodny numeryczny sposób znajdowania pierwiastków równania postaci: f(x)=0",
  },
  {
    title: "",
    textBlock: "",
    question: "Do czego służy metoda bisekcji?",
    explanation:
      "Metoda bisekcji służy do znajdowania takiego x, dla którego f(x) = 0 — innymi słowy, do znajdowania pierwiastka równania. Jest szczególnie przydatna, gdy nie da się rozwiązać równania analitycznie (ręcznie).",
  },
  {
    title: "",
    textBlock: "",
    question: "Kiedy się ją stosuje?",
    explanation:
      "1. Funkcja f(x) jest ciągła na przedziale [a, b]\n2. Wartości funkcji na końcach przedziału mają różne znaki: f(a)⋅f(b) < 0\nTo oznacza, że pierwiastek znajduje się wewnątrz przedziału (zgodnie z twierdzeniem Bolzano).",
  },

  {
    title: "Jak działa metoda?",
    textBlock: "",
    question: "Jak stosować metodę bisekcji?",
    explanation:
      "1. Bierzemy przedział [a, b], na którego końcach f(a) i f(b) mają różne znaki\n2. Obliczamy środek: c = (a + b) / 2\n3. Jeśli f(a)⋅f(c) < 0 → pierwiastek jest w [a, c]; w przeciwnym razie w [c, b]\n4. Powtarzamy kroki, aż przedział stanie się wystarczająco mały (osiągnięta zostaje żądana dokładność)",
  },

  {
    title: "Przykład",
    textBlock: "",
    question: "Jak wygląda przykład metody bisekcji?",
    explanation:
      "Znaleźć pierwiastek równania f(x) = x^2 - 4\n1. Wybieramy przedział [1, 3]: f(1) = -3, f(3) = 5 → można zastosować metodę\n2. Środek: c = (1 + 3) / 2 = 2, f(2) = 0 → pierwiastek znaleziony dokładnie",
  },

  {
    title: "Zalety metody",
    textBlock: "",
    question: "Jakie są zalety metody bisekcji?",
    explanation:
      "1. Prosta i niezawodna metoda\n2. Gwarantowana zbieżność przy spełnieniu warunków\n3. Nie wymaga pochodnej funkcji",
  },
  {
    title: "Wady metody",
    textBlock: "",
    question: "Jakie są wady metody bisekcji?",
    explanation:
      "1. Stosunkowo wolna w porównaniu do innych metod (np. metody Newtona)\n2. Wymaga, aby f(a) i f(b) miały różne znaki\n3. Działa tylko przy jednym pierwiastku w przedziale",
  },
];

export default dataBisection;
