function nextPalindromicNumber(num) {
    const strNum = num.toString();
    const len = strNum.length;
    const mid = Math.floor(len / 2);
    let leftPtr = mid - 1;
    let rightPtr = len % 2 === 0 ? mid : mid + 1;
    let isLeftSmaller = false;

    // Move pointers until finding a mismatch or reaching the middle
    while (leftPtr >= 0 && strNum[leftPtr] === strNum[rightPtr]) {
        leftPtr--;
        rightPtr++;
    }

    // Check if the left side is smaller or equal to the right side
    if (leftPtr < 0 || strNum[leftPtr] < strNum[rightPtr]) {
        isLeftSmaller = true;
    }

    let result = strNum.split('');

    // Reflect left half to the right half
    while (leftPtr >= 0) {
        result[rightPtr] = result[leftPtr];
        leftPtr--;
        rightPtr++;
    }

    // If left is smaller, increment middle
    if (isLeftSmaller) {
        let carry = 1;
        leftPtr = mid - 1;
        rightPtr = len % 2 === 0 ? mid : mid + 1;

        while (leftPtr >= 0 && carry > 0) {
            let digitSum = parseInt(result[leftPtr]) + carry;
            result[leftPtr] = (digitSum % 10).toString();
            carry = Math.floor(digitSum / 10);
            result[rightPtr] = result[leftPtr];
            leftPtr--;
            rightPtr++;
        }
    }

    return parseInt(result.join(''));
}

// Example usage
const number = 123;
console.log("Next palindromic number:", nextPalindromicNumber(number));
