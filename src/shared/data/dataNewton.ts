const dataNewton = [
  {
    title:
      "Metoda Newtona (lub metoda stycznych) to szybka i skuteczna metoda numeryczna do znajdowania pierwiastków równań typu f(x) = 0, jeśli znamy pochodną funkcji.",
  },
  {
    title: "",
    textBlock: "",
    question: "Do czego służy metoda Newtona?",
    explanation:
      "Metoda Newtona służy do znajdowania wartości x, dla której f(x) = 0, czyli pierwiastka równania. Jest przydatna, gdy mamy pochodną funkcji i chcemy uzyskać szybkie przybliżenie rozwiązania.",
  },
  {
    title: "",
    textBlock: "",
    question: "Kiedy się ją stosuje?",
    explanation:
      "1. Gdy funkcja f(x) jest różniczkowalna w pobliżu pierwiastka\n2. Gdy pochodna f'(x) ≠ 0 w okolicy szukanego rozwiązania\n3. Gdy mamy dobre przybliżenie początkowe x₀ (blisko pierwiastka)",
  },

  {
    title: "Jak działa metoda?",
    textBlock: "",
    question: "Jak stosować metodę Newtona?",
    explanation:
      "1. Wybieramy punkt początkowy x₀\n2. Iteracyjnie obliczamy: xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ)\n3. Powtarzamy dopóki różnica między kolejnymi xₙ jest mniejsza niż zadana dokładność",
  },

  {
    title: "Przykład",
    textBlock: "",
    question: "Jak wygląda przykład metody Newtona?",
    explanation:
      "Znaleźć pierwiastek równania f(x) = x³ - x - 2\n1. Wybieramy x₀ = 1.5\n2. Obliczamy kolejne przybliżenia:\n   f(x₀) = -0.125, f'(x₀) = 5.75\n   x₁ = 1.5 - (-0.125)/5.75 ≈ 1.5217\n3. Powtarzamy aż do osiągnięcia dokładności",
  },

  {
    title: "Zalety metody",
    textBlock: "",
    question: "Jakie są zalety metody Newtona?",
    explanation:
      "1. Bardzo szybka zbieżność (jeśli startujemy blisko pierwiastka)\n2. Wysoka dokładność przy małej liczbie iteracji\n3. Działa dobrze przy jednej zmiennej i znanej pochodnej",
  },
  {
    title: "Wady metody",
    textBlock: "",
    question: "Jakie są wady metody Newtona?",
    explanation:
      "1. Wymaga znajomości pochodnej funkcji\n2. Może nie zbiegać się, jeśli x₀ jest daleko od pierwiastka\n3. Może zawieść, jeśli f'(x) ≈ 0 (dzielenie przez prawie zero)",
  },
];

export default dataNewton;
