class Solution {
    /* set */
    groupAnagrams(strs) {
        const map = {};
        const v = "a".charCodeAt(0);
        for(const str of strs) {
            const arr = Array(26).fill(0);
            for (const c of str) {
                const i = c.charCodeAt(0) - v;
                arr[i]++;
            }
            const k = arr.join();
            map[k] = map[k] || [];
            map[k].push(str);
        }
        return Object.values(map);
    }
}
