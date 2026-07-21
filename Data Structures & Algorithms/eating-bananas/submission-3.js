class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const getHours = (k) => piles.reduce((sum, val) => sum + Math.ceil(val /k), 0);
        let l = 0, r = Math.max(...piles);

        while(l < r) {
            const m = l + Math.floor((r - l) / 2);
            const t = getHours(m);
            if(t > h) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return l;
    }
}
