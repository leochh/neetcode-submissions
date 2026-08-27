class Solution {
    /* hash */
    hasDuplicate(nums) {
       return new Set(nums).size !== nums.length;
    }
}
