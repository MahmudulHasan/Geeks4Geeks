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
        let s = readLine();
        let obj = new Solution();
        let res = obj.countCamelCase(s);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends


//User function Template for javascript


/**
 * @param {string} s
 * @returns {number}
*/

class Solution{
    countCamelCase(s){
        //code here
        let lowerCase = s.toLowerCase();
        let count = 0;
        for(let i = 0; i< s.length;i++) {
            if(s[i] === lowerCase[i].toUpperCase()) {
                count++;
            }
        }
        return count;
    }
}


