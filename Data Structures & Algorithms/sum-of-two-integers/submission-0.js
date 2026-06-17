class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        //          exp  or   xor and
        // 00 00 => 00   00   00 00
        // 01 01 => 10   01   00 01
        // 01 00 => 01   01   01 00
        while(b !== 0) {
            let carry = (a & b) << 1;
            a ^= b;
            b = carry;
        }
        return a;
    }
}
