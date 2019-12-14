function avoidObstacles(arr) {
    arr.sort((a,b)=>a-b);
    num=2;
    j=1;
    i=0;
    while(num*j<=arr[arr.length-1]+1){
        if(num*j==arr[i]) { num++; i=0; j=0;}
        else if(num*j>arr[i]) { i++; }
        else { j++; }
    }return num;
}
console.log(avoidObstacles([5, 3, 6, 7, 9]));
//4

