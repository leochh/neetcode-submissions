class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1, B = nums2;
        if (A.length > B.length) [A, B] = [B, A]; // 保证 A 是短的
        const m = A.length, n = B.length;
        const total = m + n;
        const half = Math.floor((total + 1) / 2);

        let l = 0, r = m;
        while (l <= r) {
            const i = Math.floor((l + r) / 2); // A 的切分
            const j = half - i;                // B 的切分

            const a1 = i > 0 ? A[i - 1] : -Infinity;
            const a2 = i < m ? A[i] : Infinity;
            const b1 = j > 0 ? B[j - 1] : -Infinity;
            const b2 = j < n ? B[j] : Infinity;

            if (a1 <= b2 && b1 <= a2) {
                if (total % 2 === 1) {
                    return Math.max(a1, b1);
                } else {
                    return (Math.max(a1, b1) + Math.min(a2, b2)) / 2;
                }
            } else if (a1 > b2) {
                r = i - 1;
            } else {
                l = i + 1;
            }
        }
    }
}

