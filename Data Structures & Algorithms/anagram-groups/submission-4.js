class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(const s of strs) {
            const key = s.split("").sort().join("");
            map.set(key, map.get(key) ?? []);
            map.get(key).push(s);
        }
        return [...map.values()];
    }
}
