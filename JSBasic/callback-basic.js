const a = () => {
  console.log('A');
};
/* function a() {
  console.log('A')
} */

function slowFunc(callback) {
  callback();
}

slowFunc(a);
