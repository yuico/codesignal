function checkPalindrome(input) {
    arr=input.split('');
    for(i=0; i<arr.length/2; i++) {
        if(arr[i] != arr[arr.length-1-i]) return false;
    }return true;  
}