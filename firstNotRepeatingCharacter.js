function firstNotRepeatingCharacter(s) {
    let arr = s.charCodeAt();
    let obj={}, i=0;
    for(; i<s.length; i++) {
      if(obj[arr[i]] !== undefined) 
        return arr[i];
      else 
        obj[arr[i]] = i;
    } return '_';    
}