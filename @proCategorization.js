function proCategorization(pros, preferences) {
  tem = [];
  res = [];
  preferences.map((d, i) => d.map((key) => tem.push([[key], [pros[i]]])));
  tem.sort((a, b) => a[0][0].localeCompare(b[0][0]));
  res.push(tem[0]);
  for (let i = 0; i < tem.length - 1; i++) {
    tem[i][0][0] === tem[i + 1][0][0]
      ? res[res.length - 1][1].push(tem[i + 1][1][0])
      : res.push(tem[i + 1]);
  }
  return res;
}
pros = ['Jack', 'Leon', 'Maria'];
preferences = [
  ['Computer repair', 'Handyman', 'House cleaning'],
  ['Computer lessons', 'Computer repair', 'Data recovery service'],
  ['Computer lessons', 'House cleaning'],
];
console.log(proCategorization(pros, preferences));
// [[["Computer lessons"],["Leon","Maria"]],
//  [["Computer repair"],["Jack","Leon"]],
//  [["Data recovery service"],["Leon"]],
//  [["Handyman"],["Jack"]],
//  [["House cleaning"],["Jack","Maria"]]]

// let a = ['a', 1, 'a', 2, '1']; let unique = a.filter( (d,i,arr) => arr.indexOf(d) === index ); // returns ['a', 1, 2, '1']
// array2.map(d => array1.includes(d) ? null : array1.push(d));
// JSON.parse(JSON.stringify(array)); deep copy

// let x = ['1','2','6'];
// let y = ['4', '5','6'];
// let duplicate = [];
// for (let i=0; i<y.length; i++) {
//     let index = x.indexOf(y[i]);
//     if (index > -1) {
//         duplicate.push(x[index]);
//     }
// }
