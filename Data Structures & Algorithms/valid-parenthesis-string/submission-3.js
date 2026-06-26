class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        const left = [];
        const star = [];
        for(let i = 0; i< s.length; i++) {
            if(s[i] === '(') {
                left.push(i);
            } else if (s[i] === '*') {
                star.push(i);
            } else {
                if(left.length) left.pop();
                else if (star.length) star.pop();
                else return false;
            }
        }
        while(left.length && star.length) {
            if(left.pop() > star.pop()) return false;
        }
        return !left.length;
    }
}
