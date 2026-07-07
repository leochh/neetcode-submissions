class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const stack = []; // start of str
        const map = new Map();

        for(let i = 0; i < S.length; i++) {
            const c = S[i];
            if(!map.has(c)) {
                map.set(c, i);
                stack.push(i);
            } else {
                while(stack.length && stack.at(-1) > map.get(c)) {
                    stack.pop();
                }
                map.set(c, stack.at(-1));
            }
        }
        return stack.map((idx, i) => i === stack.length - 1 ? S.length - idx : stack[i+1] - idx);
    }
}
