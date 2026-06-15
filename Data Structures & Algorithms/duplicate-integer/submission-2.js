class Solution {
    /* sort */
    hasDuplicate(nums) {
        const sorted = nums.sort((a, b) => a - b);
        for(let i=0;i<sorted.length-1;i++) {
            if(sorted[i+1]==sorted[i]) {
                return true;
            }
        }
        return false;
    }
}
