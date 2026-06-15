class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let l = 0, r = heights.length - 1;
        while (l<r) {
            const hl = heights[l];
            const hr = heights[r];
            max = Math.max(Math.min(hl, hr) * (r-l), max);
            if (hl > hr) {
                r--;
            } else {
                l++;
            }
        }
        return max;
    }
}
