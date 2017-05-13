const fs = require('fs');
const path = require('path');
const fileName = path.join(__dirname, './input.txt');

let fileData;
let lineNumber = 0;

const readLine = () => {
  return fileData[lineNumber++];
}

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) throw new Error(err);
  fileData = data.split('\n');
  main();
});

const main = () => {
    arr = readLine()
        .split(' ')
        .map(Number)
        .sort((a, b) => a < b ? -1 : a > b ? 1 : 0);

    let result = arr.reduce((acc, val, ind) => {
        if (ind !== 0) acc[1] += val;
        if (ind !== arr.length - 1) acc[0] += val;
        return acc;
    }, [0, 0]);
    console.log(...result);
};
