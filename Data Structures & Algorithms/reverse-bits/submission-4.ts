class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n: number): number {
        const str = n.toString(2).padStart(32, '0');
        return parseInt(str.split("").reverse().join(""), 2);
    }
}
