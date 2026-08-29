class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        s = s.toLowerCase();
        const isValid = c => /[0-9a-z]/.test(c);
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
