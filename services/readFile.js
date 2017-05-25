const fs = require('fs');
const path = require('path');

const readFileName = (fileName) => {

  const promiseFunc = (resolve, reject) => {
    const filePath = path.join(__dirname, '../algorithms/input.txt');
    console.log('+_+_+_+_+_+', filePath);
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw new Error(err);
      resolve(data);
    });
  }

  return new Promise(promiseFunc)
}

module.exports = {
  readFileName,
};
