function longestUncorruptedSegment(sourceArray, destinationArray) {
  let sLan = 0;
  let dIn = 0;
  let lan = sourceArray.length;
  let arr = [];
  if (lan !== 1) {
    for (let i = 0; i < lan; i++) {
      if (sourceArray[i] === destinationArray[i]) {
        sLan++;
      } else {
        arr.push([sLan, dIn]);
        sLan = 0;
        dIn = i + 1;
      }
    }
    arr.push([sLan, dIn]);
    arr.sort((a, b) => b[0] - a[0]);
    if (arr[0][0] === 0) arr[0][1] = 0;
  } else {
    if (sourceArray[0] === destinationArray[0]) {
      return [1, 0];
    } else {
      return [0, 0];
    }
  }
  return arr[0];
}
sourceArray = [0, 3, 0, 2, 3];
destinationArray = [0, 3, 1, 2, 3];
//[0, 0]

// sourceArray = [33531593, 96933415, 28506400, 39457872, 29684716, 86010806];
// destinationArray = [33531593, 96913415, 28506400, 39457872, 29684716, 86010806];
// //[4, 2]
// sourceArray = [
//   28813641,
//   31985183,
//   49809398,
//   48959083,
//   59368847,
//   37296474,
//   92567090,
//   50320165,
//   12197477,
//   28906340,
// ];
// destinationArray = [
//   38813641,
//   31983183,
//   49879398,
//   48959043,
//   59468847,
//   35296474,
//   92567020,
//   80320165,
//   14197477,
//   28906360,
// ];
//[0, 0]

console.log(longestUncorruptedSegment(sourceArray, destinationArray));
