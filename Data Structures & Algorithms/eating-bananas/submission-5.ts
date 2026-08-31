class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        const getHours = k => piles.reduce((a, b) => a + Math.ceil(b / k), 0);
        const isFeasible = k => getHours(k) <= h;

        let l = 1, r = piles.reduce((a, b) => a + b, 0);

        while(l < r) {
            const mid = l + Math.floor((r - l) / 2);
            if(isFeasible(mid)) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        return l;
    }
}
