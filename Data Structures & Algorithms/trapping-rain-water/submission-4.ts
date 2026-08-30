class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        if(!height?.length) return 0;
        let [l, r] = [0, height.length - 1];
        let [lMax, rMax] = [height[l], height[r]];

        let res = 0;
        while(l < r) {
            if(lMax < rMax) {
                l++;
                lMax = Math.max(lMax, height[l]);
                res += lMax - height[l];
            } else {
                r--;
                rMax = Math.max(rMax, height[r]);
                res += rMax - height[r];
            }
        }
        return res;
    }
}
