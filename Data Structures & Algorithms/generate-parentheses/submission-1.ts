class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
        let left = 0, right = 0;
        const res = [];
        let str = [];
        const backtrack = () => {
            if(str.length === n * 2) {
                res.push(str.join(""));
                return;
            }
            if(left < n) {
                str.push('(');
                left++;
                backtrack();
                str.pop();
                left--;
            }
            if(right < left) {
                str.push(')');
                right++;
                backtrack();
                str.pop();
                right--;
            }
        }
        backtrack();
        return res;
    }
}
