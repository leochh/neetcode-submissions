class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const map = new Map(); // memoization

        const isPal = (str) => {
            let l = 0, r = str.length - 1;
            while (l < r) {
                if (str[l++] !== str[r--]) return false;
            }
            return true;
        };
        
        const dfs = (str) => {
            if (map.has(str)) return map.get(str);
            if (str.length === 0) return [[]]; // base case

            const res = [];
            for (let i = 1; i <= str.length; i++) {
                const left = str.substring(0, i);
                if (!isPal(left)) continue;
                const right = str.substring(i);
                for (const r of dfs(right)) {
                    res.push([left, ...r]);
                }
            }
            map.set(str, res);
            return res;
        };

        return dfs(s);
    }
}

