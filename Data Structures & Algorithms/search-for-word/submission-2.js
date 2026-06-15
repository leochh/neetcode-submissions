class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const m = board.length, n = board[0].length;
        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        const seen = Array.from({length: m}, () => Array(n).fill(0));

        const backtrack = (i, j, k) => {
            if(board[i][j] !== word[k] || seen[i][j]) return false;
            if(k === word.length - 1) return true;
            seen[i][j] = 1;
            for(let [dx, dy] of dirs) {
                const x = i + dx;
                const y = j + dy;
                if(x < 0 || y < 0 || x >= m || y >= n) continue;
                if(backtrack(x, y, k+1)) return true;
            }
            seen[i][j] = 0;
            return false;
        }

        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(backtrack(i, j, 0)) return true;
            }
        }
        return false;
    }
}
