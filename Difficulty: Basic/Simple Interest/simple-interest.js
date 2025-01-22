//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let [P, R, T] = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.simpleInterest(P, R, T);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} P
 * @param {number} R
 * @param {number} T
 * @return {number}
 */

class Solution {
    simpleInterest(P, R, T) {
        // code here
        let simInt1 = parseFloat(((P*R)/100)*T).toFixed(2);
        return simInt1;
    }
}
