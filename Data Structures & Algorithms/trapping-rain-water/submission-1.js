class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(height.length === 0) return 0;
        // init stack
        const stack = []; // indices
        let res = 0;

        // loop through heights
        for(let i=0; i<height.length; i++) {
            // condition check for right wall
            // right wall taller than bottom
            while(stack.length > 0 && height[i] >= height[stack.slice(-1)[0]]) {
                // bottom = latest
                const btm = height[stack.pop()];

                // check if there is left wall
                if (stack.length > 0) {
                    // left = top of stack
                    const i_l = stack.slice(-1)[0];
                    const left = height[i_l];
                    const right = height[i];
                    const h = Math.min(left, right) - btm;
                    const w = i - i_l - 1;
                    res += h*w;
                }
            }
            stack.push(i);
        }
        return res;
    }
}
