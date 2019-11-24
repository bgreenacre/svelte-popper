import exclude from './../exclude';

describe('exclude', () => {
test('should filter out unwanted properties', () => {
  const source = { prop1: 'Test Value', prop2: 'Filter this one out' };
  const filtered = exclude(source, [ 'prop2' ]);

  expect(filtered).toHaveProperty('prop1');
  expect(filtered).not.toHaveProperty('prop2');
});
});
