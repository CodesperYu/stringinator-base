const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const nums = [1, 2, 3 ,4 ,5];
    let count = 0;
    _.each(nums, function(element, index, array) {
      expect(element).toBe(array[index]);
      count++
    });
    expect(count).toBe(5);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const traits = {
      dog: 'loyal',
      cat: 'cute',
      fish: 'wet'
    }
    let count = 0;
    _.each(traits, function(element, index, array) {
      expect(element).toBe(array[index]);
      count++
    });
    expect(count).toBe(3);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const obj = {
    apples: {color: 'red', type: 'pome'},
    watermelon: {color: 'green', type: 'berry'},
    oranges: {color: 'orange', type: 'citrus'}
    };
    let count = 0;
    _.each(obj, function(element, key, array) {
      expect(element).toBe(array[key]);
      count++
    });
    expect(count).toBe(3);
  });
});

