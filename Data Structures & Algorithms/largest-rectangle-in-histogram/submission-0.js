class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length;
        let res = 0;
        for(let i = 0; i < n; i++) {
            let min = heights[i];
            for(let j = i; j < n; j++) {
                min = Math.min(min, heights[j]);
                const len = j - i + 1;
                res = Math.max(res, min * len);
            }
        }
        return res;
    }
}
