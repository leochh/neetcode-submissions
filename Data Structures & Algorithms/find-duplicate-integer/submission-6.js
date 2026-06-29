class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const n = nums.length;
        let res = 0;
        for (let b = 0; 1 << b < n; b++) {
            const mask = 1 << b;
            let x = 0,
                y = 0;
            for (const num of nums) {
                if (num & mask)  x++;
            }
            for (let i = 1; i < n; i++) {
                if (i & mask) {
                    y++;
                }
            }
            if (x > y) res |= mask;
        }
        return res;
    }
}
