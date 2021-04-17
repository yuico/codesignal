function extractEachKth(input, k) {
  ans = [];
  input.map((p, i) => i % k != k - 1 && ans.push(p));
  return ans;
}
input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(extractEachKth(input, 3));

/* 
For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
extractEachKth(inputArray, k) = [1, 2, 4, 5, 7, 8, 10]
*/
