class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const m = grid.length;
        const n = grid[0].length;

        let res = Infinity;
        const memo = new Set();
        const enc = (i, j, t) => i * n + j + t * m * n;
        const dirs = [[-1,0],[1,0],[0,-1],[0,1]];
        const dfs = (i, j, t) => {
            if(t >= res) return;
            if(memo.has(enc(i, j, t))) return;
            memo.add(enc(i, j, t));
            if( i === m - 1 && j === n - 1) {
                res = Math.min(res, t);
                return;
            }
            const v = grid[i][j];
            grid[i][j] = -1;
            for(const [dx, dy] of dirs) {
                const x = i + dx;
                const y = j + dy;
                if(x < 0 || y < 0 || x >= m || y >= n) continue;
                if(grid[x][y] === -1) continue;
                dfs(x, y, Math.max(t, grid[x][y]));
            }
            grid[i][j] = v;
        }
        dfs(0, 0, grid[0][0]);
        return res;
    }
}
