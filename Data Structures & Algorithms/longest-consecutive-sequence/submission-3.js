class Solution {
    /* sort */
    longestConsecutive(nums) {
        nums.sort((a,b)=>a-b);
        if (!nums.length) return 0;
        let max = 1;
        let current = 1;
        for(let i=1; i<nums.length; i++) {
            if(nums[i]-1===nums[i-1]) {
                current++;
                max = Math.max(current, max)
            } else if (nums[i]===nums[i-1]) {

            } else {
                current = 1;
            }
        }
        return max;
    }
}
