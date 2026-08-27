class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        for(const n of nums) {
            map[n] = (map[n] || 0) + 1;
        }
        const values = Object.entries(map);
        const partition = (l, r) => {
            const p = values[r][1];
            let i = l;
            for(let j = i; j < r; j++) {
                if(values[j][1] < p) {
                    [values[i], values[j]] = [values[j], values[i]];
                    i++;
                }
            }
            [values[i], values[r]] = [values[r], values[i]];
            return i;
        }
        const target = values.length - k;
        const select = (l, r) => {
            const p = partition(l, r);
            if(p < target) select(p + 1, r);
            else if (p > target) select(l, p - 1);
        }
        select(0, values.length - 1);
        return values.slice(target).map(v => +v[0]);
    }
}
