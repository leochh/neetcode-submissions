class Solution {
    swimInWater(grid) {
        const m = grid.length;
        const n = grid[0].length;
        const dirs = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        let res = Infinity;
        const best = Array.from({ length: m }, () => Array(n).fill(Infinity));

        const dfs = (i, j, t) => {
            if (t >= res) return;
            if (t >= best[i][j]) return;

            best[i][j] = t;

            if (i === m - 1 && j === n - 1) {
                res = t;
                return;
            }

            for (const [dx, dy] of dirs) {
                const x = i + dx;
                const y = j + dy;

                if (x < 0 || y < 0 || x >= m || y >= n) continue;

                dfs(x, y, Math.max(t, grid[x][y]));
            }
        };

        dfs(0, 0, grid[0][0]);
        return res;
    }
}
