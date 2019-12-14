function addBorder(p) {
    arr = [];
    str = '';
    for (i = 0; i < p.length; i++) {
        for (h = 0; h < p[i].length; h++) {
            arr.push('*' + p[i] + '*');
            break;
        }
    }
    for (j = 0; j < arr[0].length; j++) str += '*';

    arr.push(str);
    arr.unshift(str);
    return arr;
}

console.log(addBorder(["aa", "**", "zz"]));