class MinStack {
    constructor() {
        this.stack = [];
        this.minStackIdx = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(!this.minStackIdx.length || val < this.stack[this.minStackIdx.at(-1)]) {
            this.minStackIdx.push(this.stack.length);
        }
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        if(this.minStackIdx.length && this.minStackIdx.at(-1) === this.stack.length) {
            this.minStackIdx.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.minStackIdx.at(-1)];
    }
}
