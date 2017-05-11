const _ = require('../../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    const nums = [1, 2, 3, 4, 5]
    expect(_.first(nums)).toBe(1);
  });

  it('returns the first 2 elements of an array', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(_.first(nums, 2)).toEqual([1,2]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(_.first(nums, 7)).toEqual([1,2,3,4,5]);
  });
});