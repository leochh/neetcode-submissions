class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // find largest n
        const max = Math.max(...piles);
        // optimization
        if (piles.length === h) return max;
        if (piles.length > h) return -1;
        // binary search for k
        let l = 1, r = max;
        // find upper bound k such that t > h 
        while(l < r) {
            const m = l + Math.floor((r-l)/2);
            const t = piles.reduce((s,v)=>s+Math.ceil(v/m), 0);
            if(t > h) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return l;
    }
}
