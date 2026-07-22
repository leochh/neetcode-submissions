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

        const feasible = (x) => {
            let _k = k;
            let last = 0;
            while(_k) {
                let l = last + 1, r = prefix.length;
                while(l < r) {
                    const m = l + Math.floor((r - l) / 2);
                    if(prefix[m] > prefix[last] + x) {
                        r = m;
                    } else {
                        l = m + 1;
                    }
                }
                last = l - 1;
                _k--;
            }
            return last == prefix.length - 1;
        }

        let l = Math.max(...nums), r = nums.reduce((a, b) => a + b, 0);
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
