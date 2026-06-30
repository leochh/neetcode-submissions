class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const m = grid.length;
        const n = grid[0].length;

        const q = [];
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(grid[i][j] === 0) q.push([i, j]);
            }
        }

        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        let head = 0;
        let steps = 0;
        const INF = 2147483647;
        while(head < q.length) {
            const size = q.length - head;
            steps++;
            for(let i = 0; i < size; i++) {
                const [r, c] = q[head++];
                for(const [dx, dy] of dirs) {
                    const [x, y] = [r + dx, c + dy];
                    if(x < 0 || y < 0 || x >= m || y >= n) continue;
                    if (grid[x][y] !== INF) continue;
                    grid[x][y] = steps;
                    q.push([x, y]);
                }
            }
        }
    }
}
