// you are given a list of intervals
//         - [1, 3], [4, 7]
//     - each interval means cars parked in it.
//     - For example [1, 3] means cars parked from 1 to 2, and 2 to 3 like this..
//     - now when a new interval [6, 8] comes, then 6,7 is already occupied by interval 4, 7 so it has space left only in 7,8 which is a single slot..
//     - so for every interval you have to say how many slots are available for it.. at first tell me did you understand the question and then solve it optimally
//     - the answer is [2, 3, 1]

//     - 2 for interval [1, 3] which includes 1 to 2 and 2 to 3
//     - 3 for interva [4, 7] which includes 4 to 5, 5 to 6 and 6 to 7
//     - 1 for interval 6 to 8 because although there is 6 to 7 and 7 to 8, but then 6 to 7 is already occupied sp only 7 to 8 is left. so answer is 1 for it

//     - For interval [1, 3], it calculates 2 available slots (covering [1, 2] and [2, 3]).
//     - For interval [4, 7], it also calculates 2 available slots (covering [4, 5], [5, 6], and [6, 7]). This seems to be an error since it should be 3 slots.
//     - For interval [6, 8], it correctly identifies 1 available slot (covering [7, 8]), as [6, 7] is already occupied by [4, 7].

function countAvailableSlots(intervals) {
    const result = [];
    const occupiedSlots = new Set();
    
    for (const [start, end] of intervals) {
        let availableCount = 0;
        
        // Count available slots in current interval
        for (let i = start; i < end; i++) {
            const slot = `${i}-${i + 1}`;
            if (!occupiedSlots.has(slot)) {
                availableCount++;
            }
        }
        
        result.push(availableCount);
        
        // Mark all slots in current interval as occupied
        for (let i = start; i < end; i++) {
            const slot = `${i}-${i + 1}`;
            occupiedSlots.add(slot);
        }
    }
    
    return result;
}

// Test with the given example
const intervals = [[1, 3], [4, 7], [6, 8]];
const result = countAvailableSlots(intervals);
console.log("Input intervals:", intervals);
console.log("Available slots for each interval:", result);
console.log("Expected: [2, 3, 1]");

// Let's trace through step by step
console.log("\nStep by step:");
console.log("Interval [1,3]: slots [1,2], [2,3] -> 2 available slots");
console.log("Interval [4,7]: slots [4,5], [5,6], [6,7] -> 3 available slots");
console.log("Interval [6,8]: slots [6,7], [7,8] -> [6,7] occupied, only [7,8] available -> 1 slot");





