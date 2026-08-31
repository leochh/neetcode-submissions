class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {
        const mapping = [
            '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'
        ];
        const map = {};
        for(let i = 0; i < mapping.length; i++) {
            map[i+1] = mapping[i].split("");
        }

        const res = [];
        let track = [];

        const backtrack = (start) => {
            if(start === digits.length) {
                if(track.length) res.push(track.join(""));
                return;
            }
            const d = digits[start];
            for(const c of map[d]) {
                track.push(c);
                backtrack(start + 1);
                track.pop();
            }
        }

        backtrack(0);
        return res;
    }
}
