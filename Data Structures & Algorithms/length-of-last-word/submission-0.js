class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        return s.split(" ").filter(Boolean).at(-1).length;
    }
}
