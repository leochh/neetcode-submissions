class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        if(n === 1) return nums[0];
        const dp = (s, e, memo) => {
            if(e < s) return 0;
            if(memo[e] !== -1) return memo[e];
            const res = Math.max(
                nums[e] + dp(s, e - 2, memo),
                dp(s, e - 1, memo)
            );
            memo[e] = res;
            return res;
        }
        const memo1 = Array(n).fill(-1);
        const memo2 = Array(n).fill(-1);
        return Math.max(
            dp(0, n - 2, memo1),
            dp(1, n - 1, memo2)
        );
    }
}
