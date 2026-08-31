class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand: number[], groupSize: number): boolean {
        const n = hand.length;
        if(n % groupSize !== 0) return false;
        hand.sort((a, b) => a - b);

        const count = {};
        for(const num of hand) {
            count[num] = (count[num] || 0) + 1;
        }

        for(const num of hand) {
            if(!count[num]) continue;
            for(let i = num; i < num + groupSize; i++) {
                if(!count[i]) return false;
                count[i]--;
            }
        }

        return true;

    }
}
