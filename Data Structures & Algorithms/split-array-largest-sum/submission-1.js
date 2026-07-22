class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        const prefix = [0];
        for(const n of nums) {
            prefix.push(prefix.at(-1) + n);
        }
        const feasible = (cap) => {
            let i = 0, count = 0;
            while(i < prefix.length - 1) {
                let l = i + 1, r = prefix.length - 1;
                while(l < r) {
                    const m = l + Math.ceil((r - l) / 2);
                    if(prefix[m] <= prefix[i] + cap) {
                        l = m;
                    } else {
                        r = m - 1;
                    }
                }
                count++;
                i = r;
            }
            return count <= k;
        }

        let l = Math.max(...nums), r = nums.reduce((a, b) => a + b);
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
