//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let c = readLine().trim();
        let obj = new Solution();
        let res = obj.isVowel(c);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} c
 * @return {string}
 */
class Solution {
    isVowel(c) {
        //code here
        let lowC = c.toLowerCase();
        if(lowC === "a" || lowC === "e" || lowC === "i" || lowC === "o" || lowC === "u") {
            return "YES";
        }
        return "NO";
    }
}