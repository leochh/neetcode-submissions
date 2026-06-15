class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        /* one pass binary */
        const R = matrix.length, C = matrix[0].length;
        let l=0, r = R * C - 1;
        while (l <= r) {
            const m = l + Math.floor((r-l)/2);
            const nr = Math.floor(m / C);
            const nc = m % C;
            const v = matrix[nr][nc];
            if (v > target) {
                r = m - 1;
            } else if (v < target) {
                l = m + 1;
            } else {
                return true;
            }
        }
        return false;

    }
}
