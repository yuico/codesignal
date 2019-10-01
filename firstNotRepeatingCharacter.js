function firstNotRepeatingCharacter(s) {
  let arr = s.split('').sort();
  let tem = arr[0];
  if (arr[0] != arr[1]) {
    return tem;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != arr[i + 1] && arr[i + 1] != arr[i + 2]) {
        tem = arr[i + 1];
      }
    } 
    // if (arr[arr.lenght - 1] != arr[arr.lenght - 2]) {
    //   tem = arr[arr.lenght - 1];
    //   break;
    // } else {
    //   tem = '_';
    //   break;
    // }
  }
}

let s = "abacabad";
console.log(firstNotRepeatingCharacter(s));
