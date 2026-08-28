class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const n = board.length;
        const rows = Array.from({length: n}, () => Array(n).fill(false));
        const cols = Array.from({length: n}, () => Array(n).fill(false));
        const blocks = Array.from({length: n}, () => Array(n).fill(false));

        for(let r = 0; r < n; r++) {
            for(let c = 0; c < n; c++) {
                if(board[r][c] === '.') continue;
                const x = +board[r][c] - 1;
                const b = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                if(rows[r][x] || cols[c][x] || blocks[b][x]) return false;
                rows[r][x] = cols[c][x] = blocks[b][x] = true;
            }
        }
        return true;
    }
}
