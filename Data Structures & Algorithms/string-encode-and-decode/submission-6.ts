class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    del = ',';
    esc = '/';
    encode(strs: string[]): string {
        let res = '';
        for(const str of strs) {
            for(const c of str) {
                if(c === this.esc || c === this.del) {
                    res += this.esc + c;
                } else {
                    res += c;
                }
            }
            res += this.del;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res = [];
        let dec = '';
        for(let i = 0; i < str.length; i++) {
            const c = str[i];
            if(c === this.esc) {
                if(str[i+1] === this.esc || str[i+1] === this.del) {
                    dec += str[i+1];
                    i++;
                } else {
                    dec += c;
                }
            } else if(c === this.del){
                res.push(dec);
                dec = '';
            } else {
                dec += c;
            }
        }
        return res;
    }
}
