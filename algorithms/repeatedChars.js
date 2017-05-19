const repeatedChars = (string) => {
  return !(new Set([...string]).size === string.length);
}

let string = 'hello';
console.log(repeatedChars(string));