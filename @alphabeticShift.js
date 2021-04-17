function alphabeticShift(s) {
  let arr = s.split('');

  //'a'.charCodeAt(0) // 97
  //String.fromCharCode(97) // a
  //join toString
  return arr
    .map((p) =>
      p == 'z' ? (p = 'a') : (p = String.fromCharCode(p.charCodeAt(0) + 1))
    )
    .join('');
}

console.log(alphabeticShift('abcdefg'));
/*
For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".
*/
