class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const m = grid.length;
        const n = grid[0].length;

        const parents = Array.from({ length: m * n }, (_, i) => i);

        const find = (x) => {
            if (parents[x] !== x) parents[x] = find(parents[x]);
            return parents[x];
        };
        const union = (p, q) => (parents[find(q)] = find(p));
        const connected = (p, q) => find(p) === find(q);

        const cells = [];
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                cells.push([grid[i][j], i, j]);
            }
        }
        cells.sort((a, b) => a[0] - b[0]); // sort by t
        const pos = (x, y) => x * n + y;

        const dirs = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        for (const [t, x, y] of cells) {
            for (const [dx, dy] of dirs) {
                const r = x + dx;
                const c = y + dy;
                if (r < 0 || c < 0 || r >= m || c >= n) continue;
                if (grid[r][c] <= t) union(pos(x, y), pos(r, c));
            }
            if (connected(pos(0, 0), pos(m - 1, n - 1))) return t;
        }
    }
}
