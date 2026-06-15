class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        /* cheat */
        const bin = n.toString(2);
        const s = bin.padStart(32, "0");
        return parseInt(s.split("").reverse().join(""), 2)
    }
}
