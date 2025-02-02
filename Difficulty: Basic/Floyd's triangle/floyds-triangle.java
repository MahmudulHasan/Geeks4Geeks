//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            int N = sc.nextInt();

            Solution ob = new Solution();
            ob.printFloydTriangle(N);
        }
    }
}

// } Driver Code Ends


// User function Template for Java
class Solution {
    static void printFloydTriangle(int n) {
        // code here
         int count =1;
        for(int r=0;r<n;r++) {
            for(int c=0;c<=r;c++) {
                System.out.print(count+" ");
                count++;
            }
            System.out.println();
        }
    }
}