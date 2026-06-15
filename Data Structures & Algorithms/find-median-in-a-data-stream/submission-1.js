class MedianFinder {
    constructor() {
        this.s1 = []; // [min....mid]
        this.s2 = []; // [max....mid]
        this.count = 0; 
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.count++;
        if(this.s1.length > 0 && num < this.s1.at(-1)) {
            while(this.s1.length > 0 && num < this.s1.at(-1)) {
                this.s2.push(this.s1.pop());
            }
            this.s1.push(num)
        } else if (this.s2.length > 0 && num > this.s2.at(-1)) {
            while(this.s2.length > 0 && num > this.s2.at(-1)) {
                this.s1.push(this.s2.pop());
            }
            this.s2.push(num);
        } else {
            this.s1.push(num);
        }
    }

    getValue(i) {
        if(i < this.s1.length) return this.s1[i];
        return this.s2[this.count - 1 - i];
    }

    /**
     * @return {number}
     */
    findMedian() {
        const m = (this.count - 1) / 2;
        const l = Math.floor(m);
        const r = Math.ceil(m);
        return (this.getValue(l) + this.getValue(r))/2;
    }
}
