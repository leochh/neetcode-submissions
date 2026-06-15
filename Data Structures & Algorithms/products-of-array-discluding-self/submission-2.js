class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // a, b, c => 1 => 1, a => 1, a, ab => 1, a, ab, abc
        const prefix = nums.reduce((a, v)=> {
            a.push(a.slice(-1)[0]*v);
            return a;
        }, [1]);
        // a, b, c => 1 => 1, c => 1, c, bc => 1, c, bc, abc
        const suffix = nums.reduceRight((a, v)=> {
            a.push(a.slice(-1)[0] * v);
            return a;
        }, [1]);
        console.log(prefix, suffix)
        return nums.map((v, i)=> prefix[i] * suffix[nums.length-i-1]);
    }
}
