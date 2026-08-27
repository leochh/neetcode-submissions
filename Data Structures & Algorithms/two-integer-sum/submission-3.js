class Solution {
    /* */
    twoSum(nums, target) {
       const map = new Map();
       for(let i = 0; i < nums.length; i++) {
            const n = nums[i];
            const comp = target - n;
            if(map.has(comp)) {
                return [i, map.get(comp)];
            }
            map.set(n, i);
       }
       return [];
    }
}
