class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const n = temperatures.length;
        const stack = [];
        const res = Array(n).fill(0);

        for(let i = 0; i < temperatures.length; i++) {
            while(stack && temperatures[i] > temperatures[stack.at(-1)]) {
                const j = stack.pop();
                res[j] = i - j;
            }
            stack.push(i);
        }
        return res;
    }
}
