/* https://www.youtube.com/watch?v=CA5EDD4Hjz4&ab_channel=%EC%BD%94%EB%93%9C%EC%A2%85 */

function delay(sec, callback) {
  setTimeout(() => {
    callback(new Date().toISOString());
  }, sec * 1000);
}

console.log('start', new Date().toISOString());
/* delay(1, (res) => {
  console.log(1, res);
  delay(1, (res) => {
    delay(1, (res) => {
      console.log(3, res);
    });
    console.log(2, res);
  });
}); 
//1->2->3
*/

//promise basic
/* delay(1, (res) => {
  console.log(1, res);
});

function delayP(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, sec * 1000);
  });
}

delayP(1).then((res) => {
  console.log(2, res);
}); 
//1->2
*/

function delayP(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, sec * 1000);
  });
}
delayP(1)
  .then((res) => {
    console.log(1, res);
    return delayP(1); //return promise
  })
  .then((res) => {
    console.log(2, res);
    return delayP(2);
  })
  .then((res) => {
    console.log(3, res);
    return 'text';
  })
  .then((res) => console.log(res));
// 1->2->3->text
// the last async func don't return Promise so it return without time delay
