class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        const memo = Array(n).fill(-1);

        const dfs = (i) => {
            if(i < 0) return 0;
            if(memo[i] !== -1) return memo[i];
            const res = Math.max(
                nums[i] + dfs(i-2),
                dfs(i-1)
            );
            memo[i] = res;
            return res;
        }
        return dfs(n-1);
    }
}
