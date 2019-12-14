//You are given an array of integers. On each move you are allowed to increase exactly one of its element by one.
function arrayChange(a) {
    ans=0;
    for(i=0; i<a.length; i++) {
        /* while(a[i+1]<=a[i]) {
            a[i+1]++;
            ans++;  }*/
            if(a[i+1]<=a[i]){
                ans += a[i]+1-a[i+1];
                a[i+1] = a[i]+1;
            }           
        }return ans;
    }

console.log(arrayChange([-1000, 0, -2, 0]));
//5