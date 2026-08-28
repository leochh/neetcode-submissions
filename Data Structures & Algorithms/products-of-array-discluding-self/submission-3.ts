class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let zeroCount = 0;
        let product = 1;
        for(const n of nums) {
            if(n) product *= n;
            else zeroCount++;
        }
        if(zeroCount > 1) return nums.map(v => 0);
        if(zeroCount === 1) return nums.map(v => v ? 0 : product);
        return nums.map(v => product / v);
    }
}
