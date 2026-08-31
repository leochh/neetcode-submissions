class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const pairs = position.map((p, i) => [p, speed[i]]).sort((a, b) => a[0] - b[0]); // asc position
        const times = pairs.map(([p, s]) => (target - p) / s);

        const stack = [];
        for(const t of times) {
            while(stack.length && stack.at(-1) <= t) {
                stack.pop();
            }
            stack.push(t);
        }
        return stack.length;
    }
}
