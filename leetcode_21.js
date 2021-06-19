const mergeTwoLists = function (l1, l2) {
  newArr = [...l1, ...l2];
  return newArr.sort((a, b) => a - b);
};
l1 = [1, 2, 4];
l2 = [1, 3, 4];
console.log(mergeTwoLists(l1, l2));
