class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const values = nums.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);
        let l = 0, r = values.length - 1;
        console.log(values)
        while(l <= r) { // [l, r)
            const m = l + Math.floor((r - l) / 2);
            if (values[m][0] > target) {
                r = m - 1;
            } else if (values[m][0] < target){
                l = m + 1;
            } else {
                return values[m][1]
            }
        }
        return -1
        
    }
}
