class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        return nums.some((e,i)=>nums.findIndex(a => a==e)!=i)
    }
}
