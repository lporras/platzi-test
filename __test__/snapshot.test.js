import { getCharacter } from "../snapshot";
import rick from '../rick.json';
import { expect, test } from "@jest/globals";

describe('Es hora de las instantaneas', () => {
  test('Snapshot', () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });

  test('Siempre fallará la instantanea', () => {
    const user = {
      createdAt: new Date(),
      id: Math.floor(Math.random() * 20),
    };
    expect(user).toMatchSnapshot();
  });
});