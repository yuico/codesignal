function rightTriangle(sides) {
    let arr = sides.sort(function(a,b){return a-b});
    if(Math.sqrt(Math.pow(arr[0],2)+Math.pow(arr[1],2)) == arr[2] ) return true;
    return false;
}