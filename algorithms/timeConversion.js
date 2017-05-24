const fs = require('fs');
const path = require('path');

var input_stdin_array = "";
var input_currentline = 0;

fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, data) => {
  if (err) throw new Error(err);
  input_stdin_array = data.split("\n");
  main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    let time = readLine();
    const suffix = time.slice(8);
    let hour = Number(time.slice(0, 2));
    if (suffix === 'PM') {
        if (hour !== 12) {
            hour += 12;
        }
    } else {
        if (hour === 12) {
            hour = 0;
        }
    }
    hour = hour.toString();
    if (hour.length < 2) hour = ('0').concat(hour);
    time = hour.concat(time.slice(2, time.length - 2));
    console.log(time);
}
