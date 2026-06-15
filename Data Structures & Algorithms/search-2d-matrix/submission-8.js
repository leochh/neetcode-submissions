class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        /* improved 2 pass */
        const ROWS = matrix.length, COLS = matrix[0].length;
        let t = 0, b = ROWS - 1, row = 0;
        
        while (t <= b) {
            row = t + Math.floor((b-t)/2);
            if (matrix[row][COLS-1] < target) {
                t = row + 1; // top becomes next row
            } else if (matrix[row][0] > target) {
                b = row - 1; // btm becomes prev row
            } else {
                break; // current row is target row
            }
        }
        if (t > b) {
            return false; // passed boundaries
        }
        let l = 0, r = COLS - 1;
        while (l <= r) {
            const m = l + Math.floor((r-l)/2);
            if (matrix[row][m] < target) {
                l = m + 1;
            } else if (matrix[row][m] > target) {
                r = m - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
