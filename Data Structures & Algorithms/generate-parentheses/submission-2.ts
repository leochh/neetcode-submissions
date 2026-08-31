class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
        let left = 0;
        const res = [];
        let track = [];
        const backtrack = () => {
            if(track.length === n * 2) {
                res.push(track.join(""));
                return;
            }
            if(left < n) {
                track.push('(');
                left++;
                backtrack();
                track.pop();
                left--;
            }
            if(track.length - left < left) {
                track.push(')');
                backtrack();
                track.pop();
            }
        }
        backtrack();
        return res;
    }
}
