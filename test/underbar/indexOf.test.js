const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    const nums = [1,2,3,4];
    expect(_.indexOf(nums, 1)).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    const nums = [1, 2, 3];
    expect(_.indexOf(nums, 3)).toBe(2);
  });

  it('returns -1 for a missing value', () => {
    const nums = [1,2,3,4];
    expect(_.indexOf(nums, 5)).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    const nums = [1,2, 2, 3,4];
    expect(_.indexOf(nums, 2)).toBe(1);
  });

  it('starts searching at the given offset', () => {
    const nums = [1, 2, 2, 3,4];
    expect(_.indexOf(nums, 2, 2)).toBe(2);
  });
});