/* - Assume most recent language standard are available (ES6)
- We expect good performance.
- If missing more requirements details, just make reasonable assumptions of
your own.
- Solution must be simple and compact.
  No defensive coding, no comments, no unrequested features.
  Only one file 10-20 lines of code
- Work only inside Google Docs: no external editor/IDE/debugger, no copy-paste
  to/from such an editor. We must see the flow of how you write the code.

Note: you have a total of 60 minutes for both questions! */

/* 
(1)
Implement function verify(text) which verifies whether parentheses within text are
correctly nested. You need to consider three kinds: (), [], <> and only these kinds.

 Examples:
    
verify("---(++++)----") -> 1
verify("") -> 1
verify("before ( middle []) after ") -> 1
verify(") (") -> 0
verify("<(   >)") -> 0
verify("(  [  <>  ()  ]  <>  )") -> 1
verify("   (      [)") -> 0 */


/* const verify = (text) => {
  text = text.replace(/\w|\s|\+|\-|<>|\(\)|\[\]/g, '');
  console.log(text)
  let currlyCnt = 0, roundCnt = 0, angleCnt = 0, squareCnt = 0;
  if (text.length == 0 ) return 1;
  else {
    const arr = text.split('');
    for(let i=0; i<arr.length; i++){
      arr[i] == '{' ? currlyCnt++ 
      : arr[i] == '}' ? currlyCnt--
      : arr[i] == '(' ? roundCnt++
      : arr[i] == ')' ? roundCnt--
      : arr[i] == '>' ? angleCnt-- 
      : arr[i] == '<' ? angleCnt++
      : arr[i] == '[' ? squareCnt++
      : arr[i] == ']' ? squareCnt--  
      : '';

      if (currlyCnt < 0 || roundCnt < 0 || angleCnt < 0 || squareCnt < 0) return 0;
    }
    return (currlyCnt != 0 && roundCnt != 0 && angleCnt != 0 ) ? 0 : 1;
  }
}
 */

/* const text = "(234  [ <abc> <> () [] (+++<)> --- ]  <>  )"; //true
const bracketConfig = [
  {left: '{', right: '}'},
  {left: '[', right: ']'},
  {left: '<', right: '>'},
  {left: '(', right: ')'},
]
const verify = (text) => {
  text = text.replace(/\w|\s|\+|\-|<>|\(\)|\[\]/g, '');
  if( text.length == 0 ) return 1;
  if( text.length % 2 ) return 0;
  const arr = text.split('');
  let openingChars = [];
  let closingChars = [];
  bracketConfig.forEach( item => {
      openingChars.push(item.left);
      closingChars.push(item.right);
  });

  let stack = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    let char = arr[i];
    const openIdx = openingChars.indexOf(char);
    const closeIdx = closingChars.indexOf(char);
    if (openIdx > -1) {
        stack.push(openIdx);
    } else if (closeIdx > -1) {            
        if (stack.length === 0) return 0;
        lastIdx = stack.pop();
        if(lastIdx !== closeIdx) return 0;
    }
  }

  if (stack.length !== 0) return 0;
  return 1;     
}

console.log(verify(text))

 */

//true

/* const verify = (text) => {
  const regex = /\w|\s|\+|\-|<>|\(\)|\[\]/g;
  text = text.replace(regex, '');
  if( text.length == 0 ) return 1;
  if( text.length % 2 ) return 0;
  do {
    len = text.length
    text = text.replace(regex, '');
  }while(len != text.length)
  return text.length == 0 ? 1 : 0;
}

console.log(verify("(234  [ <abc> <> () [<]> (+++) --- ]  <>  )")) 
 */


/* (2)

Problem
Simplify the implementation below as much as you can.
Even better if you can also improve performance as part of the simplification!
FYI: This code is over 35 lines and over 300 tokens, but it can be written in
5 lines and in less than 60 tokens.
Function on the next page. */

function func(s, a, b)
{
    var match_empty=/^$/ ;
    if (s.match(match_empty))
    {
        return -1;
    }
    else
    {
        var i=s.length-1;
        var aIndex=-1;
        var bIndex=-1;
        while ((aIndex==-1) && (bIndex==-1) && (i>=0))
        {
            if (s.substring(i, i+1) == a)
                aIndex=i;
           if (s.substring(i, i+1) == b)
                bIndex=i;
           i--;
        }
        if (aIndex != -1)
        {
            if (bIndex == -1)
                return aIndex;
           else
                return Math.max(aIndex, bIndex);
        }
        else
        {
            if (bIndex != -1)
                return bIndex;       
         else
                return -1;
        }
    }
};
/* const func = (s,a,b) => {
  let aIndex = -1, bIndex = -1, i = s.length-1
  while(aIndex==-1 && bIndex==-1 && i>=0) {
    aIndex = s.substring(i, i+1) == a ? i : aIndex;
    bIndex = s.substring(i, i+1) == b ? i : bIndex;
    i--;
  }
  return Math.max(aIndex, bIndex)
} */

/* const func = (s, a, b) => {
	s = s.split('').reverse().join(); 
	return Math.max(s.indexOf(a), s.indexOf(b)); 
} 

console.log(func('hhello', 'o', 'e')) */

/* s = 'Hello world hhh'

console.log(s.split('').reverse().join('').indexOf('h'))
console.log(s.length-1) */
const func1 = (s, a, b) => {
	s = s.split('').reverse().join(''); 
	return Math.max(s.length-1-s.indexOf(a), s.length-1-s.indexOf(b)); 
} 

console.log(func1('Hello world hhh', 'h', 'l'))