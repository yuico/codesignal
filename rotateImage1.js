function rotateImage(a) {
    arr=[];
    for(i=0; i<a.length; i++){
        arr[i] = [];
        for(j=0; j<a[i].length; j++){
            arr[i].push(a[j][i]);
        }arr[i].reverse();
    }return arr;
}

console.log(rotateImage([[1,2,3],
                        [4,5,6],
                        [7,8,9]]));
/* [[7,4,1], 
   [8,5,2], 
   [9,6,3]] */