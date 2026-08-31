class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        heights = [0, ...heights, 0]
        const n = heights.length;
        const stack = []; // idx[], asc heights

        let maxArea = 0;
        for(let i = 0; i < n; i++) {
            while(stack.length && heights[stack.at(-1)] > heights[i]) {
                const j = stack.pop();
                const h = heights[j];
                const w = i - stack.at(-1) - 1;
                const area = w * h;
                maxArea = Math.max(maxArea, area);
            }
            stack.push(i);
        }

        return maxArea;
    }
}
