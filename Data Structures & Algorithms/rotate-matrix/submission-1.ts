class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix: number[][]): void {
        const n = matrix.length;

        // flip vertically
        for(let i = 0; i < Math.floor(n / 2); i++) {
            const _i = n - 1 - i;
            for(let j = 0; j < n; j++) {
                [matrix[i][j], matrix[_i][j]] = [matrix[_i][j], matrix[i][j]];
            }
        }

        // transpose
        for(let i = 0; i < n; i++) {
            for(let j = i + 1; j < n; j++) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }
    }
}
