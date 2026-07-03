class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const m = grid.length;
        const n = grid[0].length;
        const dirs = [[-1,0],[1,0],[0,-1],[0,1]];

        let q = [[0, 0]];
        let t = grid[0][0];
        grid[0][0] = -1;

        while(q.length) {
            const next = [];
            let head = 0;
            let nextT = Infinity;
            while(head < q.length) {
                const [x, y] = q[head++];
                if(x === m - 1 && y === n -1) return t;
                let done = true;
                for(const [dx, dy] of dirs) {
                    const [i, j] = [x + dx, y + dy];
                    if(i < 0 || j < 0 || i >= m || j >= n) continue;
                    if(grid[i][j] == -1) continue;
                    if(grid[i][j] <= t) {
                        grid[i][j] = -1;
                        q.push([i, j]);
                    } else {
                        done = false;
                        nextT = Math.min(nextT, grid[i][j]);
                    }
                }
                if(!done) next.push([x, y]);
            }
            t = nextT;
            q = next;
        }
    }
}
