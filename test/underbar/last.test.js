const _ = require('../../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    const nums = [1, 2, 3];
    expect(_.last(nums)).toBe(3);
  });

  it('returns the last 2 elements of an array', () => {
    const nums = [1, 2, 3, 4];
    expect(_.last(nums, 2)).toEqual([3, 4]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const nums = [1, 2, 3];
    expect(_.last(nums, 4)).toEqual([1,2,3]);
  });
});