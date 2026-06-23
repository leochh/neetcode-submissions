class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const tails = [];

        for (const x of nums) {
            let l = 0,
                r = tails.length;

            // 找第一个 >= x 的位置
            while (l < r) {
                const m = Math.floor((l + r) / 2);
                if (tails[m] < x) l = m + 1;
                else r = m;
            }

            tails[l] = x;
        }

        return tails.length;
    }
}
