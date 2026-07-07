class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const len1 = nums1.length, len2 = nums2.length;
        const total = len1 + len2;
        const m = Math.floor((total - 1) / 2); // 左中位数位置
        const n = Math.floor(total / 2);       // 右中位数位置
        
        let i = 0, j = 0, count = 0;
        let mid1 = 0, mid2 = 0;

        while (count <= n) {
            let val;
            if (j >= len2 || (i < len1 && nums1[i] <= nums2[j])) {
                val = nums1[i++];
            } else {
                val = nums2[j++];
            }
            if (count === m) mid1 = val;
            if (count === n) mid2 = val;
            count++;
        }

        return (mid1 + mid2) / 2;
    }
}

