function differentSubstringsTrie(inputString) {
    let arr = [];
    for(let i = 0; i<inputString.length; i++) {
        for(var j = 0; j<inputString.length; j++) {
            if(inputString.slice(i,j+1) != "")
            arr.push(inputString.slice(i, j+1));
        }
        j = 0;
    }
    arr.sort();
    for(let k=0; k<arr.length; k++) {
        while(arr[k] == arr[k+1]) {
            arr.splice(k,1);
        }
    }
    return arr.length;  
}
console.log(differentSubstringsTrie("abacaba"));
