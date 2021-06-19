const removeNthFromEnd = (head, n) => {
  let newArr = [...head]
  if(n>=head.length) {
    return [];
  }else {
    newArr.splice(n, 1)
    return newArr
  }
}

console.log(removeNthFromEnd([1,2,3,4,5], 2))
console.log(removeNthFromEnd([1,2], 1))
console.log(removeNthFromEnd([1], 1))

//linkedlist로 풀어보기