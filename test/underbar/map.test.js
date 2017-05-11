const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const nums = [1, 2, 3, 4];
    expect(_.map(nums, num => num * num)).toEqual([1,4,9,16]);
  });
});