function longestWord(txt) {
  arr = txt.replace(/([.?!\[\]\d\+\=\-\{\}*])/, ' ');
  //.split(' ');
  //.map((p) => p.match(/^[\w]*/)[0])
  //.sort((a, b) => b.length - a.length);
  return arr;
}
console.log(longestWord('Ready[[[?!1234+=.{}eeeevvv, steady, go!'));
