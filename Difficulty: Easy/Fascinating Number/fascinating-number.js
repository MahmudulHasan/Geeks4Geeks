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
        let res = obj.fascinating(n);
        if (res) {
            console.log("true");
        } else {
            console.log("false");
        }
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 * @return {boolean}
 */

class Solution {
    fascinating(n) {
    // code here
    if (n < 100) return false; 

    
    let num2 = n * 2;
    let num3 = n * 3;

    let concatenated = n.toString() + num2.toString() + num3.toString();
    if (concatenated.length !== 9) {
        return false;
    }

    let digits = new Set(concatenated);
    
    return digits.size === 9 && !digits.has('0');
    }
}
