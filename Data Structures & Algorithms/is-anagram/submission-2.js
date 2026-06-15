class Solution {
    /* hash map (object) */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const counts = {};
        for(let i=0; i<s.length; i++) {
            counts[s[i]] = (counts[s[i]] || 0) + 1;
            counts[t[i]] = (counts[t[i]] || 0) - 1;
        }
        return Object.values(counts).every(v => v===0);
    }
}
