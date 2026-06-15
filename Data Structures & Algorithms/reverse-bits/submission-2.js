class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let x = 0;
        for(let i = 0; i < 32; i++) {
            if((n >>> i) & 1) {
                x |= 1 << (31 - i)
            }
        }
        // force unsigned
        return x >>> 0;
    }
}
