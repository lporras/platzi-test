import { getDataFromAPi } from "../promise";

describe('Probando promesas', () => {
  test('Realizando una petición a una api', (done) => {
    const api = 'https://rickandmortyapi.com/api/character/';
    getDataFromAPi(api).then(data => {
      expect(data.results.length).toBeGreaterThan(0);
      done();
    })
  });

  test('Resuelve un Hola!', () => {
    expect(Promise.resolve('Hola!')).resolves.toBe('Hola!');
  });

  test('Rechaza con un error', () => {
    expect(Promise.reject('Error')).rejects.toBe('Error');
  });
});