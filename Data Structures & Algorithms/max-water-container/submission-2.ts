class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0, r = heights.length - 1;
        let maxArea = 0;
        while(l < r) {
            const w = Math.min(heights[l], heights[r]);
            const area = w * (r - l);
            maxArea = Math.max(maxArea, area);
            if(heights[l] >= heights[r]) {
                r--;
            } else {
                l++;
            }
        }
        return maxArea;
    }
}
