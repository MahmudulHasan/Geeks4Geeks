//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = "";
    for (i = 0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().split(" ");
        const ob = new Solution();
        const ans = ob.longestCommonPrefix(arr);

        if (ans === "") {
            console.log("\"\"");
        } else
            console.log(ans);
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {string[]} arr
 * @param {number} n
 * @returns {string}
 */
class Solution {
    longestCommonPrefix(arr) {
        // code here
        if(!arr.length) return '';
        let prefix = arr[0];
        for(let i = 1; i<arr.length; i++) {
            while(arr[i].indexOf(prefix) !== 0) {
                prefix = prefix.slice(0, prefix.length-1);
                if(prefix === '') return '';
            }
        }
        return prefix;
    }
}