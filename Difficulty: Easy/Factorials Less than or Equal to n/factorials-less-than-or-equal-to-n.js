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
        let res = obj.factorialNumbers(N);
        let s = "";
        for (let it of res) {
            s += it + " ";
        }
        console.log(s);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number} N
 * @returns {number}
 */

class Solution {
    // Function to calculate the factorial of a number.
    factorialNumbers(n) {
        // your code here
        const result = [];
        let i = 1;
        let factorial = 1; // 1! is 1

        while(factorial<=n) {
            result.push(factorial);
            i++;
            factorial *= i; 
        }
  
        return result;
    }
}