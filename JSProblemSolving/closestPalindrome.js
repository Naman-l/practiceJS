/**
 * @param {string} n
 * @return {string}
 */
function reverse(n) {
    return String(n).split("").reverse().join('');
}

var nearestPalindromic = function (n) {
    let len = n.length;
    if (len === 1) return String(parseInt(n) - 1); 

    const candidates = [];
    let _KindOf101 = (BigInt(Math.pow(10, len)) + BigInt(1)).toString(); 
    let _KindOf999 = '9'.repeat(len - 1); 
    candidates.push(_KindOf101, _KindOf999);

    let mid = Math.floor((len + 1) / 2);
    let prefix = parseInt(n.slice(0, mid));
    const tmp = [prefix, prefix - 1, prefix + 1]; 

    for (let u of tmp) {
        let palindromeString;
        if (len % 2 === 0) {
            palindromeString = u + "" + reverse(u); 
        } else {
            palindromeString = u + "" + reverse(String(u).slice(0, -1)); 
        }
        candidates.push(palindromeString);
    }

    let ans = null;
    let minDifference = Number.MAX_SAFE_INTEGER;

    for (let candidate of candidates) {
        let candidateBigInt = BigInt(candidate); 
        let nBigInt = BigInt(n);

        if (candidateBigInt === nBigInt) continue; 
        
        let diff = candidateBigInt > nBigInt ? candidateBigInt - nBigInt : nBigInt - candidateBigInt; 

        if (diff < minDifference) {
            minDifference = diff;
            ans = candidate;
        } else if (diff === minDifference) {
            if (candidateBigInt < BigInt(ans)) {
                ans = candidate;
            }
        }
    }

    return String(ans);
};