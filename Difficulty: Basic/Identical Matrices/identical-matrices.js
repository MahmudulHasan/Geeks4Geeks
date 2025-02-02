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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = [];
        for(let i=0;i<n;i++){
            let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
            let brr = [];
            for(let j=0;j<n;j++){
                brr.push(input_ar1[j]);
            }
            arr.push(brr);
        }
        let arr1 = [];
        for(let i=0;i<n;i++){
            let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
            let brr1 = [];
            for(let j=0;j<n;j++){
                brr1.push(input_ar1[j]);
            }
            arr1.push(brr1);
        }
        let obj = new Solution();
        let res = obj.areMatricesIdentical(n,arr,arr1);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends


//User function Template for javascript



/**
 * @param {number} n
 * @param {number[]} grid1
 * @param {number[]} grid2
 * @returns {number}
*/

class Solution{
    areMatricesIdentical(n,grid1, grid2){
        //code here
        for(let i = 0; i<n; i++) {
            for(let j = 0; j<grid1[i].length; j++) {
                if(grid1[i][j] !== grid2[i][j]) {
                    return 0;
                    break;
                }
            }
        }
        return 1;
    }
}


