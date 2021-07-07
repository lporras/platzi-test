import { sumar, multiplicar, restar, dividir } from '../maths.js';

describe('Calculos matemáticos', () => {
  test('Prueba de sumas', () => {
    expect(sumar(1, 1)).toBe(2);
  });
  test('Multiplicar', () => {
    expect(multiplicar(2, 2)).toBe(4);
  });
  test('Resta', () => {
    expect(restar(3, 2)).toBe(1);
  });
  test('Dividir', () => {
    expect(dividir(10, 2)).toBe(5);
  });
});