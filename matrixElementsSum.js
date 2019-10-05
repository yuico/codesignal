function matrixElementsSum(matrix) {
    num = 0;
    for(var i=0; i<matrix.length; i++)
        for(var j=0; j<matrix[0].length; j++){
            if(i == 0)
                num += matrix[i][j];
            else{
                if(matrix[i-1][j] == 0)
                    matrix[i][j] = 0;
                num += matrix[i][j];
            }
        }
    return num;   
}

console.log(matrixElementsSum([[0,1,1,2], [0,5,0,0], [2,0,3,3]]));