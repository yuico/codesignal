function reverseInParentheses(s) {
    if (s.match(/\([a-z]*\)/)) {
        return reverseInParentheses(s.replace(/\([a-z]*\)/, 
            Array.from(s.match(/\([a-z]*\)/)[0].replace(/\(|\)/g,'')).reverse().join('')));
    }
    else return s;
}
console.log(reverseInParentheses("foo(bar(baz))blim"));
//"foobazrabblim"