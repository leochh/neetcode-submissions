class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums: number[]): number {
        let curEnd = 0, furthest = 0, steps = 0;
        for(let i = 0; i < nums.length - 1; i++) {
            furthest = Math.max(furthest, i + nums[i]);
            if(i === curEnd) {
                curEnd = furthest;
                steps++;
            }
        }
        return steps;
    }
}
