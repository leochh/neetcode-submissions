class MinStack {
    values: number[];
    mins: number[]; // idx

    constructor() {
        this.values = [];
        this.mins = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        const idx = this.values.length;
        this.values.push(val);
        if(!this.mins.length || val < this.values[this.mins.at(-1)]) {
            this.mins.push(idx);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        if(!this.values.length) return;
        this.values.pop();
        const idx = this.values.length;
        if(this.mins.at(-1) === idx) {
            this.mins.pop();
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.values.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number {
        if(!this.values.length) return;
        const idx = this.mins.at(-1);
        return this.values[idx];
    }
}
