//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
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
    let s = readLine();
    let obj = new Solution();
    let res = obj.firstRepChar(s);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} s
 * @return {string}
 */

class Solution {
  firstRepChar(s) {
    // code here
    let seen = new Set(); 

    for (let char of s) {
        if (seen.has(char)) {
            return char; 
        }
        seen.add(char);
    }

    return -1; 
  }
}