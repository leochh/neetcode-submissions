class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        for(const c of s) {
            if(c === '(' || c === '[' || c === '{') {
                stack.push(c);
                continue;
            }
            if(!stack.length) return false;
            const left = stack.pop();
            if(c === ')' && left !== '(') return false;
            if(c === ']' && left !== '[') return false;
            if(c === '}' && left !== '{') return false;
        }
        return !stack.length;
    }
}
