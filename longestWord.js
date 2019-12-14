function longestWord(txt) {
    arr = txt.match(/\b(\w+)\b/g);
    //return arr.sort((a, b) => b.length - a.length)[0];
    return arr.reduce((a, b) => a.length > b.length ? a : b);
}
console.log(longestWord("Ready, steady, go!"));
console.log(longestWord("Ready[[[, steady, go!"));
