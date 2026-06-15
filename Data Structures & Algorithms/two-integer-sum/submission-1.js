class Solution {
    /* brute force
     */
    twoSum(nums, target) {
        for(let i=0; i<nums.length; i++) {
            const n = nums[i];
            for(let j=i+1; j<nums.length; j++) {
                const m = nums[j];
                if (n+m === target) return [i,j];
            }
        }
        return [];
    }
}
