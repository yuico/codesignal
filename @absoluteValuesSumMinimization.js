function absoluteValuesSumMinimization(a) {
  len = a.length;
  return len < 3 ? a[0] : len % 2 != 0 ? a[~~(len / 2)] : a[len / 2 - 1];
}

console.log(absoluteValuesSumMinimization([1, 1, 3, 4]));

/*For a = [2, 4, 7], the output should be absoluteValuesSumMinimization(a) = 4.

for x = 2, the value will be abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7.
for x = 4, the value will be abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5.
for x = 7, the value will be abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8.
The lowest possible value is when x = 4, so the answer is 4.*/

/*
Input:
a: [1, 1, 3, 4]
Expected Output:
1
Click the "Run Tests" button to see output and console logs. 
 */
