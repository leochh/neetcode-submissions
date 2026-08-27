class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        for (const n of nums) {
            map[n] = (map[n] || 0) + 1;
        }
        const values = Object.entries(map); // [num, freq]

        const partition = (l, r) => {
            const pivot = values[r][1];
            let i = l;
            for (let j = l; j < r; j++) {
                if (values[j][1] > pivot) { // left is larger
                    [values[i], values[j]] = [values[j], values[i]];
                    i++;
                }
            }
            [values[i], values[r]] = [values[r], values[i]];
            return i;
        };

        const select = (l, r) => {
            if (l >= r) return;
            const p = partition(l, r);
            if (p > k) select(l, p - 1);
            else if (p < k) select(p + 1, r);
        };

        select(0, values.length - 1);
        return values.slice(0, k).map(v => +v[0]);
    }
}

