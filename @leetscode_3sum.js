const threeSum = (nums) => {
  let ans = []
  let tem = true;
  nums.sort((a,b)=>a-b)
  console.log(nums)
  const len = nums.length
  for(let i=0; i<len; i++){
    for(let j=i+1; j<len; j++){
      for(let k=j+1; k<len; k++){
        if(nums[k] == nums[k-1]) continue;
        if(nums[i] + nums[j] + nums[k] == 0) {
          for(l=0; l<ans.length; l++){
            if(l==0) { ans.push([nums[i], nums[j], nums[k]])
            }else if(JSON.stringify(ans[l]) == JSON.stringify([nums[i], nums[j], nums[k]])) {
              continue
            }
          }
          
        }
      }
    }
  } return ans
}

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]))