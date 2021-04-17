function dungeonGame(dungeon) {
  let row = dungeon.length;
  // let col = dungeon[0].length;
  // let tem = [...dungeon];
  let ph = dungeon[0][0] > 0 ? 1 : 1 - dungeon[0][0];

  for (let i = 0; i < row; i++) {}

  return `ph: ${ph}`;
}

dungeon = [
  [-2, -3, 4],
  [-6, -15, 0],
  [10, 25, -6],
];

console.log(dungeonGame(dungeon));
