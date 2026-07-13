class CountSquares {
    constructor() {
        this.points = {};
    }

    add([x, y]) {
        this.points[x] = this.points[x] || {};
        this.points[x][y] = (this.points[x][y] || 0) + 1;
    }

    count([x1, y1]) {
        let res = 0;
        for (const [y2Str, c12] of Object.entries(this.points[x1] || {})) {
            const y2 = Number(y2Str);
            if (y2 === y1) continue;
            const w = y2 - y1;

            for (const x2 of [x1 - w, x1 + w]) {
                const c21 = this.points[x2]?.[y1] || 0;
                const c22 = this.points[x2]?.[y2] || 0;
                res += c12 * c21 * c22;
            }
        }
        return res;
    }
}
