class MinStack {
    min: number;
    values: number[] = [];

    constructor() {
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if(!this.values.length) {
            this.min = val;
        }
        this.values.push(val - this.min);
        if(val < this.min) this.min = val;
       
    }

    /**
     * @return {void}
     */
    pop(): void {
        // if (this.values.length === 0) return;
        const val = this.values.pop();
        if(val < 0) this.min -= val;
    }

    /**
     * @return {number}
     */
    top(): number {
        const top = this.values.at(-1);
        return top > 0 ? top + this.min : this.min;
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min;
    }
}
