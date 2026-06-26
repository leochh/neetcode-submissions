class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        const n = digits.length;
        let carry = 1;
        for(let i = n - 1; i >= 0; i--) {
            let sum = carry + digits[i];
            digits[i] = sum % 10;
            carry = (sum - digits[i]) / 10;
            if(!carry) break;
        }
        if(carry) digits.unshift(1);
        return digits;
    }
}
