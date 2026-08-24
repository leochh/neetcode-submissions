class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    validWordSquare(words) {
        const dim = Math.max(words.length, ...words.map(row => row.length));

        for(let i = 0; i < dim; i++) {
            for(let j = 0; j < dim; j++) {
                const r = words[i]?.[j] ?? '';
                const c = words[j]?.[i] ?? '';
                if(r !== c) return false;
            }
        }
        return true;
    }
}
