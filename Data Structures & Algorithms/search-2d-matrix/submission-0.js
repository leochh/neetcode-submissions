class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        /* naive solution -> loop */
        for(const row of matrix) {
            for(const c of row) {
                if(c === target) return true;
            }
        }
        return false;
    }
}
