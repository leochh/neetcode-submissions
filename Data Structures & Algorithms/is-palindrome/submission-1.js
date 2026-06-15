class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i=0, j= s.length-1;
        const isValid = a => /\w/.test(a);
        while(i<j) {
            if(!isValid(s[i])) {
                i++;
            } else if (!isValid(s[j])) {
                j--;
            } else if (s[i].toLowerCase()===s[j].toLowerCase()) {
                i++;
                j--
            } else {
                return false;
            }
        }
        return true;
    }
}
