class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let max = -1;
        const n = arr.length;
        for(let i = n - 1; i >=0; i--) {
            const val = arr[i];
            arr[i] = max;
            max = Math.max(max, val);
        }
        return arr;
    }
}
