class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const memo = Array(amount + 1).fill(-1);

        const dfs = (i) => {
            if(i === 0) return 0;
            if (i < 0) return Infinity;
            if(memo[i] !== -1) return memo[i];
            let res = Infinity;
            for(const coin of coins) {
                res = Math.min(res, 1+dfs(i - coin));
            }
            memo[i] = res;
            return res;
        }

        const res = dfs(amount);
        return res === Infinity ? -1 : res;
    }
}
