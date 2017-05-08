const {arrayGenerator} = require('../services');

const bigSort = (unsorted) => {
  // console.log(unsorted);
  let flag = true;
  let curr = 0;
  let string = '';
  while (flag === true) {
    flag = false;
    for (let i = curr; i < unsorted.length - 1; i++) {
      if (parseInt(unsorted[i]) > parseInt(unsorted[i + 1])) {
        flag = true;
        curr = i - 1;
        if (curr < 0) curr = 0;
        [unsorted[i], unsorted[i + 1]] = [unsorted[i + 1], unsorted[i]];
        if (string.length) string = string.slice(0, string.length - (unsorted[i - 1].length + 1));
        break;
      }
      string += unsorted[i] + '\n';
    }
  }
  return string + unsorted[unsorted.length - 1] + '\n';
}

let array = arrayGenerator(500, 2000);
let before = new Date;
// array = [ '9', '1', '10', '2', '6' ];
let result = bigSort(array);
console.log(result);
console.log(`time taken (milliseconds): ${new Date - before}`);

