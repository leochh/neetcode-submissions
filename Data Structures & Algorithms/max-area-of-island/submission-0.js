class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const m = grid.length;
        const n = grid[0].length;

        const dirs = [
            [ -1, 0 ],
            [1, 0],
            [0, -1],
            [0, 1]
            ];
        let res = 0;
        let cur = 0;
        const dfs = (i, j) => {
            grid[i][j] = 0;
            cur++;
            for(const [dx, dy] of dirs) {
                const x = i + dx;
                const y = j + dy;
                if (x < 0 || y < 0 || x >= m || y >= n) continue;
                if (grid[x][y] !== 1) continue;
                dfs(x, y);
            }
            res = Math.max(res, cur);
        }
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(grid[i][j] === 1) {
                    cur = 0;
                    dfs(i, j)
                }
            }
        }
        return res;
    }
}
