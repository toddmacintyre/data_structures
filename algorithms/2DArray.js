// const fs = require('fs');
// const path = require('path');
const readFileName = require('../services/readFile').readFileName;

var input_stdin_array = "";
var input_currentline = 0;

// fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, data) => {
//   if (err) throw new Error(err);
//   input_stdin_array = data.split('\n');
//   main();
// });

// console.log('------', readFileName);

readFileName('input.txt')
  .then(result => {
    input_stdin_array = result.split('\n');
    main();
  })
  .catch(err => {
    console.log('err', err);
  });

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    let max = -Infinity;
    const hourGlassSum = (i, j) => {
        let total = 0;
        for (let x = i; x <= i + 2; x++) {
            if (x === i || x === i + 2) total += arr[x].slice(j, j + 3).reduce((acc, x) => {return acc + x}, 0)
            if (x === i + 1) total += arr[x][j + 1];
        }
        return total
    }
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr[i].length - 2; j++) {
            max = Math.max(max, hourGlassSum(i,j));
        }
    }
    console.log(max);
}
