// Given a string s, find the length of the longest substring without duplicate characters.



var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let left = 0;
    const lastSeen = new Map();
    
    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        
        // If character is already in window, move left pointer
        if (lastSeen.has(currentChar)) {
            left = Math.max(left, lastSeen.get(currentChar) + 1);
        }
        
        lastSeen.set(currentChar, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};