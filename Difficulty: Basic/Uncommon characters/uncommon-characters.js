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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let A = readLine();
        let B = readLine();
        let obj = new Solution();
        let res = obj.uncommonChars(A, B);
        console.log(res);

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {string}
 */

class Solution {
    uncommonChars(s1, s2) {
        // code here
        const set1 = new Set(s1);
    const set2 = new Set(s2);

    let uniqueChars = [];
    for (let char of set1) {
        if (!set2.has(char)) uniqueChars.push(char);
    }

    for (let char of set2) {
        if (!set1.has(char)) uniqueChars.push(char);
    }

    return uniqueChars.sort().join('');
    }
}
