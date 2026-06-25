class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        let memo = {
            0: 1,
            1: x,
        };
        const pow = (n) => {
            if (!memo[n]) memo[n] = n % 2 ? x * pow(n - 1) : pow(n / 2) * pow(n / 2);
            return memo[n];
        };
        return n < 0 ? 1 / pow(-n) : pow(n);
    }
}
