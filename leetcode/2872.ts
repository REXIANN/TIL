function maxKDivisibleComponents(n: number, edges: number[][], values: number[], k: number): number {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    let componentCount = 0;

    const dfs = (u, parent) => {
        let currentSubtreeSum = values[u];

        for (const v of adj[u]) {
            if (v !== parent) {
                const childSubtreeSum = dfs(v, u);

                currentSubtreeSum += childSubtreeSum;
            }
        }

        if (currentSubtreeSum % k === 0) {
            componentCount++;

            return 0;
        } else {
            return currentSubtreeSum;
        }
    };

    dfs(0, -1);

    return componentCount;
}