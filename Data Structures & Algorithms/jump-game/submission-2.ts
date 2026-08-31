class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums: number[]): boolean {
        let furtherst = 0;
        for(let i = 0; i < nums.length - 1; i++) {
            furtherst = Math.max(furtherst, i + nums[i]);
            if(furtherst === i) return false;
        }
        return true;
    }
}
