function depositProfit(d, r, t) {
  i = 0;
  do {
    ans = d * Math.pow(1 + 0.01 * r, i);
    i++;
  } while (ans < t);
  return i - 1;
}

/*
For deposit = 100, rate = 20, and threshold = 170, the output should be
depositProfit(deposit, rate, threshold) = 3.
*/

console.log(depositProfit(100, 20, 170));
