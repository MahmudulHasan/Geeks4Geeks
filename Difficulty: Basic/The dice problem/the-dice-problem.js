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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.oppositeFaceOfDice(N);
        console.log(res);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} N
 * @return {number}
 */
class Solution {
    oppositeFaceOfDice(n) {
        // code here
        if(n==1) return 6;
        if(n==2) return 5;
        if(n==3) return 4;
        if(n==4) return 3;
        if(n==5) return 2;
        if(n==6) return 1;
    }
}