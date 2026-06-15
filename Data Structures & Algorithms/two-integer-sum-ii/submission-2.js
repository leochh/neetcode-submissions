class Solution {
    /* binary search */
    twoSum(numbers, target) { // 1-indexed
        // for each number
        for(let i=0; i<numbers.length; i++) {
            // perform binary search
            let l=i+1;
            let r=numbers.length-1;
            while(l<=r) {
                let m=Math.floor((l+r)/2);
                const v = target - numbers[i];
                // return if sum is target
                if(numbers[m]===v) {
                    return [i+1, m+1];
                } else if(numbers[m]<v) {
                    l = m+1;
                } else {
                    r = m-1;
                }
            }
        }
        // return empty if loop ends
        return [];
    }
}
