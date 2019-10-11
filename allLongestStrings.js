function allLongestStrings(inputArray) {
    len = 0;
    arr = [];
    for(let i=0; i<inputArray.length; i++) {
        if(inputArray[i].length > len) len = inputArray[i].length;
    }
    for(let i=0; i<inputArray.length; i++) {
        if(inputArray[i].length == len) arr.push(inputArray[i]);
    }
    return arr;
}

console.log(allLongestStrings(["abc", "eeee", "abcd", "dcd"]));
