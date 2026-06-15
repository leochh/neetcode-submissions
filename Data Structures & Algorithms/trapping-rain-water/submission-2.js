class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        /* maxLeft maxRight */
        const maxLeft = Array(height.length);
        const maxRight = Array(height.length);

        // initialize
        const n = height.length-1;
        maxLeft[0] = 0;
        maxRight[n] = 0;

        for(let i=0; i<n; i++) {
            maxLeft[i+1] = Math.max(height[i], maxLeft[i]);
        }
        for(let j=n; j>0; j--) {
            maxRight[j-1] = Math.max(height[j], maxRight[j]);
        }

        let res = 0;
        for(let k=0; k<=n; k++) {
            res += Math.max(0, Math.min(maxLeft[k], maxRight[k]) - height[k]);
        }
        return res;
    }
}
