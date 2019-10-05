function isLuckyNumber(n) {
    let dig= n.toString();
    let ans = 0;
    for(let i = 0; i<dig; i++) {
        if(dig.charAt(i) == 7) ans++;
    }return ans;
}

let n = 8877;
console.log(isLuckyNumber(n));