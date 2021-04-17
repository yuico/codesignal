function isBeautifulString(str) {
  (cnt = 0), (tem = 0);
  arr = str.split('').sort();
  if (arr[arr.length - 1] == 'a') return true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[0] != 'a' || arr[i + 1].charCodeAt(0) - arr[i].charCodeAt(0) > 1)
      return false;
    arr[i] == arr[i + 1] ? cnt++ : ((tem = cnt), (cnt = 0));
    if ((tem != 0 && cnt > tem) || (i == arr.length - 2 && cnt > tem))
      return false;
  }
  return true;
}
console.log(isBeautifulString('ab8'));
/*
Input:"bbbaacdafe"
Output: true 
'a'.charCodeAt(0) // 97
String.fromCharCode(97) // a
parseInt(arr) //array to int
arr.toString() //array to string

 */
