const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [1,2,3,4,5,6];
    expect(_.reject(nums, num => num % 2 !== 0)).toEqual([2,4,6]);
  });

  it('rejects null values from an object', () => {
    const hackR = {
      codingSkill: 'increase',
      newFriends: 'increase',
      foodIntake: 'decrease',
      socialLife: null
    }
    expect(_.reject(hackR, value => value === null)).toEqual
    (['increase', 'increase', 'decrease']);
  });
});