class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let l = Math.max(...weights), r = weights.reduce((a, b) => a + b, 0);
        const feasible = (cap) => {
            let balance = 0, count = 0;
            for(const w of weights) {
                if(w > balance) {
                    count++;
                    balance = cap;
                }
                balance -= w;
            }
            return count <= days;
        }

        while(l < r) {
            const m = l + Math.floor((r - l) / 2);
            if(feasible(m)) {
                r = m;
            } else {
                l = m + 1;
            }
        }
        return l;
    }
}
