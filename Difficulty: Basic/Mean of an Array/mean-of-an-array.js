//{ Driver Code Starts
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(Number); // Reading array input
        let solution = new Solution();
        console.log(solution.findMean(arr)); // Calling function and printing result
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

    findMean(arr) {
        // code here
        let sum = 0;
        for(let i = 0; i< arr.length; i++) {
            sum += arr[i];
        }
        return Math.floor(sum/arr.length);
    }
}