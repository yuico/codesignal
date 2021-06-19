const threeSumClosest = (nums, target) => { 
    let diff = Number.MAX_SAFE_INTEGER,  sz = nums.length;
    nums.sort((a,b)=>a-b)
    for (let i = 0; i < sz && diff != 0; ++i) {
        let mi = i + 1, hi = sz - 1;
        while (mi < hi) {
            let sum = nums[i] + nums[mi] + nums[hi];
            if (Math.abs(target - sum) < Math.abs(diff))
                diff = target - sum;
            if (sum < target)
                ++mi;
            else
                --hi;
        }
    }
    return target - diff;
}

console.log(threeSumClosest([-1,2,1,-4], 1)) //2
console.log(threeSumClosest([1,1,1,0], 100)) //3
console.log(threeSumClosest([0,0,0,0], 100)) //0
console.log(threeSumClosest([0,2,1,-3], 1)) //0