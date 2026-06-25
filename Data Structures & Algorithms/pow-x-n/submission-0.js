class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        if(n < 0) return 1 / this.myPow(x, -n);
        let res = 1;
        while(n--) {
            res *= x;
        }
        return res;
    }
}
