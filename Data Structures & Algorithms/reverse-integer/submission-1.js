class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let y = 0;
        while(x) {
            y *= 10;
            y += x % 10;
            x = ~~(x / 10);
        }
        return Math.abs(y) >= 2 ** 31 ? 0 : y;
    }
}
