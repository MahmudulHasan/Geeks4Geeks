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
        let input_line = readLine().split(' ');
        let s = input_line[0];
        let obj = new Solution();
        let ans = obj.getMaxOccuringChar(s);
        console.log(ans);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {string} str
 * @returns {string}
 */
class Solution {
    // Function to find the maximum occurring character in a string.
    getMaxOccuringChar(s) {
    // code here
    let freq = new Array(26).fill(0); 
    
    for (let char of s) {
        freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let maxFreq = 0;
    let resultChar = '';

    
    for (let i = 0; i < 26; i++) {
        if (freq[i] > maxFreq) {
            maxFreq = freq[i];
            resultChar = String.fromCharCode(i + 'a'.charCodeAt(0));
        }
    }

    return resultChar;
    }
}