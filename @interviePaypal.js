/* var myArr = ['1', 2, {x: 3}, [4]]

Array.prototype.duplicate = function(val = 1){
  let newArr = [...this]
  for(let i=0; i<val; i++) {
    newArr = [...newArr, ...this]
  }
  return newArr
}

var myDupArr  = myArr.duplicate()
var myDupArr0 = myArr.duplicate(0)
var myDupArr1 = myArr.duplicate(1)
var myDupArr2 = myArr.duplicate(2)
var myDupArr4 = myArr.duplicate(4)

console.log(myDupArr)
console.log(myDupArr0)
console.log(myDupArr1)
console.log(myDupArr2)
console.log(myDupArr4)
 */

/* 
[ '1', 2, { x: 3 }, [ 4 ], '1', 2, { x: 3 }, [ 4 ] ]
[ '1', 2, { x: 3 }, [ 4 ] ]
[ '1', 2, { x: 3 }, [ 4 ], '1', 2, { x: 3 }, [ 4 ] ]
['1', 2, { x: 3 }, [ 4 ], '1', 2, { x: 3 }, [ 4 ], '1', 2, { x: 3 }, [ 4 ]]
['1', 2, { x: 3 },[ 4 ], '1', 2,{ x: 3 }, [ 4 ], '1', 2, { x: 3 }, [ 4 ], '1', 2, { x: 3 }, [ 4 ], '1', 2, { x: 3 }, [ 4 ]]

*/
// console.log('called fun 1')
// console.log('called fun 2')
// console.log('called fun 3')


// called fun 1
// called fun 2
// called fun 3

//answer1
function func2() {
  console.log('fun2')
}

async function fun1() {
  console.log('fun1');
  const result = await func2();
  console.log(result);
}

fun1();

//answer2
for(let i=0; i<5; i++){
  setTimeout(function() {console.log(i+1)}, 1000*i)
}