function blurFaces(img) {
  let row = img.length;
  let col = img[0].length;
  let arr = JSON.parse(JSON.stringify(img));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let tem = 0;
      let num = 0;
      if (i - 1 >= 0 && j - 1 >= 0) {
        tem += img[i - 1][j - 1];
        num++;
      }
      if (i - 1 >= 0 && j + 1 < col) {
        tem += img[i - 1][j + 1];
        num++;
      }
      if (i + 1 < row && j - 1 >= 0) {
        tem += img[i + 1][j - 1];
        num++;
      }
      if (i - 1 >= 0) {
        tem += img[i - 1][j];
        num++;
      }
      if (j - 1 >= 0) {
        tem += img[i][j - 1];
        num++;
      }
      if (i + 1 < row && j + 1 < col) {
        tem += img[i + 1][j + 1];
        num++;
      }
      if (i + 1 < row) {
        tem += img[i + 1][j];
        num++;
      }
      if (j + 1 < col) {
        tem += img[i][j + 1];
        num++;
      }
      arr[i][j] = tem / num;
    }
  }
  return arr;
}
img = [
  [1, 4],
  [7, 10],
];

console.log(blurFaces(img));
