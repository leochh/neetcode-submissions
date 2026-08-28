class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const getKey = str => str.split("").sort().join("");
        return getKey(s) === getKey(t);
    }
}
