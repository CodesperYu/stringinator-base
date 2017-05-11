const _ = require('./underbar');

const first = function(str, n) {
  return n === undefined ? str.slice(0,1) : str.slice(0, n)
};

const last = function(str, n) {
  return n === undefined ? str.slice(str.length -1) : str.slice(str.length - n)
};

const removeChar = function(str, target) {
  return _.reject(str.split(''), letter => letter === target).join('');
};

const hasChar = function(str, target) {
  return _.some(str.split(''), letter => letter === target);
};

const isOnlyDigits = function(str) {
  return !isNaN(str);
};

const filterToOnlyDigits = function(str) {
  let filterNum = _.filter(str.split(''), num => num.trim() != '');
  return _.filter(filterNum, num => isOnlyDigits(num)).join('');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  let result = [];
  _.each(obj, function(element, key, array) {
    result.push(truncateString(element, maxLength))
  });
  return result;
};

const countChars = function(str) {
  return _.reduce(str.split(''), function(counts, letter) {
    counts[letter] = counts[letter] + 1 || 1;
    return counts;
  }, {});
};

const dedup = function(str) {
  return _.uniq(str.split('')).join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};