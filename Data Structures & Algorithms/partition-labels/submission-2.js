class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const map = new Map(); // [start, end];
        for(let i = 0; i < S.length; i++) {
            const c = S[i];
            if(!map.has(c)) {
                map.set(c, [i, i]);
            } else {
                map.set(c, [map.get(c)[0], i])
            }
        }
        const points = [...map.values()].sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]); // asc start, desc end
        let lastStart = 0, lastEnd = 0;
        const res = [];
        for(const [s, e] of points) {
            if (s < lastEnd) {
                lastEnd = Math.max(lastEnd, e);
            } else {
                const len = s - lastStart;
                if(len) res.push(s - lastStart);
                lastStart = s;
                lastEnd = e;
            }
        }
        res.push(S.length - lastStart);
        return res;
    }
}
