function chessBoardCellColor(c1, c2) {
  // 'a'.charCodeAt(0) // 97
  if (
    (c1.charCodeAt(0) % 2 == c2.charCodeAt(0) % 2 &&
      c1.charCodeAt(1) % 2 == c2.charCodeAt(1) % 2) ||
    (c1.charCodeAt(0) % 2 != c2.charCodeAt(0) % 2 &&
      c1.charCodeAt(1) % 2 != c2.charCodeAt(1) % 2)
  )
    return true;
  return false;
  console.log(c1.charCodeAt(1) % 2);
}
/*
Given two cells on the standard chess board, determine whether they have the same color or not.
*/
console.log(chessBoardCellColor('A1', 'B2'));
