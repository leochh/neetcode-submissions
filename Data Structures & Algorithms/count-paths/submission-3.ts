class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number): number {
        const memo = Array.from({length: m}, () => Array(n).fill(-1));

        const dfs = (r, c) => {
            if(r === 0 || c === 0) return 1;
            if(memo[r][c] !== -1) return memo[r][c];
            const res = dfs(r - 1, c) + dfs(r, c - 1);
            memo[r][c] = res;
            return res;
        }

        return dfs(m - 1, n - 1);
    }
}
