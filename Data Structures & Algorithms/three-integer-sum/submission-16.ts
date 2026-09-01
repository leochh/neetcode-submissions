class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);

        const n = nums.length;
        const res = [];
        for(let i = 0; i < n - 2; i++) {
            if(i > 0 && nums[i] === nums[i-1]) continue;
            let l = i + 1, r = n - 1;
            while(l < r) {
                const sum = nums[i] + nums[l] + nums[r];
                if(sum > 0) {
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    while(l < r && nums[l] === nums[l-1]) l++;
                }
            }
        }
        return res;
    }
}
