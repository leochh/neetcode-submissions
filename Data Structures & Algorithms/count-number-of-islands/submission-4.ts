class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const m = grid.length, n = grid[0].length;
        const parents: number[] = Array.from({length: m * n + 1}, (_, i) => i);
        const find = (x: number) => {
            if(parents[x] !== x) parents[x] = find(parents[x]);
            return parents[x];
        }
        let comps = parents.length;
        const union = (u, v) => {
            const pu = find(u);
            const pv = find(v);
            if(pu !== pv) {
                parents[pu] = pv;
                comps--;
            }
        }
        const pos = (i, j) => i * n + j;
        const ZERO = m * n;
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(grid[i][j] === '0') {
                    union(ZERO, pos(i, j));
                } else {
                    for(const [dx, dy] of [[-1,0],[1,0],[0,-1],[0,1]]) {
                        const [x, y] = [i + dx, j + dy];
                        if(x < 0 || y < 0 || x >=m || y >= n) continue;
                        if(grid[x][y] === '0') continue;
                        union(pos(i, j), pos(x, y));
                    }
                }
            }
        }
        return comps - 1;
    }
}
