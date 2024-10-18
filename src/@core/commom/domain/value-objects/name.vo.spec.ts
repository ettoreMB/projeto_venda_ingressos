import { Name } from './name.vo';

test('deve criar um nome valido', () => {
  const name = new Name('Nome');
  expect(name.value).toBe('Nome');
});
