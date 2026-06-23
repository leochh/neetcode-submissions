class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const m = matrix.length;
        const n = matrix[0].length;
        const zeroRow = matrix[0].some(v => v === 0);
        const zeroCol = matrix.some(v => v[0] === 0);
        for(let i = 1; i < m; i++) {
            for(let j = 1; j < n; j++) {
                if(matrix[i][j] === 0) {
                    matrix[i][0] = matrix[0][j] = 0;
                }
            }
        }
        for(let i = 1; i < m; i++) {
            for(let j = 1; j < n; j++) {
                if(matrix[i][0] === 0 || matrix[0][j] === 0) {
                    matrix[i][j] = 0;
                }
            }
        }
        if(zeroRow) matrix[0].fill(0);
        if(zeroCol) matrix.forEach(v => v[0] = 0);
    }
}
