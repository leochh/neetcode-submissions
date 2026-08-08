class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const getHour = k => piles.reduce((t, a) => t + Math.ceil(a / k), 0);
        if(piles.length > h) return -1;

        const feasible = k => getHour(k) <= h;

        let l = 1, r = Math.max(...piles);
        while(l < r) {
            const m = l + Math.floor((r - l)/2);
            if(feasible(m)) r = m;
            else l = m + 1;
        }
        return l;
    }
}
