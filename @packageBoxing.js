function packageBoxing(pkg, boxes) {
  pkg.sort((a, b) => a - b);
  // arr = boxes.map((d, i, a) => a[i].sort((a, b) => a - b));
  arr = boxes.map((d) => d.sort((a, b) => a - b));
  obj = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] >= pkg[0] && arr[i][1] >= pkg[1] && arr[i][2] >= pkg[2]) {
      obj.push({ idx: i, vol: arr[i][0] * arr[i][1] * arr[i][2] });
      //  obj[i] = {};
      //  obj[i].idx = i;
      //  obj[i].vol = arr[i][0] * arr[i][1] * arr[i][2];
    }
  }
  obj.sort((a, b) => a.vol - b.vol);
  if (obj.length === 0) return -1;
  return obj[0].idx;
}

pkg = [4, 2, 5];
boxes = [
  [4, 3, 5],
  [5, 2, 5],
];

console.log(packageBoxing(pkg, boxes));
