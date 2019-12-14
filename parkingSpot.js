function parkingSpot(car, pLot, luck) {
    x = car[0]; 
    y = car[1];
    if(pLot[luck[0][1]] == 0 && luck[2][3] == 0){
        for(i=0; i<pLot.length; i++) {
            for(j=0; j<pLot[i].length; j++){
                while(pLot[i][j] != 0) {
                    x--;
                }
            }
        }
    }return false;
}

console.log([3,2],[[1,0,1,0,1,0], [0,0,0,0,1,0], [0,0,0,0,0,1], [1,0,1,1,1,1]], [1, 1, 2, 3]);

/* 
carDimensions: [3, 2]
parkingLot:
[[1,0,1,0,1,0], 
 [0,0,0,0,1,0], 
 [0,0,0,0,0,1], 
 [1,0,1,1,1,1]]
luckySpot: [1, 1, 2, 3]     
*/