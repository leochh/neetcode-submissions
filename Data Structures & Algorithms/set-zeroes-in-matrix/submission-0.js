class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const m = matrix.length;
        const n = matrix[0].length;
        const rows = new Set();
        const cols = new Set();
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(matrix[i][j] === 0) {
                    rows.add(i);
                    cols.add(j);
                }
            }
        }
        for(const i of rows) {
            matrix[i].fill(0);
        }
        for(const j of cols) {
            matrix.forEach(row => row[j] = 0);
        }
    }
}
