class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n: number): number {
        let count = 0;
        while(n) {
            n &= n - 1;
            count++;
        }
        return count;
    }
}
