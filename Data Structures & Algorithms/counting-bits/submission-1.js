class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const res = [];
        for(let i = 0; i <= n; i++) {
            let v = i, c = 0;
            while(v) {
                if(v % 2) c++;
                v >>= 1;
            }
            res.push(c);
        }
        return res;
    }
}
