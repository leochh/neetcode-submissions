class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums: number[]): number {
        const set = new Set();
        for(const n of nums) {
            if(set.has(n)) set.delete(n);
            else set.add(n);
        }
        return set.values().next().value;
    }
}
