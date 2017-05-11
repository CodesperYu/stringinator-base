const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toBe(null);
  });

  it('returns the number if given a number', () => {
    expect(_.identity(1)).toBe(1);
  });

  it('returns the same array if given an array', () => {
    expect(_.identity([1,2,3])).toEqual([1,2,3]);
  });

  it('returns the same object if given an object', () => {
    const obj = {
    apples: {color: 'red', type: 'pome'},
    watermelon: {color: 'green', type: 'berry'},
    oranges: {color: 'orange', type: 'citrus'}
    };
    expect(_.identity(obj)).toEqual(obj);
  });
});