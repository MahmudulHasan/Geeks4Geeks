//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.cubeRoot(n);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends



class Solution {
    /**
     * @parameter n  number
     * @returns number
     */
    cubeRoot(n) {
        // code here
        return Math.floor(Math.cbrt(n));
    }
}
