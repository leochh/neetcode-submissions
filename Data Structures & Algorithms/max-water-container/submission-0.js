class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        // brute force
        for(let i=0; i<heights.length-1; i++) {
            for(let j=0; j<heights.length; j++) {
                const h = Math.min(heights[i], heights[j]);
                const w = j - i;
                max = Math.max(h*w, max);
            }
        }
        return max;
    }
}
