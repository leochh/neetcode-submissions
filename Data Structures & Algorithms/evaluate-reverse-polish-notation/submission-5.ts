class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = [];
        for(const c of tokens) {
            if(c === '+') {
                stack.push(stack.pop() + stack.pop());
            } else if (c === '-') {
                stack.push(- stack.pop() + stack.pop());
            } else if (c === '*') {
                stack.push(stack.pop() * stack.pop());
            } else if (c === '/') {
                stack.push(Math.trunc(1 / stack.pop() * stack.pop()));
            } else {
                stack.push(+c);
            }
        }
        return stack[0];
    }
}
