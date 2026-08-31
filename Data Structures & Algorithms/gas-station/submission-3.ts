class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas: number[], cost: number[]): number {
        let sum = 0, balance = 0, start = 0;
        for(let i = 0; i < gas.length; i++) {
            const delta = gas[i] - cost[i];
            sum += delta;
            balance += delta;
            if(balance < 0) {
                balance = 0;
                start = i + 1;
            }
        }
        return sum < 0 ? -1 : start;
    }
}
