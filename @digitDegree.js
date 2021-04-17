function digitDegree(n) {
  if (n < 10) return 0;
  (arr = []), (cnt = 0);
  while (n > 9) {
    arr = n.toString().split('').map(Number);
    n = arr.reduce((a, b) => a + b, 0);
    cnt++;
  }
  return cnt;
}

console.log(digitDegree(777773));
