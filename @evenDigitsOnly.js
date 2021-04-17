// function evenDigitsOnly(n) {
//   let chk = 0;
//   let str = n.toString();
//   let arr = str.split('').sort((a, b) => a - b);
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === arr[i + 1]) chk++;
//     else {
//       if (chk % 2 != 1) return false;
//       chk = 0;
//     }
//   }
//   return true;
// }

//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
function evenDigitsOnly(n) {
  let arr = n.toString().split('');
  return arr.reduce((a, b) => {
    return a && b % 2 == 0;
  }, true);
}

console.log(evenDigitsOnly(48622));
