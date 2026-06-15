class Solution {
    /* brute force */
    isAnagram(s, t) {
        if(s.length!==t.length) return false;
        const map = new Map();
        for(const c of s) {
            const i = map.get(c) ?? 0;
            map.set(c, i + 1);
        }
        for(const c of t) {
            const i = map.get(c) ?? 0;
            if (i < 1) return false;
            map.set(c, i-1);
        }
        return true;

    }
}
