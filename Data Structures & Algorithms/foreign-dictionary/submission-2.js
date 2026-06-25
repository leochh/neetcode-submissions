class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const graph = {};
        const indegrees = {};

        // Initialize all unique characters
        for (const word of words) {
            for (const ch of word) {
                if (!(ch in graph)) graph[ch] = new Set();
                if (!(ch in indegrees)) indegrees[ch] = 0;
            }
        }

        const addEdge = (u, v) => {
            if (!graph[u].has(v)) {
                graph[u].add(v);
                indegrees[v]++;
            }
        };

        // Build graph
        for (let i = 1; i < words.length; i++) {
            const cur = words[i];
            const prev = words[i - 1];
            const minLen = Math.min(cur.length, prev.length);

            let foundDiff = false;
            for (let j = 0; j < minLen; j++) {
                if (prev[j] !== cur[j]) {
                    addEdge(prev[j], cur[j]);
                    foundDiff = true;
                    break;
                }
            }

            // Invalid case: prefix rule violation
            if (!foundDiff && prev.length > cur.length) {
                return "";
            }
        }

        // Topological sort (Kahn’s algorithm)
        const q = [];
        for (const node of Object.keys(indegrees)) {
            if (indegrees[node] === 0) q.push(node);
        }

        let count = 0;
        const order = [];
        while (count < q.length) {
            const u = q[count++];
            order.push(u);
            for (const v of graph[u]) {
                indegrees[v]--;
                if (indegrees[v] === 0) q.push(v);
            }
        }

        return order.length === Object.keys(indegrees).length ? order.join("") : "";
    }
}

