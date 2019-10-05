function almostIncreasingSequence(seq) {
    let num = 0, num1 = 0, num2=0, num3=0; 
    let arr = [...seq];
    let tem = [...seq];
    let tem1 = [...seq];
    let ans = true;
    seq.sort(function(a,b){return a-b});
    tem.pop();
    tem1.shift();
    for(let i=0; i<arr.length; i++) {
        if(tem[i] >= tem[i+1]) num2++;
    }
    for(let i=0; i<arr.length; i++) {
        if(tem1[i] >= tem1[i+1]) num3++;
    }
    if(num2 == 0 || num3 == 0) return true;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] >= arr[i+1]) {
            num ++;
            if(arr[i-1] > arr[i+1]) return false;
        }
    }
    for(let j=0; j<seq.length; j++) {
        if(seq[j] == seq[j+1]) num1 ++;
    }
    if(num>1 || num1>1 ) return false;
    return ans;
}
