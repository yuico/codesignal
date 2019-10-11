function commonCharacterCount(s1) {
    let chr='';
    for(var i=0; i<s1.length; i++){
        if(chr.indexOf(s1[i]) == -1) chr += s1[i];
    }
    return chr;  
}

console.log(commonCharacterCount("aabcc"))
