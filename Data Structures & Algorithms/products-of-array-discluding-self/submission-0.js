class Solution {
    /* brute force */
    productExceptSelf(nums) {
        const res = [];
        for(let i=0; i<nums.length; i++) {
            let product = 1;
            for(let j=0; j<nums.length; j++) {
                if (i!==j) product *= nums[j];
            }
            res[i] = product;
        }
        return res;
    }
}
