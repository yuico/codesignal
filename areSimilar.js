function areSimilar(a, b) {
    aC=[...a];
    bC=[...b];
    a.sort();
    b.sort();
    arr=[];
    num=0;
    if(a.length == b.length) {
        for(i=0; i<a.length; i++) {
            if(a[i] != b[i]) return false;
            if(aC[i] != bC[i]) num++; 
        }if(num > 2) return false; 
        return true;
    }return false; 
}
console.log(areSimilar([1, 2, 3], [2, 1, 3]));

/* a: [1, 2, 3]
b: [1, 2, 3] */