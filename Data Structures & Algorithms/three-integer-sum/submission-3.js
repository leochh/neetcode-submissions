class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a-b);
        const map = {};
        for(const n of nums) {
            map[n] = (map[n] || 0)+1;
        }
        const res = [];
        for(let i=0; i<nums.length; i++) {
            map[nums[i]]--;
            // check for dups
            if(i>0 && nums[i]===nums[i-1]) continue;

            for(let j=i+1; j<nums.length; j++) {
                map[nums[j]]--;
                if(j > i+1 && nums[j] === nums[j-1]) continue;
                const v = -nums[i] -nums[j];
                if(map[v] > 0) {
                    res.push([nums[i], nums[j], v]);
                }
            }
            for(let j=i+1; j<nums.length; j++) {
                map[nums[j]]++
            }
        }
        return res;
    }
}
