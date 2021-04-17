function chessKnight(c) {
  num = 8;
  c0 = c.charCodeAt(0);
  if (c0 == 97 || c0 == 104) {
    num -= 4;
    if (c[1] == 1 || c[1] == 8) num += 2;
  }
  if (c0 == 98 || c0 == 103) {
    num -= 2;
    if (c0 == 103 && c[1] == 8) num += 1;
  }
  if (c[1] == 1 || c[1] == 8) num -= 4;
  if (c[1] == 2 || c[1] == 7) num -= 2;
  return num;
}

console.log(chessKnight('a1')); //2
console.log(chessKnight('b1')); //2
console.log(chessKnight('c2')); //6
console.log(chessKnight('h8')); //2
console.log(chessKnight('g8')); //3
/* 
'a'.charCodeAt(0) // 97 h = 104
String.fromCharCode(97) // a
*/
