class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        const n = matrix.length;
        // reverse vertically
        for(let i = 0; i < n / 2; i++) {
            [matrix[i], matrix[n-1-i]] = [matrix[n-1-i], matrix[i]];
        }
        // transpose diagally
        for(let i = 0; i < n; i++) {
            for(let j = i; j < n; j++) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }
    }
}
