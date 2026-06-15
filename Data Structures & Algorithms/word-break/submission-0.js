class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const map = new Map();

        const dfs = str => {
            if(!str) return true;
            if(map.has(str)) return map.get(str);
            for(const w of wordDict) {
                if(!str.startsWith(w)) continue;
                if(dfs(str.substring(w.length))) {
                    map.set(str, true);
                    return true;
                }
            }
            map.set(str, false);
            return false;
        }

        return dfs(s);
    }
}
