import { Numero, Suma, Resta } from '../src/interpretador';

// Test: 5 + 3 = 8
test('Suma simple', () => {
  const expresion = new Suma(new Numero(5), new Numero(3));
  expect(expresion.interpretar()).toBe(8);
});

// Test: 10 - 4 = 6
test('Resta simple', () => {
  const expresion = new Resta(new Numero(10), new Numero(4));
  expect(expresion.interpretar()).toBe(6);
});

// Test: (10 - 2) + 1 = 9
test('Expresión combinada', () => {
  const resta = new Resta(new Numero(10), new Numero(2));
  const suma = new Suma(resta, new Numero(1));
  expect(suma.interpretar()).toBe(9);
});
