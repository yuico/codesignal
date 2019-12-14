function isIPv4Address(s) {
    // regex = "((25[0-5])|(2[0-4][0-9])|(1[0-9]{0,2}))";
    // if(s.match(/^((25[0-5])|(2[0-4][0-9])|(1[0-9]{0,2})).((25[0-5])|(2[0-4][0-9])|(1[0-9]{0,2})).((25[0-5])|(2[0-4][0-9])|(1[0-9]{0,2})).((25[0-5])|(2[0-4][0-9])|(1[0-9]{0,2}))$/)) return true;
    // return false;
    arr = s.split('.');
    if(s.match(/[a-zA-Z]/) || arr.length!=4) return false;
    for(i=0; i<4; i++) {
        if(arr[i] == "" || arr[i]<0 || arr[i]>255) return false;    
    }return true;
}
console.log(isIPv4Address("1.1.1.1a"));
