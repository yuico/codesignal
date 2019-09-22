function sumOfDivisors(n) {
    let sum = 1, rest = n, sumOfEach;
    if (n == 1) return n;
    for (let i = 2; i <= rest; i++) {
        sumOfEach = 1;
        if (rest % i == 0) {
            let j = 1;
            do {             
                sumOfEach += Math.pow(i, j);
                rest = rest / i;
                j++;
            }while(rest % i == 0);
             sum *= sumOfEach;
        }
        if (n > Math.pow(10,8)) break;
    }
    return sum;
}

console.log(sumOfDivisors(0));

