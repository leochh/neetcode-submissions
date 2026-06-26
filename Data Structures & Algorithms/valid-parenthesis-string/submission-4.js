class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        /* greedy */
        let low = 0, high = 0;  // left
        for(const c of s) {
            if (c === '(') {
                low++;
                high++;
            } else if (c === ')') {
                low--;
                high--;
            } else if (c === '*') {
                low--;
                high++;
            }
            if(high < 0) return false; // too many )
            if(low < 0) low = 0;
        }
        return low === 0;
    }
}
