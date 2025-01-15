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
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));

        let obj = new Solution();
        let res = obj.isPerfect(arr);
        if (res)
            console.log("true");
        else
            console.log("false");
    }
}

// } Driver Code Ends



class Solution {
    /**
     * @param number[] arr
     * @returns boolean
     */
    isPerfect(arr) {
        // code here
        let newArr = [];
        for(let i = arr.length-1; i>=0; i--) {
            newArr.push(arr[i]);
        }
        const areEqual = arr.length === newArr.length && arr.every((val, index) => val === newArr[index]);
        return areEqual;
    }
}
