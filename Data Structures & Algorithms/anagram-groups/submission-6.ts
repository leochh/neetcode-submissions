class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const getKey = str => str.split("").sort().join("");
        const map = {};
        for(const str of strs) {
            const key = getKey(str);
            map[key] = map[key] ?? [];
            map[key].push(str);
        }
        return Object.values(map);
    }
}
