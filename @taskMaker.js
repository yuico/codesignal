function taskMaker(source, challengeId) {
  // let chk = source.map((d) => d.match(/\/\/DB [1-9]*/g));
  let chk = source.map((d) => d.match(`/\/\/DB ${challengeId}/g`));
  return chk;
}
source = [
  'ans = 0',
  'for i in range(n):',
  '    for j in range(n):',
  '    //DB 3//for j in range(1, n):',
  '    //DB 2//for j in range(n + 1):',
  '        ans += 1',
  'return ans',
];
challengeId = 3;
console.log(taskMaker(source, challengeId));

/* ["ans = 0", 
 "for i in range(n):", 
 "    for j in range(1, n):", 
 "        ans += 1", 
 "return ans"] */
