//Print 1 to 5 every 1 sec
const sameFunc = (sec) => {
  for (let i = 1; i < sec + 1; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
};

sameFunc(5);

//Promise
const promiseFunc = (num) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(new Date().toISOString());
    }, num * 1000);
  });
};

promiseFunc(1)
  .then((res) => {
    console.log(1, res);
    return promiseFunc(2);
  })
  .then((res) => {
    console.log(2, res);
    return promiseFunc(3);
  })
  .then((res) => console.log('done', res));

//async await
const promiseFunc1 = (num) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(new Date().toISOString());
    }, num * 1000);
  });
};

const asyncFunc = async () => {
  const result = await promiseFunc1(1);
  console.log(result);
  return 'test';
};

asyncFunc().then((res) => console.log(res));
