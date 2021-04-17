function priceSuggestion(contractData) {
  contractData.sort((a, b) => a - b);
  lan = contractData.length;
  res = [];
  if (lan < 2) return res;
  else if (lan === 2) res = contractData;
  else if (lan === 3 || lan === 4)
    res = [contractData[0], contractData[lan - 1]];
  else if (lan === 5) res = [contractData[1], contractData[lan - 2]];
  else if (lan > 5) {
    idx = 0;
    (lan / 2) % 2 === 0
      ? (res = [
          contractData[~~(lan / 2 / 2 - 1)],
          contractData[Math.ceil(lan / 2 + lan / 2 / 2)],
        ])
      : (res = res = [
          contractData[~~(lan / 2 / 2)],
          contractData[Math.ceil(lan / 2 + ~~(lan / 2 / 2))],
        ]);
  }
  return res;
}
// contractData = [1, 5, 6, 3, 2, 4, 7, 8];
// contractData = [10, 15, 14, 7, 11, 15];

// contractData = [];
// contractData = [1];
// contractData = [1, 2];
// contractData = [1, 2, 3];
// contractData = [1, 2, 3, 4];
contractData = [1, 2, 3, 4, 5];
// contractData = [1, 2, 3, 4, 5, 6];
// contractData = [1, 2, 3, 4, 5, 6, 7];
// contractData = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(priceSuggestion(contractData));

//[2,7]
