/* function arrayMaxConsecutiveSum(arr, k) {
  sum = 0;
  ans = [];
  if(k == 1) return arr.reduce((a,b)=> Math.max(a,b));
  if(k >= arr.length) return arr.reduce((a,b) => a + b, 0); 
  for (let i = 0; i < arr.length - k + 1; i++) { 
    for (let j = 0; j < k; j++) sum += arr[i + j];
    ans.push(sum);
    sum = 0;
  }
  return ans.reduce((a, b) => Math.max(a, b));
} */
/* function arrayMaxConsecutiveSum(arr, k) {
  sum = 0;
  maxNum = 0;
  if (k == 1) return arr.reduce((a, b) => Math.max(a, b));
  if (k >= arr.length) return arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < arr.length - k + 1; i++) {
    for (let j = 0; j < k; j++) sum += arr[i + j];
    if (maxNum < sum) maxNum = sum;
    sum = 0;
  }
  return maxNum;
} */

function arrayMaxConsecutiveSum(arr, k) {
  let res = 0;
  for (let i = 0; i < k; i++) res += arr[i];
  let sum = res;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    res = Math.max(res, sum);
  }
  return res;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));

console.log(arrayMaxConsecutiveSum([1, 3, 2, 4], 3));
// console.log(arrayMaxConsecutiveSum([24, 684, 606, 685, 286, 696, 385, 190, 530, 702, 290, 788, 452, 34, 246, 244, 127, 695, 49, 141, 828, 634, 235, 635, 391, 635, 171, 244, 754, 756, 620, 783, 66, 99, 380, 420, 814, 825, 911, 514, 54, 932, 240, 533, 770, 809, 791, 818, 895, 83, 675, 271, 851, 273, 133, 360, 807, 524, 378, 899, 964, 367, 913, 183, 8, 429, 130, 608, 373, 538, 930, 453, 275, 6, 285, 582, 12, 355, 473, 382, 207, 114, 884, 505, 984, 82, 649, 259, 568, 76, 96, 496, 12, 173, 494, 835, 811, 175, 739, 799], 61399));
/* 
Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
arrayMaxConsecutiveSum(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:

2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8.


inputArray: [1, 3, 2, 4]
k: 3
ans = 9


inputArray: [24, 684, 606, 685, 286, 696, 385, 190, 530, 702, 290, 788, 452, 34, 246, 244, 127, 695, 49, 141, 828, 634, 235, 635, 391, 635, 171, 244, 754, 756, 620, 783, 66, 99, 380, 420, 814, 825, 911, 514, 54, 932, 240, 533, 770, 809, 791, 818, 895, 83, 675, 271, 851, 273, 133, 360, 807, 524, 378, 899, 964, 367, 913, 183, 8, 429, 130, 608, 373, 538, 930, 453, 275, 6, 285, 582, 12, 355, 473, 382, 207, 114, 884, 505, 984, 82, 649, 259, 568, 76, 96, 496, 12, 173, 494, 835, 811, 175, 739, 799]
k: 61399
*/
