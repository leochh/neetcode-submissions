class Solution {
    /* */
    twoSum(nums, target) {
        const map = new Map(); /* [num]: index */
        for(let i=0; i<nums.length; i++) {
            const n = nums[i];
            const m = target - n;
            if(map.has(m)) {
                return [map.get(m), i];
            }
            map.set(n, i);
        }
        return [];
    }
}
