/*this is itself, 호출한 놈*/

var someone = {
  name: 'yui',
  whoAmI: function () {
    console.log(this);
  },
};

someone.whoAmI(); //{name: "yui", whoAmI: ƒ}

var myWhoAmI = someone.whoAmI;
myWhoAmI(); //widow{...} bc browser(window) call this function

var myWhoAmI1 = someone.whoAmI();

myWhoAmI1; //{name: "yui", whoAmI: ƒ}

var btn = document.getElementById('btn');
var btn1 = document.getElementById('btn1');

btn.addEventListener('click', someone.whoAmI); //<button>..</button>
btn1.addEventListener('click', myWhoAmI); //<button>..</button>

var bindedWhoAmI = myWhoAmI.bind(someone);
//bind는 묶인애가 this
bindedWhoAmI();

/* 
In JS, there are decided things either while it is declared or called
'This' keyword is itself which call.
And regardless of 'this' keyword, 'bind' keyword help to tie up the 'this' to function. 
*/
