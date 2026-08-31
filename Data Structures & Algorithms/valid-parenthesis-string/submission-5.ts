class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s: string): boolean {
        let [minLeft, maxLeft] = [0, 0];
        for(const c of s) {
            if(c === '(') {
                minLeft++;
                maxLeft++;
            } else if (c === '*') {
                minLeft--;
                maxLeft++;
            } else {
                minLeft--;
                maxLeft--;
            }
            if(maxLeft < 0) return false;
            if(minLeft < 0) minLeft = 0;
        }
        return minLeft === 0;
    }
}
