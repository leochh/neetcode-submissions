class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        if(!height.length) return 0;
        let leftMax = height[0], rightMax = height.at(-1);
        let l = 0, r = height.length - 1;
        let res = 0;
        while(l <= r) {
            if(leftMax <= rightMax) {
                res += leftMax - height[l];
                l++;
                leftMax = Math.max(leftMax, height[l]);
            } else {
                res += rightMax - height[r];
                r--;
                rightMax = Math.max(rightMax, height[r]);
            }
        }
        return res;
    }
}
