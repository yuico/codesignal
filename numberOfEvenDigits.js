function numberOfEvenDigits(n) {
    let dig = n.toString();
    let arr = [];
    let ans = 0;
    for(let i = 0; i<dig.length; i++) {
        arr.push(dig.charAt(i));
    }
    for(let i = 0; i<dig.length; i++) {
        if(arr[i] % 2 == 0 ) ans+=1;
    }return ans;
 }