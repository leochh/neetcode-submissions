class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const size = board.length;
        const rows = Array.from({length: size}, () => Array(size).fill(false));
        const cols = Array.from({length: size}, () => Array(size).fill(false));
        const blocks = Array.from({length: size}, () => Array(size).fill(false));


        for(let r = 0; r < size; r++) {
            for(let c = 0; c < size; c++) {
                const v = board[r][c];
                if(v === '.') continue;
                const b = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                for(const area of [rows[r], cols[c], blocks[b]]) {
                    if(area[+v]) return false;
                    area[+v] = true;
                }
            }
        }
        return true;
    }
}
