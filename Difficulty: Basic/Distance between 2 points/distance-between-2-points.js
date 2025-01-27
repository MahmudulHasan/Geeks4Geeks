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
    let [x1, y1, x2, y2] = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let obj = new Solution();
    let res = obj.distance(x1, y1, x2, y2);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 */
class Solution {
  distance(x1, y1, x2, y2) {
    //code here
    return Math.round(((x1-x2)**2+(y1-y2)**2)**0.5)
  }
}
