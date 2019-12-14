function palindromeRearranging(str) {
    arr = str.split('').sort();
    chk = 0; 
    ans = 0;
    i = 0;
    if(arr.length == 1) return true;
    do{
        while(arr[i] == arr[i+1]) { chk++; i++; }
        if(chk%2 != 1 || chk == 0) { ans++; chk = 0; }
        chk = 0; i++;
        if(ans > 1) return false;
    }while(i != arr.length);
    return true;
}
console.log(palindromeRearranging("aabbbcca"));
