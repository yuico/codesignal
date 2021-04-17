function decipher(cipher) {
  let arr = cipher.split('');
  let tem = '';
  let ans = '';
  while (arr.length != 0) {
    if (arr[0] == 1) {
      for (let i = 0; i < 3; i++) {
        tem += arr[0];
        arr.shift();
      }
      ans += String.fromCharCode(tem);
      tem = '';
    } else {
      for (let j = 0; j < 2; j++) {
        tem += arr[0];
        arr.shift();
      }
      ans += String.fromCharCode(tem);
      tem = '';
    }
  }
  return ans;
}

let cipher = '1229897';
console.log(decipher(cipher));
