class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        const m = matrix.length;
        const n = matrix[0].length;

        const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];
        const memo = Array.from({length: m}, () => Array(n).fill(-1));

        const dfs = (i, j) => {
            if(memo[i][j] !== -1) return memo[i][j];
            let res = 0;
            for(const [dx, dy] of dirs) {
                const [x, y] = [i + dx, j + dy];
                // out of bounds
                if(x < 0 || y < 0 || x >= m || y >= n) continue;
                // small or equal
                if(matrix[x][y] <= matrix[i][j]) continue;
                // take max of 4 sides
                res = Math.max(res, dfs(x, y));
            }
            // add itself
            res++;
            memo[i][j] = res;
            return res;
        }
        let max = 0;
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                max = Math.max(max, dfs(i, j))
            }
        }
        return max;
    }
}
