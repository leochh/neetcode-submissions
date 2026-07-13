class Solution {
    multiply(num1, num2) {
        if (num1 === "0" || num2 === "0") return "0";
        if (num2.length < num1.length) [num1, num2] = [num2, num1];

        const multiply = (s, x) => {
            let res = "";
            let carry = 0;
            for (let i = s.length - 1; i >= 0; i--) {
                const y = +s[i];
                const sum = carry + x * y;
                const d = sum % 10;
                carry = Math.floor(sum / 10);
                res += d;
            }
            if (carry) res += carry;
            return res; // reversed order
        };

        const products = [];
        for (let i = num1.length - 1; i >= 0; i--) {
            const product = multiply(num2, +num1[i]);
            const zeros = num1.length - 1 - i;
            products.push(product.padStart(product.length + zeros, "0"));
        }

        const mergeTwo = (a, b) => {
            if (!a) return b;
            if (!b) return a;
            const len = Math.max(a.length, b.length);
            a = a.padEnd(len, '0');
            b = b.padEnd(len, '0');
            let carry = 0;
            let res = '';
            for (let i = 0; i < len; i++) {
                const sum = Number(a[i]) + Number(b[i]) + carry;
                const d = sum % 10;
                res += d;
                carry = Math.floor(sum / 10);
            }
            if (carry) res += carry;
            return res;
        };

        const merge = (values) => {
            const res = [];
            for (let i = 0; i < values.length; i += 2) {
                res.push(mergeTwo(values[i], values[i+1]));
            }
            return res.length === 1 ? res : merge(res);
        };

        const resultReversed = merge(products)[0];
        return resultReversed.split("").reverse().join("");
    }
}
