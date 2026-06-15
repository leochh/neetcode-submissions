class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // brute force
        // loop through all triplets
        // collect those sum are 0
        const res = [];
        for(let i=0; i<nums.length-2; i++) {
            for(let j=i+1; j<nums.length-1; j++) {
                for(let k=j+1; k<nums.length; k++) {
                    if (nums[i]+nums[j]+nums[k]===0) {
                        res.push([nums[i], nums[j], nums[k]].sort());
                    }
                }
            }
        }
        const strs = res.map(v => v.join(","));
        for(let i=0; i<strs.length; i++) {
            for(let j=i+1; j<strs.length; j++) {
                if(strs[i]===strs[j]) res[j] = null;
            }
        }
        return res.filter(v => v!==null);
        
    }
}
