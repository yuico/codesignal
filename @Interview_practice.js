/* 
Given an integer n and an array a of length n, your task is to apply the following mutation to a:

Array a mutates into a new array b of length n.
For each i from 0 to n - 1, b[i] = a[i - 1] + a[i] + a[i + 1].
If some element in the sum a[i - 1] + a[i] + a[i + 1] does not exist, it should be set to 0. For example, b[0] should be equal to 0 + a[0] + a[1].
Example

For n = 5 and a = [4, 0, 1, -2, 3], the output should be mutateTheArray(n, a) = [4, 5, -1, 2, 1].

b[0] = 0 + a[0] + a[1] = 0 + 4 + 0 = 4
b[1] = a[0] + a[1] + a[2] = 4 + 0 + 1 = 5
b[2] = a[1] + a[2] + a[3] = 0 + 1 + (-2) = -1
b[3] = a[2] + a[3] + a[4] = 1 + (-2) + 3 = 2
b[4] = a[3] + a[4] + 0 = (-2) + 3 + 0 = 1
So, the resulting array after the mutation will be [4, 5, -1, 2, 1].

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

An integer representing the length of the given array.

Guaranteed constraints:
1 ≤ n ≤ 103.

[input] array.integer a

An array of integers that needs to be mutated.

Guaranteed constraints:
a.length = n,
-103 ≤ a[i] ≤ 103.

[output] array.integer

The resulting array after the mutation
*/

/* function mutateTheArray(n, a) {
  let result = [];
  let sum = 0;
  for(let i=0; i<n; i++){
    if(i==0) sum = a[i]+a[i+1]
    else if(i==n-1) sum = a[i-1]+a[i]
    else sum = a[i-1]+a[i]+a[i+1]
    result.push(sum)
  }
  return result;
}
n = 5
a = [4, 0, 1, -2, 3]
console.log(mutateTheArray(n, a)) */

/* 
b[0] = 0 + a[0] + a[1] = 0 + 4 + 0 = 4
b[1] = a[0] + a[1] + a[2] = 4 + 0 + 1 = 5
b[2] = a[1] + a[2] + a[3] = 0 + 1 + (-2) = -1
b[3] = a[2] + a[3] + a[4] = 1 + (-2) + 3 = 2
b[4] = a[3] + a[4] + 0 = (-2) + 3 + 0 = 1
mutateTheArray(n, a) = [4, 5, -1, 2, 1]
 */

function alternatingSort(a){
  let end=a.length-1;
  for(let i=0; i<end; i++){
    return a.slice(-1).pop()
  }
  
}
a = [1, 3, 5, 6, 4, 2]
b = [1, 2, 3, 4, 5, 6]
console.log()
/* Example

For a = [1, 3, 5, 6, 4, 2], the output should be alternatingSort(a) = true.

The new array b will look like [1, 2, 3, 4, 5, 6], which is in strictly ascending order, so the answer is true.

For a = [1, 4, 5, 6, 3], the output should be alternatingSort(a) = false.

The new array b will look like [1, 3, 4, 6, 5], which is not in strictly ascending order, so the answer is false. 
*/

function sortMatrixByOccurrences(m){

}
/* 
m = [[ 1, 4, -2],
     [-2, 3,  4],
     [ 3, 1,  3]]

Number 1 occurs 2 times;
Number -2 occurs 2 times;
Number 3 occurs 3 times;
Number 4 occurs 2 times.
Because numbers 1, -2, and 4 occur the same number of times, we sort them by their values in ascending order. Number 3 occurs the most numbers of times, so it goes after all other numbers. Finally, after sorting we get the following array: [-2, -2, 1, 1, 4, 4, 3, 3, 3]

sortMatrixByOccurrences(m) = [[3,  3,  4],
                              [3,  4,  1],
                              [1, -2, -2]]   
*/


function streetLights(n, lights){

}

/* 
[location - radius, location + radius]

Given n and lights, an array of 2-element arrays of the form [location, radius], your task is to find the minimum number of these lights required to light up the whole street. Return -1 if it's not possible to light the whole street with the given set of lights.

For n = 10 and lights = [[0, 5], [1, 3], [5, 4], [8, 3]], the output should be streetLights(n, lights) = 2

For n = 9 and lights = [[5, 3]], the output should be streetLights(n, lights) = -1.

For n = 8 and lights = [[2, 3], [8, 2]], the output should be streetLights(n, lights) = -1
*/