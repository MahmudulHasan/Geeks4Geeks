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
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.isPalinArray(arr);
        console.log(res);

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {

    isPalinArray(arr) {
        // code here
        let numStr = "";
        let reversedStr = "";
        let bool = false;
        for(let i = 0; i<arr.length; i++) {
             numStr = arr[i].toString();
             reversedStr = numStr.split('').reverse().join('');
             if(numStr === reversedStr) {
                 bool = true;
             }else{
                 bool = false;
                 break;
             }
        }
        return bool;
    }
}