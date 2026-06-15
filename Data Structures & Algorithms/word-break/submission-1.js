class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const n = s.length;
        const memo = Array(n).fill(null);

        const dfs = i => {
            if(i === n) return true;
            if(memo[i]!==null) return memo[i];
            for(const w of wordDict) {
                if(!s.startsWith(w, i)) continue;
                if(dfs(i + w.length)) {
                    memo[i] = true;
                    return true;
                }
            }
            memo[i] = false;
            return false;
        }

        return dfs(0)
    }
}
