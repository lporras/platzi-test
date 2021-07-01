import { sumar, multiplicar, restar, dividir } from '../maths.js';

describe('Calculos matemáticos', () => {
  test('Prueba de sumas', () => {
    expect(sumar(1, 1)).toBe(2);
  });
});