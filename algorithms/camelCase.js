const fs = require('fs');
const path = require('path');

module.exports = camelCase = (function() {
  return data => {
    let arr = data.split('').reduce((acc, val, ind) => {
        if (ind === 0) return [val];
        if (val.toUpperCase() === val) {
            acc.push(val);
            return acc;
        }
        acc[acc.length -1] += val;
        return acc
    }, ['']);
    console.log(arr.length);
  }
})()

fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, data) => {
  if (err) throw new Error(err);
  camelCase(data);
});

let [a,b,c] = [1,2,3];
console.log(a,b,c, camelCase, module.exports.toString());
