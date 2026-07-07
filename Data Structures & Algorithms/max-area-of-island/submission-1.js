class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const m = grid.length;
        const n = grid[0].length;

        const parents = Array.from({length: m * n}, (_, i) => i);
        const size = Array(m * n).fill(1);
        const find = (x) => {
            if(parents[x] !== x) parents[x] = find(parents[x]);
            return parents[x];
        }
        const union = (u, v) => {
            const pu = find(u), pv = find(v);
            if(pu !== pv) {
                parents[pv] = pu;
                size[pu] += size[pv];
            }
        }
        const pos = (x, y) => x * n + y;

        let res = 0;
        const dirs = [[-1,0],[1,0],[0,-1],[0,1]];
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(grid[i][j] !== 1) continue;
                for(const [dx, dy] of dirs) {
                    const [x, y] = [i + dx, j + dy];
                    if (x < 0 || y < 0 || x >= m || y >= n) continue;
                    if (grid[x][y] !== 1) continue;
                    union(pos(i, j), pos(x, y));
                }
                const p = find(pos(i, j));
                res = Math.max(res, size[p]);
            }
        }
        return res;

    }
}
