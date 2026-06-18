class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const res = Array(n + 1).fill(0);
        for(let i = 1; i <= n; i++) {
            let num = i;
            while(num) {
                res[i]++;
                num &= num - 1;
            }
        }
        return res;
    }
}
