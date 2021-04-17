function bishopAndPawn(s1, s2) {
  return;
  Math.abs(s1.charCodeAt(0) - s2.charCodeAt(0)) ==
    Math.abs(s1.charCodeAt(1) - s2.charCodeAt(1));

  // ? true
  // : false;
}
console.log(bishopAndPawn('a1', 'c3'));
/*  
bishop: "a1"
pawn: "c3"

'a'.charCodeAt(0) // 97
String.fromCharCode(97) // a
parseInt(arr) //array to int
arr.toString() //array to string
*/
