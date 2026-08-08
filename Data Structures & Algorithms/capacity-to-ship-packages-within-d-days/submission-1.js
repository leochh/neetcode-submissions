class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        const getDays = (cap) => {
            let bal = 0, count = 0;
            for(const w of weights) {
                if(cap < w) return Infinity;
                if(bal < w) {
                    count++;
                    bal = cap;
                }
                bal -= w;
            }
            return count;
        }

        const feasible = (cap) => getDays(cap) <= days;

        let l = Math.min(...weights), r = weights.reduce((sum, w) => sum + w, 0);
        while(l < r) {
            // [l, m] [m+1, r]
            const m = l + Math.floor((r - l) / 2);
            if(feasible(m)) r = m;
            else l = m + 1;
        }
        return l;
    }
}
