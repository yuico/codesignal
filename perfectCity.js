function perfectCity(dep, des) {
    sum = 0;  
    if(des[0] == dep[0]) return Math.abs(des[1]-dep[1]);
    if(des[1] == dep[1]) return Math.abs(des[0]-dep[0]);
    for(i=0; i<2; i++){        
        sCeil = Math.ceil(des[i]);
        pCeil = Math.ceil(dep[i]);
        sFloor = Math.floor(des[i]);
        pFloor = Math.floor(dep[i]);
        if(sCeil == pCeil){
            sum += Math.min(sCeil-des[i]+pCeil-dep[i],des[i]-sFloor+dep[i]-pFloor);
        }else sum += Math.abs(des[i]-dep[i]);
    }return sum;
}
console.log(perfectCity([0.9, 6],[1.1, 5]));
/* 1.2 */
console.log(perfectCity([0, 0.2],[7, 0.5]));
//7.7
console.log(perfectCity([7, 0.2],[7, 0.5]));
//0.3
