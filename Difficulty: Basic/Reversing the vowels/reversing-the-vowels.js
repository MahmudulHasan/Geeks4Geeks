//{ Driver Code Starts
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => {
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
    for(;i<t;i++){
        let s = readLine();
        let obj = new Solution();
        let res = obj.modify(s);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} n
 * @return {string} 
*/

class Solution {
    modify(s){
       //code here
       const vowels = new Set('aeiouAEIOU'); 
    const string = s.split('');          
    let i = 0, j = string.length - 1;    
    
    while (i < j) {
        if (!vowels.has(string[i])) {   
            i++;
        } else if (!vowels.has(string[j])) { 
            j--;
        } else {
            [string[i], string[j]] = [string[j], string[i]];
            i++;
            j--;
        }
    }
    
    return string.join(''); 
    }
}