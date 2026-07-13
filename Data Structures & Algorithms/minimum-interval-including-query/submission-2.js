class Solution {
  /**
   * @param {number[][]} intervals
   * @param {number[]} queries
   * @return {number[]}
   */
  minInterval(intervals, queries) {
    // sort intervals by length asc
    intervals.sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]));

    // sort queries asc with original indices
    const sortedQueries = queries.map((q, i) => [q, i]).sort((a, b) => a[0] - b[0]);
    const res = Array(queries.length).fill(-1);

    for (const [s, e] of intervals) {
      const len = e - s + 1;

      // walk through queries in ascending order
      for (const [q, idx] of sortedQueries) {
        if (res[idx] !== -1) continue; // already answered
        if (s <= q && q <= e) {
          res[idx] = len;
        }
        if (q > e) break; // queries are sorted, stop early
      }
    }

    return res;
  }
}
