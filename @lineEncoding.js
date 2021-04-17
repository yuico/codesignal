function lineEncoding(s) {
  obj = [s[0], 1];
  res = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) obj[1]++;
    else {
      if (obj[1] == 1) res += obj[0];
      else {
        res += obj[1];
        res += obj[0];
      }
      obj = [s[i + 1], 1];
    }
  }
  return res;
}

/* 
function lineEncoding(s) {
  obj=[s[0], 1];
  res="";
  for(let i=0; i<s.length; i++){ 
    s[i] == s[i+1] ? obj[1]++ : (obj[1] == 1 ? res+=obj[0] : res+=(obj[1]+obj[0]), obj=[s[i+1], 1]);    
  }
  return res;
}
*/

/* 
s: "abbcabb"
Output: "a2bca2b"
 */
