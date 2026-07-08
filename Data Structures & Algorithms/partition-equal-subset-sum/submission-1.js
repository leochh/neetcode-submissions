class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const sum = nums.reduce((a, b) => a + b, 0);
        // odd
        if (sum % 2) return false;

        const n = nums.length;
        const memo = Array.from({ length: sum / 2 + 1 }, () => Array(n).fill(null));

        // (i, sum) => bool
        const dfs = (i, target) => {
            if (i === n) return target === 0;
            if (target < 0) return false;
            if (memo[target][i] !== null) return memo[target][i];
            const res = dfs(i + 1, target) || dfs(i + 1, target - nums[i]);
            memo[target][i] = res;
            return res;
        };

        return dfs(0, sum / 2);
    }
}

