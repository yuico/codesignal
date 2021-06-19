const fourSum = (nums, target) => {
  if (nums.length < 4) return [];

  let len = nums.length;
  let res = [];
  let l = 0;
  let r = 0;
  let sum = 0;

  nums.sort((a, b) => (a - b));

  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
    if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue;

    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
      if (nums[i] + nums[j] + nums[len - 1] + nums[len - 2] < target) continue;

      l = j + 1;
      r = len - 1;

      while (l < r) {
        sum = nums[i] + nums[j] + nums[l] + nums[r];

        if (sum < target) {
          l++;
        } else if (sum > target) {
          r--;
        } else {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          while (l < r && nums[l] === nums[l + 1]) l++;
          while (l < r && nums[r] === nums[r - 1]) r--;
          l++;
          r--;
        }
      }
    }
  }

  return res;
}
nums = [1,0,-1,0,-2,2], target = 0
console.log(fourSum(nums, target))