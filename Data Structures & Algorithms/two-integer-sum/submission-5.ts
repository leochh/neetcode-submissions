class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const idxMap = new Map();
        for(let i = 0; i < nums.length; i++) {
            const value = nums[i];
            const comp = target - value;
            if(idxMap.has(comp)) return [idxMap.get(comp), i];
            idxMap.set(value, i);
        }
        return [-1, -1];
    }
}
