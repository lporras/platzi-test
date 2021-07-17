import { getDataFromAPi } from "../promise";

describe('Probar Async/Await', () => {
  test('Realizar una petición a una api', async () => {
    const api = 'https://rickandmortyapi.com/api/character/';
    const getRick = 'https://rickandmortyapi.com/api/character/1';

    await getDataFromAPi(api).then(data => {
      expect(data.results.length).toBeGreaterThan(0);
    });
    await getDataFromAPi(getRick).then(data => {
      expect(data.name).toEqual('Rick Sanchez');
    });
  });
});