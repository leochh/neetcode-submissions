class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const m = grid.length;
        const n = grid[0].length;

        const flood = (i, j) => {
            if (i < 0 || j < 0 || i >= m || j >= n) return;
            if (grid[i][j] === "0") return;
            grid[i][j] = '0';
            for (const [dx, dy] of [
                [-1, 0],
                [1, 0],
                [0, -1],
                [0, 1],
            ]) {
                flood(i + dx, j + dy);
            }
        };

        let count = 0;

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === "1") {
                    count++;
                    flood(i, j);
                }
            }
        }

        return count;
    }
}
