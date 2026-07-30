class Solution {
    /**
     * @param {number[]} a
     * @param {number[]} b
     * @param {number[]} c
     * @return {number}
     */
    tripletCount(a, b, c) {
        let count = 0;
        for(const _a of a) {
            for(const _b of b) {
                for(const _c of c) {
                    let v = _a ^ _b ^ _c;
                    let bits = 0;
                    while (v) {
                        v &= v - 1;
                        bits++;
                    }
                    if(!(bits % 2)) {
                        count++;
                    }
                }
            }
        }
        return count;
    }
}
