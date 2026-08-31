class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        const m = board.length, n = board[0].length;
        const dirs = [
            [-1,0], [1,0], [0,-1],[0,1]
        ];
        const backtrack = (r, c, k) => {
            if(k === word.length) return true;
            if(r < 0 || c < 0 || r >= m || c >= n) return false;
            if(word[k] !== board[r][c]) return false;
            const w = board[r][c];
            board[r][c] = '';
            for(const [dx, dy] of dirs) {
                const [x, y] = [r + dx, c + dy];
                if(backtrack(x, y, k + 1)) return true;
            }
            board[r][c] = w;
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

