class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const m = grid.length, n = grid[0].length;
        const dirs = [
            [-1,0], [1,0], [0,-1], [0,1]
        ];
        const flood = (i, j) => {
            grid[i][j] = '0';
            for(const [dx, dy] of dirs) {
                const [x, y] = [i + dx, j + dy];
                if(x < 0 || y < 0 || x >= m || y >= n) continue;
                if(grid[x][y] === '0') continue;
                flood(x, y);
            }
        }

        let count = 0;
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(grid[i][j] === '1') {
                    count++;
                    flood(i, j);
                }
            }
        }
        return count;
    }
}
