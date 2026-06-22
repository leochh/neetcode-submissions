class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        // UF
        const m = grid.length;
        const n = grid[0].length;
        const pos = (i, j) => i * n + j;

        const parents = Array.from({ length: m * n + 1 }, (_, i) => i);
        let comps = parents.length;
        const find = (x) => {
            if (parents[x] !== x) parents[x] = find(parents[x]);
            return parents[x];
        };
        const union = (p, q) => {
            const rp = find(p),
                rq = find(q);
            if (rp !== rq) {
                parents[rq] = rp;
                comps--;
            }
        };
        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        const ZERO = m * n;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === "0") {
                    union(ZERO, pos(i, j));
                } else {
                    for(const [dx, dy] of dirs) {
                        const x = i + dx;
                        const y = j + dy;
                        if(x < 0 || y < 0 || x >=m || y >= n || grid[x][y] !== '1') continue;
                        union(pos(x, y), pos(i, j));
                    }
                }
            }
        }
        return comps - 1;
    }
}
