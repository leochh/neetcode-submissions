class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        for(const s of strs) {
            const k = s.split("").sort().join();
            map[k] = map[k] || [];
            map[k].push(s);
        }
        return Object.values(map);
    }
}
