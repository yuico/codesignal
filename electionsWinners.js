function electionsWinners(votes, k) {
    let arr = votes.sort(function(a, b){return a-b})
    let numOfWin = 0; 
    let len = arr.length;
    let bigNum = arr[arr.length-1];

    if (k != 0 && arr[0] == bigNum) {
        return len;
    } else if (k == 0 && bigNum == arr[arr.length-2]) {
        return 0;
    } else if (k == 0 && bigNum != arr[arr.length-2]){
        return 1;
    } else {
        for (let i = 0; i < len; i++) {
            if (arr[i] + k > bigNum) numOfWin += 1;
        } return numOfWin;
    }
}

let votes = [2, 3, 5, 2];
let k = 3;
console.log(electionsWinners(votes, k));

