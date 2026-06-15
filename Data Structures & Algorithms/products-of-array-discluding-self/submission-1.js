class Solution {
    /* division */
    productExceptSelf(nums) {
        let res = new Array(nums.length).fill(0);
        let prod = 1;
        const zeros = [];
        for(let i=0; i<nums.length; i++) {
            if(nums[i]===0) {
                zeros.push(i);
            } else {
                prod *= nums[i];
            }
        }
        if (zeros.length > 1) return res;
        if (zeros.length === 1) {
            res[zeros[0]] = prod;
            return res;
        }
        return nums.map(v => prod/v);
    }
}
