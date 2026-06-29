class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const n = cost.length;
        const memo = Array(n + 1).fill(-1);
        const dfs = (i) => {
            if (i <= 1) return 0;
            if(memo[i] !== -1) return memo[i];
            const res = Math.min(dfs(i - 1) + cost[i - 1], dfs(i - 2) + cost[i - 2]);
            memo[i] = res;
            return res;
        };
        return dfs(n);
    }
}
