class MedianFinder {
    constructor() {
        this.q = new MinPriorityQueue();
        this.count = -1;
    }
    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.q.enqueue(num);
        this.count++;
    }

    /**
     * @return {number}
     */
    findMedian() {
        const l = Math.floor(this.count / 2);
        const r = Math.ceil(this.count / 2);
        const arr = this.q.toArray();
        return (arr[l] + arr[r])/2;
    }
}
