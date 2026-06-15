class Solution {
    /* brute force */
    isValidSudoku(board) {
        // 1. check all rows no duplicates
        for(let i=0; i<board.length; i++) {
            const row = [];
            for(let j=0; j<board[i].length; j++) {
                const e = board[i][j];
                if(e===".") continue;
                const n = Number(e);
                if(row[n]) return false;
                row[n] = true; 
            }
        }
        // 2. check all columns no duplicates
        for(let j=0; j<board[0].length; j++) {
            const col = [];
            for(let i=0; i<board.length; i++) {
                const e = board[i][j];
                if(e===".") continue;
                const n = Number(e);
                if(col[n]) return false;
                col[n] = true;
            }
        }
        // 3. check all cubes no duplicates
        for(let i=0; i<2; i++) {
            for(let j=0; j<2; j++) {
                const cube = [];
                const offset_i = 3 * i;
                const offset_j = 3 * j;
                for(let k=0; k<board.length; k++) {
                    const x_i = (k%3) + offset_i;
                    const x_j = (k-k%3)/3 + offset_j;
                    const e = board[x_i][x_j];
                    if(e===".") continue;
                    const n = Number(e);
                    if(cube[n]) {
                    console.log(`cube ${[k, x_i, x_j, e]} ${n} value: ${cube[n]}`)
                    return false;
                }
                    cube[n]= true;
                }
            }
        }
        return true;
    }
}
