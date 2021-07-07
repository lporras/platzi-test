import { isTrue, isFalse, isNull, isUndefined } from '../true';

describe('Probar resultados nulos', () => {
  test('Es Null', () => {
    expect(isNull()).toBeNull();
  });
});
describe('Probar resultados verdaderos', () => {
  test('Es Verdadero', () => {
    expect(isTrue()).toBeTruthy();
  });
});
describe('Probar resultados falsos', () => {
  test('Es Falso', () => {
    expect(isFalse()).toBeFalsy();
  });
});
describe('Probar resultados undefined', () => {
  test('Es undefined', () => {
    expect(isUndefined()).toBeUndefined();
  });
});
describe('probar resultados no verdaderos', () => {
  test('Falso o Verdadero', () => {
    expect(isFalse()).not.toBeTruthy();
  })
});