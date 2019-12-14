/* Given an array of integers, find the maximal absolute difference between any two of its adjacent elements. */
function arrayMaximalAdjacentDifference(arr) {
    num=0;
    for(i=0; i<arr.length; i++) {
        if(num < Math.abs(arr[i]-arr[i+1]) ) num = Math.abs(arr[i]-arr[i+1]);
    }return num;
}
console.log(arrayMaximalAdjacentDifference[-1, 4, 10, 3, -2]);
