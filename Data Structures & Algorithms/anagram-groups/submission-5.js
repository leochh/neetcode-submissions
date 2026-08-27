class Solution {
    /* set */
    groupAnagrams(strs) {
        const offset = 'a'.charCodeAt(0);
        const map = new Map();
        for(const s of strs) {
            const arr = Array(26).fill(0);
            for(let i = 0; i < s.length; i++) {
                arr[s.charCodeAt(i) - offset]++;
            }
            const key = arr.join(",");
            map.set(key, map.get(key) ?? []);
            map.get(key).push(s);
        }
        return [...map.values()];
    }
}
