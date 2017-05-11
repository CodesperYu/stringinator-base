const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(_.filter(nums, num => num % 2 !== 0)).toEqual([1, 3, 5, 7]);
  });

  it('filters an object to only numeric values', () => {
    const obj = {
      first: 1, 
      second: 2, 
      third: '5', 
      fouth: 'Im a number', 
      fith: 'shhh'
    };
    expect(_.filter(obj, value => typeof value === 'number')).toEqual([1, 2]);
  });
});