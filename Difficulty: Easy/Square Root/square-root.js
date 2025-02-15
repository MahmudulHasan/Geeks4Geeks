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
        let n = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.floorSqrt(n));
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} N
 * @returns {number}
 */

class Solution {

    floorSqrt(n) {
        // your code here
        return Math.floor(Math.sqrt(n));
    }
}