class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const calc = v => {
            let sum = 0;
            while(v) {
                const r = v % 10;
                sum += Math.pow(r, 2);
                v = (v - r) / 10;
            }
            return sum;
        }

        const seen = new Set();
        while(n !== 1 && !seen.has(n)) {
            seen.add(n);
            n = calc(n);
        }
        return n === 1;
    }
}
