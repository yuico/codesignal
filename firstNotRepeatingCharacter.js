function firstNotRepeatingCharacter(s) {
  num=0;
  for(i=0; i<s.length; i++) {
    for(j=0; j<s.length; j++){
      if (s.charAt(i) == s.charAt(j)) {
        num++;
        if(num > 2) break;
      }
    }if(num < 2) {
      return s.charAt(i);
    } num=0;
  }return "_"
}

console.log(firstNotRepeatingCharacter("abacabad"));
