class Solution {
    /* length prefix */
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';
        for(const str of strs) {
            encoded += str.length + '#' + str;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = [];
        let i = 0;
        while(i<str.length) {
            let j=i;
            while(str[j]!='#') {
                j++;
            }
            const n = Number(str.substring(i, j));
            i = j+n+1;
            decoded.push(str.substring(j+1, i));
        }
        return decoded;
    }
}
