function electionsWinners(v, k) {
  maxNum = Math.max(...v);
  ans = 0;
  if ((k == 0) & (maxNum == Math.min(...v))) return 0;
  if ((k == 0) & (v.filter((p) => maxNum == p).length > 1)) return 0;
  v.map((p) => p + k > maxNum && ans++);
  return ans == 0 ? 1 : ans;
}
