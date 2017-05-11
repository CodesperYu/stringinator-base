const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [1, 2, 3, 1, 2, 4];
    expect(_.uniq(nums)).toEqual([1,2,3,4]);
  });
});