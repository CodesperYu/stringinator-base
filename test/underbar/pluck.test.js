const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    obj = {
      person1: {name: 'Jasper', age: 24},
      person2: {name: 'Kenya', age: 32},
      person3: {name: 'Frank', age: 25}
    }
    expect(_.pluck(obj, 'age')).toEqual([24, 32, 25]);
  });

});