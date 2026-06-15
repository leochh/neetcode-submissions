class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const m = heights.length, n = heights[0].length;
        const pacific = Array.from({length: m}, () => Array(n).fill(false));
        const atlantic = Array.from({length: m}, () => Array(n).fill(false));

        for(let i = 0; i < m; i++) {
            pacific[i][0] = true
            atlantic[i][n-1] = true;
        }
        for(let j = 0; j < n; j++) {
            pacific[0][j] = true;
            atlantic[m-1][j] = true;
        }

        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        const dfs = (i, j, map) => {
            map[i][j] = true;
            for(const [dx, dy] of dirs) {
                const [x, y] = [i + dx, j + dy];
                if(x < 0 || y < 0 || x >=m || y >= n) continue;
                if(map[x][y] || heights[x][y] < heights[i][j]) continue;
                dfs(x, y, map);
            }
        }

        for(let i = 0; i <m; i++) {
            dfs(i, 0, pacific)
            dfs(i, n-1, atlantic)
        }

        for(let j = 0; j <n; j++) {
            dfs(0, j, pacific);
            dfs(m-1, j, atlantic);
        }

        const res = [];
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(pacific[i][j] && atlantic[i][j]) res.push([i, j]);
            }
        }
        return res;
    }
}
