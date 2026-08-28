class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map(str => str.length + "#" + str).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res = [];
        let i = 0;
        while(i < str.length) {
            let j = i;
            while(str[j] !== '#') j++;
            const len = +str.substring(i, j);
            i = j + 1 + len;
            const dec = str.substring(j + 1, i);
            res.push(dec);

        }
        return res;
    }
}

