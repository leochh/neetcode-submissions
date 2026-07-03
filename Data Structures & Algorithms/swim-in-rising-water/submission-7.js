class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const m = grid.length;
        const n = grid[0].length;

        let l = Math.max(grid[0][0], grid[m - 1][n - 1]);
        let r = Math.max(...grid.flat());

        const dirs = [[-1,0],[1,0],[0,-1],[0,1]];

        const canReach = (t) => {
            const visited = Array.from({ length: m }, () => Array(n).fill(false));

            const dfs = (i, j) => {
                if (i < 0 || j < 0 || i >= m || j >= n) return false;
                if (visited[i][j]) return false;
                if (grid[i][j] > t) return false;

                if (i === m - 1 && j === n - 1) return true;

                visited[i][j] = true;

                for (const [dx, dy] of dirs) {
                    if (dfs(i + dx, j + dy)) return true;
                }

                return false;
            };

            return dfs(0, 0);
        };

        while (l < r) {
            const mid = Math.floor((l + r) / 2);
            if (canReach(mid))  r = mid;
            else  l = mid + 1;
        }
        return l;
    }
}                         