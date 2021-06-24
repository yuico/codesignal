function doSomething() {
  console.log('Do smile');
}

function yo() {
  setTimeout(() => {
    console.log('end the 1.5s timer');
  }, 1500);

  for (let i = 0; i < 3; i++) {
    doSomething(); //suppose: it is task which needs 1s to be done.
    console.log(i);
  }
  console.log('end the 3s timer');
}

yo();

console.log('main end');

/* 
Do smile
0
Do smile
1
Do smile
2
end the 3s timer
main end
end the 1.5s timer

'Timer' exits outside, provided by browser through web api.
'Callstack' is only one,
In JS, the timer will wait till the all waiting list
is done in the 'queue'.
When the 'callstack' is empty, finally the setTime out func will go to 'callstack'
*/
