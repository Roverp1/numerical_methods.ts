// Вхідні точки для побудови полінома Лагранжа
const X = [0, 1, 2, 4]; // X-координати
const Y = [1, 3, 2, 3]; // відповідні Y-координати (тобто Y = f(X))

// Основна функція для побудови інтерполяційного полінома Лагранжа
function lagrangePolynomial(X: number[], Y: number[]): number[] {
  const n = X.length; // кількість вхідних точок
  let result = [0, 0, 0]; // підсумковий поліном у вигляді масиву коефіцієнтів: [c, b, a] → a*X² + b*X + c

  // Проходимо по кожній точці (Xi, Yi), щоб побудувати базисний поліном Li(X)
  for (let i = 0; i < n; i++) {
    let li = [1]; // Початковий базисний поліном Li(X) = 1

    // Побудова Li(X) = добуток по j ≠ i [(X - Xj) / (Xi - Xj)]
    for (let j = 0; j < n; j++) {
      if (j !== i) {
        const denom = X[i] - X[j]; // знаменник (Xi - Xj), сталий для кожного множника
        // множимо поточний поліном на (X - Xj) / (Xi - Xj)
        // представляється як масив коефіцієнтів: [ -Xj/denom, 1/denom ] → (-Xj + X)/denom
        li = multiplyPolynomials(li, [-X[j] / denom, 1 / denom]);
      }
    }

    // Домножуємо базисний поліном на відповідне значення Yi (тобто: Yi * Li(X))
    li = li.map((coef) => coef * Y[i]);

    // Додаємо результат до загального полінома
    result = addPolynomials(result, li);
  }

  // Повертаємо масив коефіцієнтів: [c, b, a] для a*X² + b*X + c
  return result;
}

// Функція для додавання двох поліномів, представлених у вигляді масивів коефіцієнтів
function addPolynomials(a: number[], b: number[]): number[] {
  const length = Math.max(a.length, b.length); // довжина майбутнього масиву — максимум з обох
  const res = Array(length).fill(0); // ініціалізуємо нульовий масив потрібної довжини

  for (let i = 0; i < length; i++) {
    // додаємо коефіцієнти з однаковими степенями
    res[i] = (a[i] || 0) + (b[i] || 0);
  }

  return res; // повертаємо результат додавання
}

// Функція для множення двох поліномів (у вигляді масивів коефіцієнтів)
function multiplyPolynomials(a: number[], b: number[]): number[] {
  const res = Array(a.length + b.length - 1).fill(0); // результат буде мати довжину a.len + b.len - 1

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      // для кожної пари коефіцієнтів множимо й додаємо у відповідну позицію
      res[i + j] += a[i] * b[j];
    }
  }

  return res; // повертаємо результат множення
}

// Обчислення коефіцієнтів полінома для заданих точок
const coeffs = lagrangePolynomial(X, Y);

// Вивід результату у вигляді: P(X) = aX^2 + bX + c
console.log(
  `P(X) = ${coeffs
    .map((c, i) => `${c.toFixed(2)}X^${i}`) // округлюємо до 2 знаків після коми
    .reverse() // щоб починалося з X^2
    .join(" + ")}` // з'єднуємо у вигляді одного рядка
);

// Запуск файлу:
// node --loader ts-node/esm src/shared/lib/maX_lagrange_interpolation/maX_lagrange_interpolation.ts
