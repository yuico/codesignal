function maxZeros(n) {
    num=2;
    while(n != num){   
        if(n%num == 0 || n%num == 1) return num;
        num++;     
    } return n;  
}

console.log(maxZeros(9));

/* 
n = x*2*0 + y*2*1 + z*2*2 ...  
For n = 9, the output should be
maxZeros(n) = 2.
9 = 1001_2 = 100_3 = 21_4...
ans=2

Input:
n: 127
Expected Output:
5 */