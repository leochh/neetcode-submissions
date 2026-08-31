class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        const m = nums1.length;
        const n = nums2.length;
        const merged = [...nums1, ...nums2].sort((a, b) => a - b);
        const l = Math.floor((m + n - 1) / 2);
        const r = Math.floor((m + n) / 2);
        return (merged[l] + merged[r]) / 2;
    }
}
