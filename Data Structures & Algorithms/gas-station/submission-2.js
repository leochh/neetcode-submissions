class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        const n = gas.length;
        let  total = 0, cur = 0, start = 0;
        for(let i = 0; i < n; i++) {
            const change = gas[i] - cost[i];
            total += change;
            cur += change;
            if(cur < 0) {
                cur = 0;
                start = i + 1;
            }
        }
        return total < 0 ? -1 : start;
    }
}
