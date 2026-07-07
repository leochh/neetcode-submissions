class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const mapping = {
            2: 'abc',
            3: 'def',
            4: 'ghi',
            5: 'jkl',
            6: 'mno',
            7: 'pqrs',
            8: 'tuv',
            9: 'wxyz'
        }
        const res = [];
        let s = '';
        // ith digit
        const backtrack = (i) => {
            if(i === digits.length) {
                if(s) res.push(s);
                return;
            }
            for(const c of mapping[digits[i]]) {
                const old = s;
                s += c;
                backtrack(i + 1);
                s = old;
            }
        }
        backtrack(0);
        return res;
    }
}
