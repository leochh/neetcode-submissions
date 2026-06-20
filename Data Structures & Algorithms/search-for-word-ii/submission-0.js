class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        let maxLen = 0;
        const set = new Set();
        for (const w of words) {
            maxLen = Math.max(maxLen, w.length);
            set.add(w);
        }
        const m = board.length;
        const n = board[0].length;
        const visited = Array.from({ length: m }, () => Array(n).fill(false));

        const res = new Set();
        const dfs = (i, j, str) => {
            if (i < 0 || j < 0 || i >= m || j >= n) return;
            if (visited[i][j]) return;
            str += board[i][j];
            if(set.has(str)) res.add(str);
            if (str.length >= maxLen) return;
            visited[i][j] = true;
            for (const [dx, dy] of [
                [-1, 0],
                [1, 0],
                [0, -1],
                [0, 1],
            ]) {
                dfs(i + dx, j + dy, str);
            }
            visited[i][j] = false;
        };
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                dfs(i, j, "");
            }
        }
        return [...res.values()];
    }
}
