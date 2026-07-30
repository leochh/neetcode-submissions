class Solution {
    /**
     * @param {number[]} a
     * @param {number[]} b
     * @param {number[]} c
     * @return {number}
     */
    tripletCount(a, b, c) {
        const count = (arr) => {
            let odd = 0;
            for (let x of arr) {
                let bits = 0;
                while(x) {
                    x &= x - 1;
                    bits++;
                }
                if (bits % 2) odd++;
            }
            return [arr.length - odd, odd]; // [even, odd]
        }
        const [ea, oa] = count(a);
        const [eb, ob] = count(b);
        const [ec, oc] = count(c);
        return ea * eb * ec + ea * ob * oc + oa * eb * oc + oa * ob * ec;
    }
}
