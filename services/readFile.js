const fs = require('fs');
const path = require('path');

const readFileName = (filePath) => {
  const promiseFunc = (resolve, reject) => {
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
