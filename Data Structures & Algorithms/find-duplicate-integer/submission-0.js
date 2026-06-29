class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const set = new Set();
        for(const n of nums) {
            if(!set.has(n)) set.add(n);
            else return n;
        }
    }
}
