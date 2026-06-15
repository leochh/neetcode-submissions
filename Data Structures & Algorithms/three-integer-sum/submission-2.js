class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const map = {}; // <sum -> smaller -> [idx1, idx2]
        for(let i=0; i<nums.length-1; i++) {
            for(let j=i+1; j<nums.length; j++) {
                const sum = nums[i] + nums[j];
                map[-sum] = map[-sum] || {};
                const key = Math.min(nums[i], nums[j]);
                const val = [i, j];
                map[-sum][key] = val;
            }
        }
        const res = [];
        for(let i=0; i<nums.length; i++) {
            const v = nums[i];
            if(map[v]) {
                for(const [j, k] of Object.values(map[v])) {
                    const values = [nums[i], nums[j], nums[k]];
                    if(nums[i]===Math.min(...values) && i !== j && i !== k) {
                        res.push(values);
                    }
                }
            }
            map[v] = null;
        }
        return res;
    }
}
