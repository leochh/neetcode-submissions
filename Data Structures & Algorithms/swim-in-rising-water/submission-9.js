class Solution {
    swimInWater(grid) {
        const m = grid.length;
        const n = grid[0].length;
        const dirs = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        const mq = new MinPriorityQueue((a) => a[0]); // [t, i, j]
        mq.push([grid[0][0], 0, 0]);
        const visited = Array.from({ length: m }, () => Array(n).fill(false));

        while (!mq.isEmpty()) {
            const [t, i, j] = mq.dequeue();
            if (i === m - 1 && j === n - 1) return t;
            for (const [dx, dy] of dirs) {
                const x = i + dx;
                const y = j + dy;
                if (x < 0 || y < 0 || x >= m || y >= n) continue;
                if (visited[x][y]) continue;
                visited[x][y] = true;
                mq.enqueue([Math.max(t, grid[x][y]), x, y]);
            }
        }
    }
}
