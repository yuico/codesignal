function delayP(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, sec * 1000);
  });
}

/* function myFunc() {
  return 'func';
}
async function myAsync() {
  return 'async';
}
console.log(myFunc()); // func
console.log(myAsync()); // Promise{'async'}
console.log(delayP(3)); // Promise{ <pending> }

//async func return promise
//if add 'async', it makes the func return 'Promise'
//so can add .then() like Promise
myAsync().then((res) => {
  console.log(res);
}); // async

//without await
async function myAsync1() {
  delayP(3).then((time) => {
    console.log(1, time);
  });
  return '1 async';
}

myAsync1().then((res) => {
  console.log(res);
}); // 1 async -> 1

//with await
async function myAsync2() {
  const time = await delayP(3);
  console.log(1, time);
  return '2 async';
}

myAsync2().then((res) => {
  console.log(res);
}); // 1 -> 2 async

//with await and then
async function myAsync3() {
  const result = await delayP(3).then((time) => {
    return 'x';
  });
  console.log(result); //'x'
  return '3 async';
}

myAsync3().then((res) => {
  console.log(res);
}); // x -> 3 async
*/

//func with async await
function nextFunc() {
  return 'next';
}

async function myAsync4() {
  const result = await nextFunc();
  console.log(result);
  return '4 myAsync';
}

myAsync4().then((res) => console.log(res));
//next -> 4 myAsync
