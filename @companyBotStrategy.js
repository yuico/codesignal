function companyBotStrategy(trainingData) {
  let sum = 0;
  let num = 0;
  trainingData.map((d) =>
    d[1] > 0 ? ((sum += d[0]), (num += 1)) : (sum += 0)
  );
  if (sum == 0) return 0;
  return sum / num;
}
trainingData = [
  [4, 1],
  [4, -1],
  [0, 0],
  [6, 1],
];
console.log(companyBotStrategy(trainingData));
