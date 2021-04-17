function boxBlur(img) {
  //[[~~((img.map(p=>p.reduce((a,b)=>a+b)).reduce((a,b)=>a+b) / 9))]];
  let sum,
    ans = [],
    line = [];
  for (let x = 0; x + 3 <= img.length; x++) {
    for (let y = 0; y + 3 <= img[0].length; y++) {
      sum = 0;
      for (let i = x; i < 3 + x; i++) {
        for (let j = y; j < 3 + y; j++) {
          sum += img[i][j];
        }
      }
      line.push(~~(sum / 9));
    }
    ans[x] = line;
    line = [];
  }
  return ans;
}

// console.log(
//   boxBlur([
//     [1, 1, 1],
//     [1, 7, 1],
//     [1, 1, 1],
//   ])
// );

console.log(
  boxBlur([
    [7, 4, 0, 1],
    [5, 6, 2, 2],
    [6, 10, 7, 8],
    [1, 4, 2, 0],
  ])
);
/* boxBlur(image) = [[5, 4], 
                    [4, 4]] 
 There are four 3 × 3 squares in the input image, 
 so there should be four integers in the blurred output. 
 To get the first value: 
 (7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5                   
*/
