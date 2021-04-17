function sumUpNumbers(str) {
  return str
    .split(/\+\_|[.?!-]|\D/)
    .map(Number)
    .reduce((a, b) => a + b);
}
console.log(sumUpNumbers('42+47+81,.1?ghdkg-_'));
