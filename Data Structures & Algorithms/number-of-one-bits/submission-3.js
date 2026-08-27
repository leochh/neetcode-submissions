class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        const s = n.toString(2);
        let count = 0;
        for(const c of s) {
            count += Number(c === '1');
        }
        return count;
    }
}
