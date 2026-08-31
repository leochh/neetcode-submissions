class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let min = prices[0];
        let maxProfit = 0;
        for(const p of prices) {
            maxProfit = Math.max(maxProfit, p - min);
            min = Math.min(min, p);
        }
        return maxProfit;
    }
}
