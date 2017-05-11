const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    const arr = [1,2,3];
    expect(_.isArrayLike(arr)).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const arr = {
      length: 10,
      hello: 'hi'
    }
    expect(_.isArrayLike(arr)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const obj = {
    apples: {color: 'red', type: 'pome'},
    watermelon: {color: 'green', type: 'berry'},
    oranges: {color: 'orange', type: 'citrus'}
    };
    expect(_.isArrayLike(obj)).toBe(false);
  });
  
});
