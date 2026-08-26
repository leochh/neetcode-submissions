class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replaceAll(/[^A-Za-z0-9]/g, '');
        let l = 0, r = s.length - 1;
        while(l < r) {
            if(s[l] === s[r]) {
                l++;
                r--;
            } else {
                return false;
            }
        }
        return true;
    }
}
