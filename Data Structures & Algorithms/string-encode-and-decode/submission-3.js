class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const s = ',';
        const es = '\\';
        let encoded = '';
        for(let i=0; i<strs.length; i++) {
            for(const c of strs[i]) {
                if(c===s||c===es) {
                    encoded += es;
                }
                encoded += c;
            }
            encoded += s;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        const s = ',';
        const es = '\\';
        const decoded = [];
        let temp = '';
        for(let i=0; i<str.length; i++) {
            if(str[i]==s) {
                decoded.push(temp);
                temp = '';
            } else if (str[i]==es && (str[i+1]==es || str[i+1]==s)) {
                temp += str[++i];
            } else {
                temp += str[i];
            }
            
        }
        return decoded;
    }
}
