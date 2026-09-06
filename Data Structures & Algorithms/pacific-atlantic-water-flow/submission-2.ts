class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        const m = heights.length;
        const n = heights[0].length;

        const pacific = Array.from({length: m}, () => Array(n).fill(false));
        const atlantic = Array.from({length: m}, () => Array(n).fill(false));

        const dirs = [[-1,0], [1,0], [0,-1], [0,1]];

        const dfs = (r, c, grid) => {
            grid[r][c] = true;
            for(const [dr, dc] of dirs) {
                const [nr, nc] = [r + dr, c + dc];
                if(nr < 0 || nc < 0 || nr >= m || nc >= n) continue;
                if(grid[nr][nc]) continue;
                if(heights[nr][nc] < heights[r][c]) continue;
                grid[nr][nc] = true;
                dfs(nr, nc, grid);
            }
        }

        for(let i = 0; i < m; i++) {
            pacific[i][0] = true;
            atlantic[i][n-1] = true;
            dfs(i, 0, pacific);
            dfs(i, n - 1, atlantic);
        }

        for(let j = 0; j < n; j++) {
            pacific[0][j] = true;
            atlantic[m-1][j] = true;
            dfs(0, j, pacific);
            dfs(m-1, j, atlantic);
        }

        const res = [];
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(pacific[i][j] && atlantic[i][j])
                    res.push([i, j]);
            }
        }

        return res;

    }
}
