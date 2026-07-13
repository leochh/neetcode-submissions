class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
        if(num1 === '0' || num2 === '0') return '0';
        const m = num1.length;
        const n = num2.length;
        const buffer  = Array(m + n).fill(0);
        for(let i = m - 1; i >= 0; i--) {
            for(let j = n - 1; j >= 0; j--) {
                const product = num1[i] * num2[j] + buffer[i + j + 1];
                buffer[i + j + 1] = product % 10;
                buffer[i + j] += (product - buffer[i+j+1]) / 10;
            }
        }
        let i = 0;
        while(buffer[i] === 0) i++;
        return buffer.slice(i).join("");
    }
}
