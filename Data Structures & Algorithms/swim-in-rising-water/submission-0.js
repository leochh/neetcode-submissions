class Solution {
    swimInWater(grid) {
        const m = grid.length;
        const n = grid[0].length;
        const dirs = [[-1,0],[1,0],[0,-1],[0,1]];

        let q = [[0, 0]];
        const visited = Array.from({ length: m }, () => Array(n).fill(false));
        visited[0][0] = true;

        let t = grid[0][0];

        while (q.length) {
            const next = [];

            while (q.length) {
                const [x, y] = q.shift();

                if (x === m - 1 && y === n - 1) return t;

                let blocked = false;

                for (const [dx, dy] of dirs) {
                    const r = x + dx;
                    const c = y + dy;

                    if (r < 0 || c < 0 || r >= m || c >= n) continue;
                    if (visited[r][c]) continue;

                    if (grid[r][c] <= t) {
                        visited[r][c] = true;
                        q.push([r, c]); // same t, continue expanding
                    } else {
                        blocked = true;
                    }
                }

                if (blocked) next.push([x, y]);
            }

            q = next;
            t++;
        }
    }
}
