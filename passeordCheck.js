function passwordCheck(input) {
    if(input.match(/[A-Z]/) && input.match(/[a-z]/) && input.match(/[0-9]/)){
        if(input.length >= 5) return true;
    }return false;
}