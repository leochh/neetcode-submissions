class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
         const dist = (x, y) => x ** 2 + y ** 2;

         const partition = (l, r) => {
            let p = points[r];
            const distP = dist(p[0], p[1]);
            let i = l;
            for(let j = l; j < r; j++) {
                const point = points[j];
                if(dist(point[0], point[1]) <= distP) {
                    [points[i], points[j]] = [points[j], points[i]];
                    i++;
                }
            }
            [points[r], points[i]] = [points[i], points[r]];
            return i;
         }

         let L = 0, R = points.length - 1, p = points.length;
         while(p !== k) {
            p = partition(L, R);
            if(p < k) {
                L = p + 1;
            } else {
                R = p - 1;
            }
         }
         return points.slice(0, k);
    }
}
