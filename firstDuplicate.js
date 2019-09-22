/* Given an array a that contains only numbers in the range from 1 to a.length, 
find the first duplicate number for which the second occurrence has the minimal index. 
In other words, if there are more than 1 duplicated numbers, return the number 
for which the second occurrence has a smaller index than the second occurrence of the other number does. 
If there are no such elements, return -1.
 */

function firstDuplicate(arr) {
    let obj={}, i=0;
    for(; i<arr.length; i++) {
      if(obj[arr[i]] !== undefined) 
        return arr[i];
      else 
        obj[arr[i]] = i;
    } return -1; 
}

let arr = [2, 1, 3, 5, 3, 2];
console.log(firstDuplicate(a));