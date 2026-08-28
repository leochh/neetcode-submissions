class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map();
        for(const n of nums) {
            map.set(n, (map.get(n) || 0) + 1);
        }
        const pairs = [...map.entries()];
        const partition = (l, r) => {
            const pivot = pairs[r][1];
            let i = l; // idx of 1st <= pivot
            for(let j = i; j < r; j++) {
                if(pairs[j][1] > pivot) {
                    [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
                    i++;
                }
            }
            [pairs[i], pairs[r]] = [pairs[r], pairs[i]];
            return i;
        }
        const select = (l, r) => {
            if(l >= r) return;
            const p = partition(l, r);
            if(p < k) select(p + 1, r);
            if(p > k) select(l, p - 1);
        }
        select(0, pairs.length - 1);
        return pairs.slice(0, k).map(v => v[0]);
    }
}
