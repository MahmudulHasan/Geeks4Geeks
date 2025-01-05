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
    for(;i<t;i++)
    {
        let [N,M] =  readLine().trim().split(" ").map((x) => parseInt(x));
        let Grid = [];
        for(let j = 0;j<N;j++){
            let row=readLine().trim().split(" ").map((x) => parseInt(x));
            Grid.push(row);
        }
        let obj = new Solution();
        let res = obj.sumOfMatrix(N,M,Grid);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} N
 * @param {number} M
 * @param {number[][]} Grid
 * @return {number} 
*/

class Solution {
    sumOfMatrix(N,M,Grid){
        let sum = 0;
       //code here
       for(let i = 0; i< N; i++) {
           for(let j = 0; j< M; j++) {
               sum += Grid[i][j];
           }
       }
       return sum;
    }
}