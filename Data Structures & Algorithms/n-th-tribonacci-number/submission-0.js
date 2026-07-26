class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        const memo = [0, 1, 1];
        const calc = (n) => {
            if(memo[n] !== undefined) return memo[n];
            memo[n] = calc(n-3) + calc(n-2) + calc(n-1);
            return memo[n];
        }
        return calc(n);
    }
}
