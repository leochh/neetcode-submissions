class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const n = s.length;
        const memo = Array.from({length: n}, () => Array(n).fill(null)); // memo[i][j] = s[i]-s[j] is a palindrome

        const isPalindrome = (i, j) => {
            if(memo[i][j] !== null) return memo[i][j];
            let l = i, r = j;
            while(l <= r) {
                if(s[l++] !== s[r--]) return false;
            }
            memo[i][j] = true;
            return memo[i][j];
        }

        const res = [];
        const track = [];
        const dfs = (start) => {
            if(start === n) {
                res.push([...track]);
            }
            for(let i = start; i < n; i++) {
                if(!isPalindrome(start, i)) continue;
                const seg = s.substring(start, i + 1);
                track.push(seg);
                dfs(i + 1);
                track.pop();
            }
        }
        dfs(0);
        return res;
    }
}
