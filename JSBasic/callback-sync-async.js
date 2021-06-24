function fakeSetTimeout(callback, delay) {
  callback();
}

console.log(0);
fakeSetTimeout(function () {
  console.log('hello');
}, 0);
console.log(1); //0 -> hello ->1

/*
console.log(0);
setTimeout(function () {
  console.log('hello');
}, 0);
console.log(1);
 
// 0 -> 1 ->hello
//It means the 'setTimeout' runs asynchronous.
//'Timer' exits outside of JS, provided by browser through web api
*/
