class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if(!matrix.length) return -1;
        // find the upper bound
        let t = 0, b = matrix.length;
        while (t < b) {
            const m = t + Math.floor((b-t)/2);
            if (matrix[m][0] > target) {
                b = m;
            } else {
                t = m + 1;
            }
        }
        
        // check row to find target
        const row = t > 0 ? matrix[t-1] : matrix[t];
        let l = 0, r = row.length - 1;
        while(l <= r) {
            const m = l + Math.floor((r-l)/2);
            if (row[m] === target) return true;
            if (row[m] < target) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return false;
    }
}
