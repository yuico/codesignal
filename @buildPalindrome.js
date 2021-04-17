function buildPalindrome(st) {
  function chkPa(s) {
    for (let i = 0; i < s.length; i++) {
      if (s[i] != s[s.length - 1 - i]) return false;
    }
    return true;
  }
  for (let i = 0; i < st.length; i++) {
    if (chkPa(st.substr(i))) {
      rev = st.substr(0, i);
      rev = rev.split('').reverse().join('');
      return st + rev;
    }
  }
  return '';
}
/* 
Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.
st = "abcdc", 
output = "abcdcba"

st: "kebab"
Output: "kebabek"
*/
