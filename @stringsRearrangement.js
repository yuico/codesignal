function stringsRearrangement(i) {
  i.sort();
  let cnt = 0;
  console.log();
  if (i[0].length == 1) {
    if (i.length == 2) return false;
    return true;
  }
  for (let j = 0; j < i.length - 1; j++) {
    if (i[j] == i[j + 1]) {
      tem = i[j + 1];
      i[j + 1] = i[j + 2];
      i[j + 2] = tem;
    }
    for (let l = 0; l < i[0].length; l++) {
      if (i[j].charAt(l) != i[j + 1].charAt(l)) cnt++;
    }
    if (cnt > 1) return false;
    cnt = 0;
  }
  return true;
}

/*
function stringsRearrangement(input) {

    let array = permute(input);
    
    for(let i=0; i<array.length; i++){
        let varified = 1;
        for(let j=0; j<array[i].length-1; j++){
            if(!check(array[i][j], array[i][j+1])){
                varified = 0;
                break;
            } 
        }
        if(varified == 1) return true;
    }
    return false;

}

function check(arr1, arr2){
    let a1 = arr1.split('');
    let a2 = arr2.split('');
    let num = 0;

    for(let i=0; i<a1.length;i++){
        if(a1[i] !== a2[i]) num++;
    }

    return (num === 1) ? true:false; 
}




var permute = function(nums, set=[], answers= []){
    if(!nums.length) answers.push([...set]);

    for(let i=0; i<nums.length; i++){
        const newNums = nums.filter((n, index) => index !== i);
        set.push(nums[i]);
        permute(newNums, set, answers);
        set.pop();
    }

    return answers;
} 

*/

// console.log(stringsRearrangement(['abc', 'abx', 'axx', 'abc']));
console.log(stringsRearrangement(['ff', 'gf', 'af', 'ar', 'hf']));

/* 
Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.

For inputArray = ["aba", "bbb", "bab"], the output should be
stringsRearrangement(inputArray) = false.

There are 6 possible arrangements for these strings:

["aba", "bbb", "bab"]
["aba", "bab", "bbb"]
["bbb", "aba", "bab"]
["bbb", "bab", "aba"]
["bab", "bbb", "aba"]
["bab", "aba", "bbb"]

 */
