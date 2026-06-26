class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let lc = 0,
            sc = 0,
            rc = 0;
        for (const c of s) {
            if (c === "(") lc++;
            else if (c === "*") sc++;
            else {
                if (lc) lc--;
                else if (sc) sc--;
                else {
                    console.log(0, lc, sc);
                    return false;
                }
            }
        }
        console.log(1, lc, sc);
        if (lc > sc) return false;
        sc = 0;
        for (let i = s.length - 1; i >= 0; i--) {
            const c = s[i];
            if (c === ")") rc++;
            else if (c == "*") sc++;
            else {
                if (rc) rc--;
                else if (sc) sc--;
                else {
                    console.log(2, rc, sc);
                    return false;
                }
            }
        }
        console.log(3, rc, sc);
        if (rc > sc) return false;
        return true;
    }
}
