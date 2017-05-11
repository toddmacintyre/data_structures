// process.stdin.resume();
process.stdin.setEncoding('ascii');

const fs = require('fs');
const path = require('path');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

// process.stdin.on('data', function (data) {
//   input_stdin += data;
// });

// process.on('SIGINT', function () {
//   input_stdin_array = input_stdin.split("\n");
//   main();
//   process.exit(0);
// });

const dest = path.join(__dirname, 'input.txt');

fs.readFile(dest, 'utf8', (err, data) => {
  if (err) throw err;
  input_stdin_array = data.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
  const n_temp = readLine().split(' ');
  const [n, k] = [parseInt(n_temp[0]), parseInt(n_temp[1])];
  let x = readLine().split(' ')
    .map(Number)
    .sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
  const span = k * 2;
  let p1 = x[0];
  let p2;
  let result = 0;
  let placed = false;
  let prev = x[0];
  x = new Set(x);

  x.forEach(val => {
    if (placed === false && val > p1 + k) {
      p2 = prev + k;
      result++;
      placed = true;
    }
    if (val > p2) {
      placed = false;
      p1 = val;
      p2 = p1 + span;
    }
    prev = val;
  });

  if (placed === false) result++;
  console.log(result);
}
