describe('Comparadores comunes', () => {
  const user = {
    name: 'Luis',
    lastname: 'Porras'
  };

  const user2 = {
    name: 'Luis2',
    lastname: 'Porras2'
  };

  test('igualdad de elementos', () => {
    expect(user).toEqual(user2);
  });
  test('no son exactamente iguales', () => {
    expect(user).not.toEqual(user2);
  });
});