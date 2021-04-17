function differentSymbolsNaive(s) {
  arr = s.split('').sort();
  cnt = 0;
  arr.map((p, i, arr) => p != arr[i + 1] && cnt++);
  return cnt;
}

console.log(differentSymbolsNaive('cabca', 3));
//3
console.log(differentSymbolsNaive('rrbxzqza', 3));
//6

/* 
For s = "cabca", the output should be
differentSymbolsNaive(s) = 3.

There are 3 different characters a, b and c.
*/
