class Solution {
    coinChange(coins, amount) {
        if (amount === 0) return 0;

        const seen = Array(amount + 1).fill(false);
        const q = [0];
        seen[0] = true;

        let count = 0;
        let head = 0;

        while (head < q.length) {
            const size = q.length - head;
            for (let i = 0; i < size; i++) {
                const cur = q[head++];
                if (cur === amount) return count;

                for (const coin of coins) {
                    const next = cur + coin;
                    if (next <= amount && !seen[next]) {
                        seen[next] = true;
                        q.push(next);
                    }
                }
            }
            count++;
        }
        return -1;
    }
}

