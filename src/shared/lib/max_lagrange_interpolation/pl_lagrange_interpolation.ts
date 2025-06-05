// Wartości wejściowe do zbudowania wielomianu interpolacyjnego Lagrange'a
const x = [0, 1, 2, 7]; // współrzędne X
const y = [1, 3, 2, 5]; // odpowiadające wartości Y, czyli y = f(x)

// Główna funkcja budująca wielomian interpolacyjny Lagrange'a
function budujWielomianLagrange(x: number[], y: number[]): number[] {
  const liczbaPunktow = x.length; // liczba punktów wejściowych
  let wspolczynnikiWielomianu = [0, 0, 0]; // wynikowy wielomian jako tablica współczynników: [c, b, a] => a*x² + b*x + c

  // Iterujemy przez każdy punkt (xi, yi), aby zbudować bazowy wielomian Li(x)
  for (let indeksPunktu = 0; indeksPunktu < liczbaPunktow; indeksPunktu++) {
    let bazowyWielomian = [1]; // początkowy Li(x) = 1

    // Budujemy Li(x) = iloczyn (x - xj)/(xi - xj) dla wszystkich j ≠ i
    for (let innyPunkt = 0; innyPunkt < liczbaPunktow; innyPunkt++) {
      if (innyPunkt !== indeksPunktu) {
        const mianownik = x[indeksPunktu] - x[innyPunkt]; // xi - xj
        // mnożymy przez (x - xj)/(xi - xj) reprezentowane jako [-xj / mianownik, 1 / mianownik]
        bazowyWielomian = mnozWielomiany(bazowyWielomian, [
          -x[innyPunkt] / mianownik,
          1 / mianownik,
        ]);
      }
    }

    // console.log("bazowyWielomian ", bazowyWielomian);

    // Mnożymy bazowy wielomian przez odpowiadającą wartość y
    bazowyWielomian = bazowyWielomian.map((wspolczynnik) => wspolczynnik * y[indeksPunktu]);

    // Dodajemy ten składnik do całkowitego wielomianu
    wspolczynnikiWielomianu = dodajWielomiany(wspolczynnikiWielomianu, bazowyWielomian);
  }

  // Zwracamy tablicę współczynników końcowego wielomianu
  console.log("wspolczynnikiWielomianu ", wspolczynnikiWielomianu);
  return wspolczynnikiWielomianu;
}

// Funkcja dodająca dwa wielomiany reprezentowane jako tablice współczynników
function dodajWielomiany(pierwszy: number[], drugi: number[]): number[] {
  const dlugosc = Math.max(pierwszy.length, drugi.length); // najdłuższy z dwóch
  const wynik = Array(dlugosc).fill(0); // inicjalizacja zerami

  for (let i = 0; i < dlugosc; i++) {
    wynik[i] = (pierwszy[i] || 0) + (drugi[i] || 0); // dodawanie współczynników tego samego stopnia
  }

  // console.log("wynik ", wynik);
  return wynik;
}

// Funkcja mnożąca dwa wielomiany reprezentowane jako tablice współczynników
function mnozWielomiany(pierwszy: number[], drugi: number[]): number[] {
  const wynik = Array(pierwszy.length + drugi.length - 1).fill(0); // wynikowa długość

  for (let i = 0; i < pierwszy.length; i++) {
    for (let j = 0; j < drugi.length; j++) {
      wynik[i + j] += pierwszy[i] * drugi[j]; // mnożenie i dodanie do odpowiedniego stopnia
    }
  }

  return wynik;
}

// Obliczanie końcowego wielomianu
const wspolczynniki = budujWielomianLagrange(x, y);

// Wyświetlenie wielomianu w postaci: P(x) = ax² + bx + c
console.log(
  `P(x) = ${wspolczynniki
    .map((wspolczynnik, stopien) => `${wspolczynnik.toFixed(2)}x^${stopien}`) // zaokrąglamy
    .reverse() // zaczynamy od najwyższej potęgi
    .join(" + ")}` // łączymy w jedną linię
);

// Запуск файлу:
// node --loader ts-node/esm src/shared/lib/max_lagrange_interpolation/pl_lagrange_interpolation.ts

// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////

// // Wartości wejściowe do zbudowania wielomianu interpolacyjnego Lagrange'a
// const x = [0, 1, 2]; // współrzędne X
// const y = [1, 3, 2]; // odpowiadające wartości Y, czyli y = f(x)

// // Główna funkcja budująca wielomian interpolacyjny Lagrange'a
// function budujWielomianLagrange(x: number[], y: number[]): number[] {
//   const liczbaPunktow = x.length; // liczba punktów wejściowych
//   let wspolczynnikiWielomianu = [0, 0, 0]; // wynikowy wielomian jako tablica współczynników: [c, b, a] => a*x² + b*x + c

//   // Iterujemy przez każdy punkt (xi, yi), aby zbudować bazowy wielomian Li(x)
//   for (let indeksPunktu = 0; indeksPunktu < liczbaPunktow; indeksPunktu++) {
//     let bazowyWielomian = [1]; // początkowy Li(x) = 1

//     // Budujemy Li(x) = iloczyn (x - xj)/(xi - xj) dla wszystkich j ≠ i
//     for (let innyPunkt = 0; innyPunkt < liczbaPunktow; innyPunkt++) {
//       if (innyPunkt !== indeksPunktu) {
//         const mianownik = x[indeksPunktu] - x[innyPunkt]; // xi - xj
//         // mnożymy przez (x - xj)/(xi - xj) reprezentowane jako [-xj / mianownik, 1 / mianownik]
//         bazowyWielomian = mnozWielomiany(bazowyWielomian, [
//           -x[innyPunkt] / mianownik,
//           1 / mianownik,
//         ]);
//       }
//     }

//     // Mnożymy bazowy wielomian przez odpowiadającą wartość y
//     bazowyWielomian = bazowyWielomian.map((wspolczynnik) => wspolczynnik * y[indeksPunktu]);

//     // Dodajemy ten składnik do całkowitego wielomianu
//     wspolczynnikiWielomianu = dodajWielomiany(wspolczynnikiWielomianu, bazowyWielomian);
//   }

//   // Zwracamy tablicę współczynników końcowego wielomianu
//   return wspolczynnikiWielomianu;
// }

// // Funkcja dodająca dwa wielomiany reprezentowane jako tablice współczynników
// function dodajWielomiany(pierwszy: number[], drugi: number[]): number[] {
//   const dlugosc = Math.max(pierwszy.length, drugi.length); // najdłuższy z dwóch
//   const wynik = Array(dlugosc).fill(0); // inicjalizacja zerami

//   for (let i = 0; i < dlugosc; i++) {
//     wynik[i] = (pierwszy[i] || 0) + (drugi[i] || 0); // dodawanie współczynników tego samego stopnia
//   }

//   return wynik;
// }

// // Funkcja mnożąca dwa wielomiany reprezentowane jako tablice współczynników
// function mnozWielomiany(pierwszy: number[], drugi: number[]): number[] {
//   const wynik = Array(pierwszy.length + drugi.length - 1).fill(0); // wynikowa długość

//   for (let i = 0; i < pierwszy.length; i++) {
//     for (let j = 0; j < drugi.length; j++) {
//       wynik[i + j] += pierwszy[i] * drugi[j]; // mnożenie i dodanie do odpowiedniego stopnia
//     }
//   }

//   return wynik;
// }

// // Obliczanie końcowego wielomianu
// const wspolczynniki = budujWielomianLagrange(x, y);

// // Wyświetlenie wielomianu w postaci: P(x) = ax² + bx + c
// console.log(
//   `P(x) = ${wspolczynniki
//     .map((wspolczynnik, stopien) => `${wspolczynnik.toFixed(2)}x^${stopien}`) // zaokrąglamy
//     .reverse() // zaczynamy od najwyższej potęgi
//     .join(" + ")}` // łączymy w jedną linię
// );
