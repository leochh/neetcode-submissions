class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        const n = height.length;
        const maxLeft = Array(n).fill(0);
        const maxRight = Array(n).fill(0);

        for(let i = 1; i < n; i++) {
            maxLeft[i] = Math.max(maxLeft[i-1], height[i-1]);
        }

        for(let i = n-2; i >=0; i--) {
            maxRight[i] = Math.max(maxRight[i+1], height[i+1]);
        }

        let res = 0;
        for(let i = 0; i < n; i++) {
            const w = Math.min(maxLeft[i], maxRight[i]);
            res += Math.max(0, w - height[i]);
        }
        return res;
    }
}
