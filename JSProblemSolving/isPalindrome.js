var isPalindrome = function(x) {
    if (x < 0) return false;

    let original = x, reversed = 0;
    while (x !== 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return original === reversed;
};

console.log(isPalindrome(123));
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(1000021));

