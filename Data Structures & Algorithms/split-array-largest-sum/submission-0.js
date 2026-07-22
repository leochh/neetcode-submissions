class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        let l = Math.max(...nums);
        let r = nums.reduce((a, b) => a + b, 0);

        const feasible = (sum) => {
            let balance = 0, count = 0;
            for(const n of nums) {
                if(n > balance) {
                    balance = sum;
                    count++;
                }
                balance -= n;
            }
            return count <= k;
        }
        while(l < r) {
            const m = l + Math.floor((r - l) / 2);
            if(feasible(m)) {
                r = m;
            } else {
                l = m + 1;
            }
        }
        return l;
    }
}
