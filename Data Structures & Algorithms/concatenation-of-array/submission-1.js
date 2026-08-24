class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const res = [];
        const add = () => {
            for(const n of nums) {
                res.push(n);
            }
        }
        add();
        add();
        return res;
    }
}
