class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        /* brute force */
        let k = 0, t = h + 1;
        while(t > h) {
            k++;
            t = piles.reduce((s, v) => s + Math.ceil(v/k), 0);
        }
        return k;
    }
}
