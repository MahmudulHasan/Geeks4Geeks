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
        let N = parseInt(readLine());
        let obj = new Solution();
        const ans = obj.isDigitSumPalindrome(N);
        if (ans) {
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
 * @return {number}
 */

class Solution {
    isDigitSumPalindrome(n) {
        // code here
        let sum = n.toString().split("").reduce((acc, curr) => acc + parseInt(curr), 0);
        let num = sum;
        let rev = 0,rem = 0;
     while(sum != 0)
     {
         rem = sum % 10;
        
         rev = rev*10 + rem;
          sum = Math.floor(sum / 10);
     }
     return rev === num;
    }
}
