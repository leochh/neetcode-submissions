class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0, fast = 0;
        while(true) {
            slow = nums[slow];
            fast = nums[nums[fast]];
            if(slow === fast) break;
        }
        let p = 0;
        while(true) {
            slow = nums[slow];
            p = nums[p];
            if(p === slow) return p;
        }

    }
}
