function isLucky(n) {
    m = n.toString();
    num=0; num1=0;
    for(i=0; i<m.length/2; i++) {
        num+=parseInt(m.charAt(i));
        num1+=parseInt(m.charAt(m.length-i-1));
    } 
    return (num == num1) ? true : false;
}
console.log(239017);
