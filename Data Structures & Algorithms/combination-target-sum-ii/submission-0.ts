class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        candidates.sort((a, b) => a - b);

        const n = candidates.length;

        const res = [];
        const track = [];
        let sum = 0;

        const backtrack = (start) => {
            if(sum >= target) {
                if(sum === target) res.push([...track]);
                return;
            }
            for(let i = start; i < n; i++) {
                if(i > start && candidates[i] === candidates[i-1]) continue;
                track.push(candidates[i]);
                sum += candidates[i];
                backtrack(i + 1);
                track.pop();
                sum -= candidates[i];
            }
        }

        backtrack(0);
        return res;
    }
}
