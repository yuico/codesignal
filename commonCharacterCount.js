function commonCharacterCount(s1, s2) {
    check=0;
    arr=s1.split('');
    arr1=s2.split('');
    for(i=0; i<s1.length; i++) {
        for(j=0; j<s2.length; j++) {
            if(arr[i] == arr1[j]) {
                check++;
                arr1.splice(j,1);
                break;               
            }
        }        
    }return check;
}
console.log(commonCharacterCount('aabcc', 'adcaa'));
