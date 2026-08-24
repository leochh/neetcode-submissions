class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let len = 0;
        for(let i = s.length - 1; i >= 0; i--) {
            if(!len && s[i] === ' ') continue;
            if(s[i] === ' ') break;
            len++;
        }
        return len;
    }
}
