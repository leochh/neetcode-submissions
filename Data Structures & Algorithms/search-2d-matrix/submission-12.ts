class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const m = matrix.length;
        const n = matrix[0].length;
        // find row where row[-1] >= target
        const getRow = () => {
            let l = 0, r = m;
            while(l < r) {
                const mid = l + Math.floor((r - l) / 2);
                if(matrix[mid].at(-1) >= target) {
                    r = mid;
                } else {
                    l = mid + 1;
                }
            }
            return l;
        }
        const rIdx = getRow();
        if(rIdx >= m) return false;
        const row = matrix[rIdx];
        let [l, r] = [0, n - 1];
        while(l <= r) {
            const mid = l + Math.floor((r - l)/2);
            if(row[mid] === target) return true;
            if(row[mid] < target) l = mid + 1;
            else r = mid - 1;
        }
        return false;
    }
}
