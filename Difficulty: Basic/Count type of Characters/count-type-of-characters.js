//{ Driver Code Starts
//Initial Template for javascript

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

function printList(res = []){
    for(let i=0;i<res.length;i++){
        console.log(res[i]);
    }
    
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let s = readLine();
        let obj = new Solution();
        let res = obj.count(s);
        printList(res);
        
    
console.log("~");
}
}// } Driver Code Ends





// } Driver Code Ends


//User function Template for javascript


/**
 * @param {string} s
 * @returns {number[]}
*/

class Solution{
    count(s){
        //code here
        /*
        let lCount = 0;
        let uCount = 0;
        let spCount = 0;
        let nCount = 0;
        for(let i = 0; i< s.length; i++) {
            let str = s[i].charAt(i);
            if(str === s[i].toLowerCase()) {
                lCount++;
            }else if(str === s[i].toUpperCase()) {
                uCount++;
            }else if(parseInt(s[i])>=0 && parseInt(s[i])<=9) {
                nCount++;
            }else {
                spCount++;
            }
        }
        console.log(uCount);
        console.log(lCount);
        console.log(nCount);
        console.log(spCount);
        */
        let upperCaseCount = 0;
  let lowerCaseCount = 0;
  let digitCount = 0;
  let specialCharCount = 0;

  for (const char of s) {
    if (char >= 'A' && char <= 'Z') {
      upperCaseCount++;
    } else if (char >= 'a' && char <= 'z') {
      lowerCaseCount++;
    } else if (char >= '0' && char <= '9') {
      digitCount++;
    } else {
      specialCharCount++;
    }
  }

  // Print the results
  console.log(upperCaseCount); // Number of uppercase letters
  console.log(lowerCaseCount); // Number of lowercase letters
  console.log(digitCount);     // Number of digits
  console.log(specialCharCount);
    }
}

