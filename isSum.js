function isSum(value) {
    i=1;
    sum=0;
    while(value >= sum){
        if(value == sum) return true; 
        sum += i;
        i++;
    }return false;
}
console.log(isSum(10));
