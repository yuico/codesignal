function makeArrayConsecutive2(s){
  let a=s.sort(),n=0;
  for(let i=a.length-1; i>0; i--) n+=(a[i]-a[i-1]-1);    
  return n;
 }
  let s = [4, 2, 7, 18];
makeArrayConsecutive2(s);