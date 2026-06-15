class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const memo = Array.from({length: m}, () => Array(n).fill(-1));

        const dfs = (i, j) => {
            if(memo[i][j] !== -1) return memo[i][j];
            if(i === 0 || j === 0) return 1;
            const res = dfs(i - 1, j) + dfs(i, j - 1);
            memo[i][j] = res;
            return res;
        }
        return dfs(m-1, n-1);
    }
}
