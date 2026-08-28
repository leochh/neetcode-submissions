class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const pairs = nums.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);
        let l = 0, r = pairs.length - 1;
        while(l < r) {
            const sum = pairs[l][0] + pairs[r][0];
            if(sum < target) {
                l++;
            } else if (sum > target) {
                r--;
            } else {
                const a = pairs[l][1];
                const b = pairs[r][1];
                return a < b ? [a, b] : [b, a];
            }
        }
        return [-1, -1];
    }
}
