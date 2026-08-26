class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const freq = new Map();
        for(const num of nums) {
            freq.set(num, (freq.get(num) ?? 0) + 1);
        }
        const res = [];
        for(let i = 0; i < nums.length - 2; i++) {
            freq.set(nums[i], freq.get(nums[i]) - 1);
            if(i > 0 && nums[i] === nums[i-1]) continue;
            for(let j = i + 1; j < nums.length - 1; j++) {
                freq.set(nums[j], freq.get(nums[j]) - 1);
                if(j > i + 1 && nums[j] === nums[j-1]) continue;
                const target = -(nums[i] + nums[j]);
                if(freq.get(target) > 0) {
                    res.push([nums[i], nums[j], target]);
                }
            }
            for(let j = i + 1; j < nums.length - 1; j++) {
                freq.set(nums[j], freq.get(nums[j]) + 1);
            }
        }
        return res;
    }
}
