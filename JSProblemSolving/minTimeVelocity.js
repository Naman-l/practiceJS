function canMeetAtTime(positions, speeds, time) {
    // Find the minimum and maximum possible positions for each object at given time
    let maxLeft = -Infinity;
    let minRight = Infinity;
    
    for (let i = 0; i < positions.length; i++) {
        // Maximum distance an object can travel is speed * time
        let maxDistance = speeds[i] * time;
        
        // Leftmost possible position
        let leftPos = positions[i] - maxDistance;
        // Rightmost possible position
        let rightPos = positions[i] + maxDistance;
        
        maxLeft = Math.max(maxLeft, leftPos);
        minRight = Math.min(minRight, rightPos);
    }
    
    // If maxLeft <= minRight, there exists a point where all objects can meet
    return maxLeft <= minRight;
}

function findMinMeetingTime(positions, speeds) {
    // Binary search approach
    let left = 0;
    let right = 1e9; // Some large number as upper bound
    let epsilon = 1e-6; // Precision threshold
    
    while (right - left > epsilon) {
        let mid = (left + right) / 2;
        
        if (canMeetAtTime(positions, speeds, mid)) {
            // If they can meet at this time, try a smaller time
            right = mid;
        } else {
            // If they cannot meet at this time, try a larger time
            left = mid;
        }
    }
    
    return left;
}

// Example usage:
let positions = [1, 4, 2];
let speeds = [1, 1, 1];
console.log("Minimum time to meet:", findMinMeetingTime(positions, speeds));

// Another example
positions = [0, 3];
speeds = [1, 2];
console.log("Minimum time to meet:", findMinMeetingTime(positions, speeds));