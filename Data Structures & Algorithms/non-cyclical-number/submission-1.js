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
        let slow = n, fast = calc(n);
        while(fast !== slow) {
            slow = calc(slow);
            fast = calc(calc(fast));
        }
        return fast === 1;
    }
}
