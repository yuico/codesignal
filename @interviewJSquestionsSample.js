//add element front and end of array
let myArr = ['a', 'b', 'c', 'd']
let res = [1,...myArr, 2]
res.push(2)
res.unshift(1)
console.log(res)

//how do you create a private variable in JS

const secetVal = () =>{
  const private = 'password'
  return function() {
    return private
  }
}

const getPrivateVal = secetVal()

console.log(getPrivateVal())
console.log(secetVal())

//What is the output? Closure
var num = 4;
console.log(num);
function outer(){
  var num = 2;
  console.log(num);
  function inner() {
    num++;
    console.log(num);
    var num = 3;
    console.log(num);
  }
  inner();
}
outer();

//what is the output?
console.log(typeof 1)
console.log(typeof typeof 1)

//What is the output?
var hero = {
  _name: 'Jane lee',
  getSecretIdentity: function(){
    return this._name;
  }
}

var stoleSecretIdentity = hero.getSecretIdentity;
var stoleSecretIdentity1 = hero.getSecretIdentity.bind(hero);

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
console.log(stoleSecretIdentity1());


/* 
1. What is the difference btw let and var?
2. What is prototype in javascript?
3. What is a closure?
4. Explain the event loop in node.js?
5. What is the meaning of the keyword this in javascript?
6. What is node.js?
7. What is the difference btw null and undefined?
8.  Explain settimeout in javascript?
9. What is the difference btw javascript and node.js?
10. Explain what is promise and what is a callback?
 */

//react questions
/* Name lifecycle Methods and their purpose 
*/

/*react question*/
/* class Event extends React.Component({
  event(evt){
    //logic of what the event does
  },

  render(){
    return(
      <div onClick={this.event}>Click me to run the event</div>
    )
  }
})  */

/*JSX to js
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
); 
*/

/* const element = React.createElement(
  'h1',
  {className: "greeting"},
  'Hello, world'
) */

/*mock interview
https://www.youtube.com/watch?v=OOC-ypVnHAY&ab_channel=techsith
*/

//1.create array with values only
let x = {
  a:1,
  b:2
};
//answer
const array = Object.values(x); //values only
const array1 = Object.keys(x); //keys
const array2 = Object.entries(x); // all
console.log(array)
console.log(array1)
console.log(array2)

//2.reverse the string
let hi = 'hi';
//answer
const result = (str) => str.split('').reverse().join('')
console.log(result(hi));

//3. obj.getA().getB();
/* const obj = {
  a:1,
  b:2,
  getA() {
    console.log(this.a)
  },
  getB() {
    console.log(this.b)
  }
};

obj.getA().getB(); */
//answer1
/* obj.getA();
obj.getB(); */
//answer2
const obj = {
  a:1,
  b:2,
  getA() {
    console.log(this.a)
    return this; //add return this
  },
  getB() {
    console.log(this.b)
  }
};

obj.getA().getB();

//4.print 1, 2
//[1,2].print();

/* [1,2].map(elem=> console.log(elem));
[1,2].forEach(elem=>console.log(elem));
[1,2].toString();

const arrA = [1,2] 
const fun = (arr) => {
  let ans = '';
  arr.forEach((element, index) => {
    index == 0 ? ans+=element : ans+=`,${element}`
  })
  return ans;
}
console.log(fun(arrA)) */

/* Array.prototype.print = () => {
  let result = '';
  for(let [i, elem] of this){
    i == 0 ? result+=elem : result+=`,${elem}`
  }
  return result;
}

console.log([1,2].print());
 */
/* console.log([1,2,3,4,5].toString());

Array.prototype.print = () => {
  return this.toString();
}

console.log([1,2,3].print()); */


//5
/* const c = function(x) {
  this.x = x;
}

//inherite the x from c
const d = function(x, y) {
  this.y = y;
}

const newD = new d('x', 'y')

newD.getX();
newD.getY(); */

//answer
/* const c = function(x) {
  this.x = x;
}
c.prototype = {
  getX() {
    return this.x
  }
}
//inherite the x from c
const d = function(x, y) {
  this.y = y;
  //this.x = new c(x).x;
  c.call(this, x);
  getY() {
    return this.y;
  }
}

const newD = new d('x', 'y')

newD.getX();
newD.getY(); */

//6 clone obj
const objA = {
  a: {
    b: {
      c: 1
    }
  }
}

const arrayCopy = [1,2,3,4]

const clone = {...objA} // same reference
const clone1 = Object.assign({}, objA); // same reference
const clone2 = JSON.parse(JSON.stringify(objA)) // deep copy , new object
const clone3 = arrayCopy.slice() // deep copy , array copy only
clone.a.b.c = 2;
arrayCopy[0] = 8
console.log(clone)
console.log(clone1)
console.log(clone2)
console.log(arrayCopy)
console.log(clone3)

//7 make new array combining two arrays and sort
const arrA = [1,2,5,7,9]
const arrB = [2,5,7,12,100, 1000, 1001, 1002]

//answer
const arrC = [...arrA, ...arrB].sort((a,b)=>a-b)
const arrD = arrA.concat(arrB).sort((a,b)=>a-b)
console.log(arrC)
console.log(arrD)

//for performance using sort can be not that good solution 
// arrA의 길이만큼만 비교해서 arrB에 push
function mergeSortedArray(a,b){
  var tempArray = [];
  while(a.length || b.length) {
      if(typeof a[0] === 'undefined') {
          tempArray.push(b[0]);
          b.splice(0,1);
      } else if(a[0] > b[0]){
          tempArray.push(b[0]);
          b.splice(0,1);
      } else {
          tempArray.push(a[0]);
          a.splice(0,1);
      }
  }
  return tempArray;
}

console.log(mergeSortedArray(arrA, arrB))

//8
/* const objTest = {
  x: 1,
  getX(){
    const inner = function() {
      console.log(this.x)
    }
    inner();
  }
}; */

/* const objTest = {
  x: 1,
  getX(){
    const inner = () => { //soltuion 1. change to arrow funcion
      console.log(this.x)
    }
    inner();
  }
};
 */
/* const objTest = {
  x: 1,
  getX(){
    const that = this // solution 2. add that
    const inner = function() {
      console.log(that.x)
    }
    inner();
  }
}; */

const objTest = {
  x: 1,
  getX(){
    const inner = function() {
      console.log(this.x)
    }
    inner.bind(this); // souution 3. bind with bind 
    //inner.call(this) solution 4 using call
  }
};

console.log(objTest.getX());

//9 remove duplicates from arrary

let originArr = [1, 2, 5 ,2, 1, 8]

//answer
let newArr = []
let len = originArr.length; //for better perfomance no need to check the length every time

//solution 1
/* for(let i = 0; i<len; i++) {
  if(newArr.indexOf(originArr[i]) === -1) {
    newArr.push(originArr[i])
  }
} */

/* for(let i = 0; i<len; i++) {
  (newArr.indexOf(originArr[i]) === -1) ? newArr.push(originArr[i]) : ''
} */

//solution 2
/* originArr.sort();
let _temp;

for(let i=0; i<len; i++){
  if(originArr[i] !== _temp){
    newArr.push(originArr[i]);
    _temp = originArr[i];
  }
} */

//solution 3
arrObj = {}

for(let i of originArr) {
  arrObj[i] = true; //key has to be unique
}

console.log(originArr.filter((val, index) =>  originArr.indexOf(val) === index));
console.log([...new Set(originArr)])
console.log(newArr)
console.log(Object.keys(arrObj))

