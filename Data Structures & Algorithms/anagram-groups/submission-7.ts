class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const getKey = (str) => {
            const arr = Array(26).fill(0);
            for(const c of str) {
                const idx = c.charCodeAt(0) - 'a'.charCodeAt(0);
                arr[idx]++;
            }
            return arr.join(",");
        }
        const map = {};
        for(const str of strs) {
            const key = getKey(str);
            map[key] = map[key] || [];
            map[key].push(str);
        }
        return Object.values(map);
    }
}
