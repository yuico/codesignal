function alternatingSums(a) {
    sum=0, sum1=0; arr=[];
    for(i=1; i<=a.length; i++) {
        i%2!=0 ? sum+=a[i-1] : sum1+=a[i-1];
    }
    arr.push(sum);
    arr.push(sum1);
    return arr;
}
console.log(alternatingSums([50, 60, 60, 45, 70]));
//[180, 105]