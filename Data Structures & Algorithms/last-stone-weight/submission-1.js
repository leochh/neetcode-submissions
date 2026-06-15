class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        /* sorting */
        while(stones.length > 1) {
            stones.sort((a, b) => a - b);
            const a = stones.pop();
            const b = stones.pop();
            const c = Math.abs(a - b);
            if (c > 0) stones.push(c);
        }
        return stones[0] || 0;
    }
}
