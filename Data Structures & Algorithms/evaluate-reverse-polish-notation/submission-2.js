class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const ops = new Set(["+", "-", "*", "/"]);
        for (const c of tokens) {
            if (!ops.has(c)) {
                stack.push(+c);
                continue;
            }
            const b = stack.pop();
            const a = stack.pop();
            if (c === "+") stack.push(a + b);
            else if (c === "-") stack.push(a - b);
            else if (c === "*") stack.push(a * b);
            else stack.push(Math.trunc(a / b));
        }
        return stack[0];
    }
}
