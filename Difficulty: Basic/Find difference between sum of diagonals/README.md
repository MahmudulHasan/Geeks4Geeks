<h2><a href="https://www.geeksforgeeks.org/problems/find-difference-between-sum-of-diagonals1554/1?page=6&difficulty=School&sortBy=submissions">Find difference between sum of diagonals</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p style="font-family: Nunito, Bangla1046, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla1046, sans-serif;">Given a matrix Grid[][]&nbsp;of size NxN. Calculate the absolute difference between the sums of its diagonals.</span></p>

<p style="font-family: Nunito, Bangla1046, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla1046, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla1046, sans-serif;">Example 1:</strong></span></p>

<pre style="font-family: Nunito, Bangla1046, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla1046, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla1046, sans-serif;">Input:</strong>
N=3
Grid=[[1,2,3],[4,5,6],[7,8,9]]
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla1046, sans-serif;">Output: </strong>
0
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla1046, sans-serif;">Explanation:</strong>
Sum of primary diagonal = 1+5+9 = 15.
Sum of secondary diagonal = 3+5+7 = 15.
Difference = |15 - 15| = 0.</span></pre>

<p style="font-family: Nunito, Bangla1046, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla1046, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla1046, sans-serif;">Example 2:</span></strong></p>

<pre style="font-family: Nunito, Bangla1046, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla1046, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla1046, sans-serif;">Input:</strong>
N=3
Grid=[[1,1,1],[1,1,1],[1,1,1]]
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla1046, sans-serif;">Output:</strong>
0
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla1046, sans-serif;">Explanation:</strong>
Sum of primary diagonal = 1+1+1=3.
Sum of secondary diagonal = 1+1+1=3.
Difference = |3-3| = 0.</span></pre>

<p style="font-family: Nunito, Bangla1046, sans-serif;"><br style="font-family: Nunito, Bangla1046, sans-serif;">
<span style="font-size: 18px; font-family: Nunito, Bangla1046, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla1046, sans-serif;">Your Task:</strong><br style="font-family: Nunito, Bangla1046, sans-serif;">
You don't need to read input or print anything.Your task is to complete the function <strong style="font-family: &quot;Source Sans 3&quot;, Bangla1046, sans-serif;">diagonalSumDifference()</strong> which takes an integer N and a 2D array Grid as input parameters and returns the absolutes difference between the sums of its diagonals.</span></p>

<p style="font-family: Nunito, Bangla1046, sans-serif;"><br style="font-family: Nunito, Bangla1046, sans-serif;">
<span style="font-size: 18px; font-family: Nunito, Bangla1046, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla1046, sans-serif;">Expected Time Complexity:</strong>O(N)<br style="font-family: Nunito, Bangla1046, sans-serif;">
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla1046, sans-serif;">Expected Auxillary Space:</strong>O(1)</span></p>

<p style="font-family: Nunito, Bangla1046, sans-serif;"><br style="font-family: Nunito, Bangla1046, sans-serif;">
<span style="font-size: 18px; font-family: Nunito, Bangla1046, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla1046, sans-serif;">Constraints:</strong><br style="font-family: Nunito, Bangla1046, sans-serif;">
1&lt;=N&lt;=1000<br style="font-family: Nunito, Bangla1046, sans-serif;">
-1000&lt;=Grid[i][j]&lt;=1000, for 0&lt;=i,j</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Matrix</code>&nbsp;<code>Data Structures</code>&nbsp;