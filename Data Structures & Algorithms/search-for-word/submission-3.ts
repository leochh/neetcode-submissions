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
        const track = [];
        const backtrack = (r, c) => {
            if(track.length === word.length) return true;
            if(r < 0 || c < 0 || r >= m || c >= n) return false;
            if(word[track.length] !== board[r][c]) return false;
            const w = board[r][c];
            track.push(w);
            board[r][c] = '';
            for(const [dx, dy] of dirs) {
                const [x, y] = [r + dx, c + dy];
                if(backtrack(x, y)) return true;
            }
            track.pop();
            board[r][c] = w;
            return false;
        }

        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(backtrack(i, j)) return true;
            }
        }
        return false;
    }
}
