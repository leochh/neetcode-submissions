class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
        const isValid = c => /[a-z0-9]/.test(c);
        let l = 0, r = s.length - 1;
        while(l < r) {
            if(!isValid(s[l])) {
                l++;
            } else if (!isValid(s[r])) {
                r--;
            } else if (s[l] === s[r]) {
                l++;
                r--;
            } else {
                return false;
            }
        }
        return true;
    }
}
