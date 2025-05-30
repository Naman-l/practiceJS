// Given a graph find if a path exists from the first node to the last node.

// The graph has n nodes indexed 0 to n-1. It is given in the form of an adjacency list.

// Find if a path exists from node 0 to node n-1.

function processData(input) {
    // Parse input
    const lines = input.trim().split('\n');
    let currentLine = 0;
    
    // Get number of test cases
    const T = parseInt(lines[currentLine++]);
    
    // Process each test case
    for (let t = 0; t < T; t++) {
        // Get number of nodes
        const n = parseInt(lines[currentLine++]);
        
        // Build adjacency list
        const graph = [];
        for (let i = 0; i < n; i++) {
            const line = lines[currentLine++].split(' ').map(Number);
            const m = line[0];  // number of adjacent nodes
            const adjacentNodes = line.slice(1, m + 1);
            graph.push(adjacentNodes);
        }
        
        // Check if path exists and print result
        console.log(hasPath(graph) ? 1 : 0);
    }
}

function hasPath(graph) {
    const n = graph.length;
    const visited = new Set();
    
    function dfs(node) {
        if (node === n - 1) return true;
        visited.add(node);
        
        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor)) return true;
            }
        }
        return false;
    }
    
    return dfs(0);
}

// Example usage:
const input = `4
4
1 1
2 2 0
2 0 3
1 1
4
1 1
1 0
3 0 1 3
1 1
2
1 0
1 1
2
2 0 1
0`;

processData(input);
function findPath(graph) {
    const n = graph.length;
    const visited = new Set();
    const path = [];

    function dfs(node) {
        if (node === n - 1) {
            path.push(node);
            return true;
        }
        
        visited.add(node);
        path.push(node);
        
        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor)) return true;
            }
        }
        
        path.pop();
        return false;
    }

    if (dfs(0)) {
        return path;
    }
    return null;
}

// Example usage:
const graph = [[1, 2], [2], [3], []];
console.log(findPath(graph));  // [0, 1, 2, 3]