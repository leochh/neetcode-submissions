class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length;
        const stack = [];
        const leftMost = Array(n).fill(-1);
        const rightMost = Array(n).fill(n);
        // build a monotonic dec seq
        for(let i = 0; i < n; i++) {
            while(stack.length && heights[stack.at(-1)] >= heights[i]) {
                stack.pop();
            }
            if(stack.length) leftMost[i] = stack.at(-1);
            stack.push(i);
        }

        stack.length = 0;
        for(let i = n - 1; i >= 0; i--) {
            while(stack.length && heights[stack.at(-1)] >= heights[i]) {
                stack.pop();
            }
            if(stack.length) rightMost[i] = stack.at(-1);
            stack.push(i);
        }

        let maxArea = 0;
        for(let i = 0; i < n; i++) {
            const l = leftMost[i] + 1, r = rightMost[i] - 1;
            const len = r - l + 1;
            maxArea = Math.max(maxArea, heights[i] * len);
        }

        return maxArea;
    }
}
