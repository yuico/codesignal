function isPower(n) {
   //Math.sqrt(n);
    //n = Math.pow(i, j);
    //return n > 0 && Number.isInteger(Math.sqrt(n)) ? true : false;
    i=2;
    if(n == 1) return true;
    for(j=2; j<400; j++) {
        while(Math.pow(j, i) <= n) {
            if(Math.pow(j, i) == n)  return true; 
            i++;
        }i=2; 
    }return false;
}

console.log(isPower(4));

console.log(isPower(125));

console.log(isPower(72));
