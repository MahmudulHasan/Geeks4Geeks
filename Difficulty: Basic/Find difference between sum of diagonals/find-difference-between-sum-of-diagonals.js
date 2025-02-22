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
        let n = parseInt(readLine());
        let grid = [];
        for (let j = 0; j < n; j++) {
            let row = readLine().trim().split(" ").map((x) => parseInt(x));

            grid.push(row);
        }
        let obj = new Solution();
        let res = obj.diagonalSumDifference(grid, n);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[][]} grid
 * @param {number} n
 * @return {number}
 */

class Solution {
    diagonalSumDifference(grid, n) {
        //code here
        let primarySum = 0, secondarySum = 0;

    for (let i = 0; i < n; i++) {
        primarySum += grid[i][i]; 
        secondarySum += grid[i][n - 1 - i]; 
    }

    return Math.abs(primarySum - secondarySum);
    }
}