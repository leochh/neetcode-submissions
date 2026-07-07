class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const merged = [...nums1, ...nums2].sort((a, b) => a - b);
        const m = (merged.length - 1 ) / 2;
        const l = Math.floor(m), r = Math.ceil(m);
        return (merged[l] + merged[r]) / 2;
    }
}
