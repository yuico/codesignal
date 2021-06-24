function func() {}

//arrow func : no this, no function name, no arguments
const arrowFunc = () => {};

const btn = document.getElementById('btn');
var myObj = {
  count: 3,
  setCounter: () => {
    console.log(count);
  },
};
//여기서 this는 myObj의 this
myObj.setCounter();
