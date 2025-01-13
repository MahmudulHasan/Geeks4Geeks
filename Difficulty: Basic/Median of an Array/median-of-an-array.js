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
        res = solution.findMedian(arr); // Calling function and printing result
        if (parseInt(res) === res) {
            console.log(parseInt(res))
        } else {
            console.log(res);
        }
    }
}

// } Driver Code Ends


class Solution {
    findMedian(arr) {
        // code here.
        let sortedArr = arr.sort((a, b) => a - b);
        let length = sortedArr.length;
        if(length%2 != 0){
            let median = sortedArr[Math.floor(length/2)];
            return median;
        }else{
            let median1 = length/2;
            let median2 = median1-1;
            return (sortedArr[median1]+sortedArr[median2])/2;
        }
    }
    /*
    sortArr(arr) {
        for(let i = 0; i<arr.length; i++) {
            for(let j = i+1; j<arr.length; j++) {
                if(arr[i]>arr[j]) {
                    arr[i]=arr[j];
                }
            }
        }
        return arr;
    }
    */
}
