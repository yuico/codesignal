function minesweeper(m) {
  let ans = JSON.parse(JSON.stringify(m));
  let cnt, i, j, k, l;
  let row = m.length,
    col = m[0].length;
  for (i = 0; i < row; i++) {
    for (j = 0; j < col; j++) {
      cnt = 0;
      for (k = i - 1; k <= i + 1; k++) {
        for (l = j - 1; l <= j + 1; l++) {
          //check if ifself or not
          if (k === i && l === j) continue;
          //check if beyond the boundry
          if (k < 0 || l < 0 || k > row - 1 || l > col - 1) continue;
          if (m[k][l]) cnt++;
        }
      }
      ans[i][j] = cnt;
      cnt = 0;
    }
  }
  return ans;
}

// if (x == 0 || y == 0 || x > m.length - 1 || y > m[0].length) continue;
minesweeper([
  [true, false],
  [false, false],
]);
