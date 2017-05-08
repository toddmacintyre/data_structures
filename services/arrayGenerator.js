const arrayGenerator = (n, maxIntSize = 1000000000) => {
  let array = [];
  while (array.length < n) {
    let random = ~~(Math.random() * (maxIntSize + 1));
    array.push(random.toString());
  }
  return array;
}

module.exports = arrayGenerator;
