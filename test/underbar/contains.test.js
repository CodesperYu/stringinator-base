const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const nums = [1, 2, 3];
    expect(_.contains(nums, 2)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const nums = [1, 2, 4, 5];
    expect(_.contains(nums, 3)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const traits = {
      dog: 'loyal',
      cat: 'cute',
      fish: 'wet'
    }
    expect(_.contains(traits, 'loyal')).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const traits = {
      dog: 'loyal',
      cat: 'cute',
      fish: 'wet'
    }
    expect(_.contains(traits, 'fat')).toBe(false);
  });

});