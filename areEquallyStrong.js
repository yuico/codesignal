function areEquallyStrong(yourL, yourR, friendsL, friendsR) {
    if(yourL+yourR == friendsL+friendsR){
      if(yourL >= yourR && (yourL == friendsL || yourL == friendsR)) return true;
      else if(yourL < yourR && (yourR == friendsL || yourR == friendsR)) return true;
    }
    return false;
}
console.log(areEquallyStrong([10,5,7,8]));
