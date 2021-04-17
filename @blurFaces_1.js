function blurFaces(img) {
  let row = img.length;
  let col = img[0].length;
  let arr = JSON.parse(JSON.stringify(img));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let sum = 0;
      let num = 0;
      for (let k = i - 1; k <= i + 1; k++) {
        for (let l = j - 1; l <= j + 1; l++) {
          //check if ifself or not
          if (k === i && l === j) continue;
          //check if beyond the boundry
          if (k < 0 || l < 0 || k > row - 1 || l > col - 1) continue;
          sum += img[k][l];
          num++;
        }
      }
      arr[i][j] = sum / num;
    }
  }
  return arr;
}
img = [
  [1, 4],
  [7, 10],
];

console.log(blurFaces(img));
