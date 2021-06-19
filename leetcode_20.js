const isValid = (text) => {
  let map = { ')': '(', ']': '[', '>': '<' };
  let arr = [];
  for (let i = 0; i < text.length; i++) {
    if (Object.values(map).includes(text[i])) {
      arr.push(text[i]);
      continue;
    }
    if (Object.keys(map).includes(text[i])) {
      if (arr.length == 0) return false;
      if (arr.pop() !== map[text[i]]) return false;
    }
  }
  if (arr.length === 1) return false;
  return true;
};

console.log(isValid('(('));
console.log(isValid('((){)}'));

console.log(isValid('---(++++)----')); // true
console.log(isValid('')); // true
console.log(isValid('before ( middle []) after ')); // true
console.log(isValid(') (')); // false
console.log(isValid('<(   >)')); // false
console.log(isValid('(  [  <>  ()  ]  <>  )')); // true
console.log(isValid('   (      [)')); // false
