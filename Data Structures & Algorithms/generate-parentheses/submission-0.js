class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        let track = [];
        let left = 0;

        const backtrack = () => {
            if(track.length === n * 2) {
                res.push(track.join(""));
                return;
            }
            if(left < n) {
                track.push("(");
                left++;
                backtrack();
                track.pop();
                left--;
            }
            if(track.length - left < left) {
                track.push(")");
                backtrack();
                track.pop();
            }
        }
        backtrack();
        return res;
    }
}
