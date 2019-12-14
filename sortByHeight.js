function sortByHeight(a) {
    lan = a.length;
    b = [...a];
    a.sort((a,b)=>a-b);
    if(a[0] == a[a.length-1]) return a;
    while(a[0] == -1) {
        if(a[0] == -1) a.shift();
    }
    arr=[];   
    for(i=0; i<lan; i++){
        if(b[i]==-1) arr.push(b[i]);
        else {
            arr.push(a[0]);
            a.shift();
        }      
    } return arr;
}
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

