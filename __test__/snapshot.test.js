import { getCharacter } from "../snapshot";
import rick from '../rick.json';
import { expect, test } from "@jest/globals";

describe('Es hora de las instantaneas', () => {
  test('Snapshot', () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });

  xtest('Siempre fallará la instantanea', () => {
    const user = {
      createdAt: new Date(),
      id: Math.floor(Math.random() * 20),
    };
    expect(user).toMatchSnapshot();
  });

  test('Tenemos una excepcion dentro del código', () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      name: 'Luis Porras'
    };
    expect(user).toMatchSnapshot({
      id: expect.any(Number)
    });
  });
});