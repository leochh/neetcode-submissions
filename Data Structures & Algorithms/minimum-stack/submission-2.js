class MinStack {
    constructor() {
        this.diff = [];
        this.min = null;
    }

    push(val) {
        if (this.min === null) {
            this.min = val;
            this.diff.push(0);
        } else {
            this.diff.push(val - this.min);
            if (val < this.min) this.min = val;
        }
    }

    pop() {
        if (!this.diff.length) return;
        const val = this.diff.pop();
        if (val < 0) this.min -= val; // restore previous min
        if (!this.diff.length) this.min = null; // reset when empty
    }

    top() {
        const val = this.diff.at(-1);
        return val >= 0 ? val + this.min : this.min;
    }

    getMin() {
        return this.min;
    }
}
