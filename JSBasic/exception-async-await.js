async function myAsyncuFun() {
  throw 'myAsyncError';
}

function myPromiseFun() {
  return new Promise((resolve, reject) => {
    reject('error');
  });
}

const result = myAsyncuFun().catch((e) => console.log(e));
const result2 = myPromiseFun().catch((e) => console.log(e));

//
function wait(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve('done');
      reject('wait error');
    }, sec * 1000);
  });
}

async function myAsyncFun2() {
  console.log(new Date());
  /* try {
    await wait(3);
  } catch (e) {
    console.log(e); //console.error(e);
  } */
  //await wait(3).catch((e) => console.error(e));
  const res = await await wait(3).catch((e) => console.error(e));
  console.log(res);
  console.log(new Date());
}

//const result3 = myAsyncFun2();
myAsyncFun2().catch((e) => console.log(e));
//promise의 예외처리는 try{}catch(){}가 아니라 .catch()로 한다
