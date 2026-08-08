class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        // binary search on maxSum
        const getBuckets = (sum) => {
            let balance = 0, count = 0;
            for(const n of nums) {
                if(balance < n) {
                    balance = sum;
                    count++;
                }
                balance -= n;
            }
            return count;
        }

        const feasible = (sum) => getBuckets(sum) <= k;

        let l = Math.max(...nums), r = nums.reduce((sum, a) => sum + a, 0);
        while(l < r) {
            // [l, m] [m + 1, r]
            const m = l + Math.floor((r - l) / 2);
            if(feasible(m)) r = m;
            else l = m + 1;
        }
        return l;
    }
}
