class Solution {
    /* brute force */
    isValidSudoku(board) {
        // <[n], [i, j, k]>
        // row, col, cube
        // loop through all elements in board
        // check if index is set on map

        const map = {};
        for (let i=0; i<board.length; i++) {
            for(let j=0; j<board.length; j++) {
                const n = board[i][j];
                const k = Math.floor(i/3)*3 + Math.floor(j/3);
                if(n===".") continue; // skip unknowns
                const indices = map[n] || [[], [], []];
                if(indices[0][i] || indices[1][j] || indices[2][k]){
                    return false;
                }
                indices[0][i]=true;
                indices[1][j]=true;
                indices[2][k]=true;
                map[n] = indices;
            }
        }
        return true;
    }
}
