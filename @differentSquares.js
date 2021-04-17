function differentSquares(m) {
  arr = [];
  str = '';
  for (let i = 0; i < m.length - 1; i++) {
    for (let j = 0; j < m[i].length - 1; j++) {
      str =
        m[i][j] + '' + m[i][j + 1] + '' + m[i + 1][j] + '' + m[i + 1][j + 1];
      arr.push(str);
    }
  }
  console.log(arr);
  return [...new Set(arr)].length;
}
console.log(
  differentSquares([
    [1, 2, 1],
    [2, 2, 2],
    [2, 2, 2],
    [1, 2, 3],
    [2, 2, 1],
  ])
);
