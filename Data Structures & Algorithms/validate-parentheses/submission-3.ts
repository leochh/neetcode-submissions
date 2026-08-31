class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const map = {
            '(': ')',
            '[': ']',
            '{': '}'
        }
        const stack = [];
        for(const c of s) {
            if(map[c]) stack.push(c);
            else {
                const left = stack.pop();
                if(!left || map[left] !== c) return false;
            }
        }
        return !stack.length;
    }
}
