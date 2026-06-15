class Solution {
    /* sort */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;
        for(const n of set) {
            let length = 1;
            while(set.has(n+length)) {
                length++;
            }
            longest = Math.max(length, longest);
        }
        return longest;
    }
}
