class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        return Array.from({length: n + 1}, (_, i) => 
        i.toString(2).split("").filter(v => v === '1').length)
    }
}
