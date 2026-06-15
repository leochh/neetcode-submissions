class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let maxStr = '';
        for(let i = 0; i < s.length; i++) {
            const s1 = this.palindrome(s, i, i);
            const s2 = this.palindrome(s, i, i+1);
            if (s1.length > maxStr.length) maxStr = s1;
            if (s2.length > maxStr.length) maxStr = s2;
        }
        return maxStr
    }

    palindrome(s, l, r) {
        while(l >= 0 && r < s.length && s[l] === s[r]) {
                l--;
                r++
        }
        return s.substring(l + 1, r)
    }
}
