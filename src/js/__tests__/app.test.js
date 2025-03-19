import ErrorRepository from '../app';

const myErrors = new ErrorRepository(
  { code: 100, description: 'Internal Server Error' },
  { code: 404, description: 'Invalid request' },
);

test('translate known error correctly', () => {
  const recieved = myErrors.translate(100);
  const result = 'Internal Server Error';

  expect(recieved).toBe(result);
});

test('return error message', () => {
  expect(() => {
    const recieved = myErrors.translate(700);
  }).toThrow('Unknown error');
});