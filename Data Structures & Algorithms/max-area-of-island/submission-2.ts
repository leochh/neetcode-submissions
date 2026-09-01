class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        const m = grid.length, n = grid[0].length;

        const dirs = [
            [-1,0],[1,0],[0,-1],[0,1]
        ];

        const dfs = (i, j): number => {
            if(grid[i][j] === 0) return 0;
            let res = 1;
            grid[i][j] = 0;
            for(const [dx, dy] of dirs) {
                const [x, y] = [i+dx, j+dy];
                if(x < 0 || y < 0 || x >= m || y >= n) continue;
                if(grid[x][y] !== 1) continue;
                res += dfs(x, y);
            }
            return res;
        }

        let max = 0;
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                max = Math.max(max, dfs(i, j));
            }
        }
        return max;
    }
}
