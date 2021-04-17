var myArr = ['1', 2, {x: 3}, [4]]

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


/* 
[ '1', 2, { x: 3 }, [ 4 ], '1', 2, { x: 3 }, [ 4 ] ]
[ '1', 2, { x: 3 }, [ 4 ] ]
[ '1', 2, { x: 3 }, [ 4 ], '1', 2, { x: 3 }, [ 4 ] ]
['1', 2, { x: 3 }, [ 4 ], '1', 2, { x: 3 }, [ 4 ], '1', 2, { x: 3 }, [ 4 ]]
['1', 2, { x: 3 },[ 4 ], '1', 2,{ x: 3 }, [ 4 ], '1', 2, { x: 3 }, [ 4 ], '1', 2, { x: 3 }, [ 4 ], '1', 2, { x: 3 }, [ 4 ]]

*/