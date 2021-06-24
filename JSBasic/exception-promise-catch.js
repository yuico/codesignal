function wait(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error');
    }, sec * 1000);
  });
}

/* 
wait(3)
//exception for sync function only
try {
  wait(3);
} catch (e) {
  console.log(e);
} 
*/

//exception for async fucntion
/* wait(3).catch((e) => {
    console.log('1st catch', e);
    throw e;
  }).catch((e) => {
    console.log('2nd catch', e);
  }); */
wait(3).then(
  () => {
    console.log('done');
  },
  (e) => {
    console.log('1nd catch in Then');
  }
);
