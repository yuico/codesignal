function deleteDigit(num) {
  arr = num.toString().split('').map(Number);
  min = [0, 9];
  arrCopy = JSON.parse(JSON.stringify(arr)).sort((a, b) => b - a);
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      (arr.length == 2 && arr[1] == 0) ||
      JSON.stringify(arr) == JSON.stringify(arrCopy)
    ) {
      min = [arr.length - 1, arr[arr.length - 1]];
      break;
    }
    if (arr[i] < min[1]) min = [i, arr[i]];
  }
  arr.splice(min[0], 1);
  return parseInt(arr.map(String).reduce((a, b) => a + b));
}
console.log(deleteDigit(987654));
