const palindromeChecker = (string) => {
  return string.slice(0, ~~(string.length / 2)).toLowerCase() === string.slice(Math.ceil(string.length / 2)).split('').reverse().join('').toLowerCase();
};

const result = palindromeChecker('Abba');
console.log(result);

module.exports = palindromeChecker;