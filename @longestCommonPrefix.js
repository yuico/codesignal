const longestCommonPrefix = (strs) => {
  if(strs.length == 0) return '';
  strs = strs.sort();
  let res = ''
  for(i=0; i<strs[0].length; i++){
      if(strs[0][i] == strs[strs.length-1][i]) res+=strs[0][i]
      else break;
  }
  return res
};
console.log(longestCommonPrefix(["flower","flow","flight"]))