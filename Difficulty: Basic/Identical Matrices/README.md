<h2><a href="https://www.geeksforgeeks.org/problems/identical-matrices1042/1?page=6&difficulty=School&sortBy=submissions">Identical Matrices</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p style="font-family: Nunito, Bangla434, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla434, sans-serif;">Given two square matrices Grid1 and Grid2 with the same dimensions(NxN).Check whether they are identical or not.</span></p>

<p style="font-family: Nunito, Bangla434, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla434, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla434, sans-serif;">Example 1:</strong></span></p>

<pre style="font-family: Nunito, Bangla434, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla434, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla434, sans-serif;">Input:</strong>
N=2
Grid1=[[1,2],[3,4]]
Grid2=[[1,2],[3,4]]
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla434, sans-serif;">Output:</strong>
1
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla434, sans-serif;">Explanation:</strong>
Both the matrices are identical,
so the answer is 1.</span></pre>

<p style="font-family: Nunito, Bangla434, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla434, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla434, sans-serif;">Example 2:</strong></span></p>

<pre style="font-family: Nunito, Bangla434, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla434, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla434, sans-serif;">Input:</strong>
N=2
Grid1=[[1,2][3,4]]
Grid2=[[1,2][3,2]]
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla434, sans-serif;">Output:</strong>
0
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla434, sans-serif;">Explanation:</strong>
Both the matrices are not identical,
So, answer is 0.</span></pre>

<p style="font-family: Nunito, Bangla434, sans-serif;"><br style="font-family: Nunito, Bangla434, sans-serif;">
<span style="font-size: 18px; font-family: Nunito, Bangla434, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla434, sans-serif;">Your Task:</strong><br style="font-family: Nunito, Bangla434, sans-serif;">
You don't need to read input or print anything.Your task is to complete the function <strong style="font-family: &quot;Source Sans 3&quot;, Bangla434, sans-serif;">areMatricesIdentical()</strong> which takes the integer N and two 2D arrays Grid1 and Grid2 as input parameters and returns 1 if the matrices are identical.Otherwise,it returns 0.</span></p>

<p style="font-family: Nunito, Bangla434, sans-serif;"><br style="font-family: Nunito, Bangla434, sans-serif;">
<span style="font-size: 18px; font-family: Nunito, Bangla434, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla434, sans-serif;">Expected Time Complexity:</strong>O(N<sup style="font-family: Nunito, Bangla434, sans-serif;">2</sup>)<br style="font-family: Nunito, Bangla434, sans-serif;">
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla434, sans-serif;">Expected Auxillary Space:</strong>O(1)</span></p>

<p style="font-family: Nunito, Bangla434, sans-serif;"><br style="font-family: Nunito, Bangla434, sans-serif;">
<span style="font-size: 18px; font-family: Nunito, Bangla434, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla434, sans-serif;">Constraints:</strong><br style="font-family: Nunito, Bangla434, sans-serif;">
1&lt;=N&lt;=1000<br style="font-family: Nunito, Bangla434, sans-serif;">
-1000&lt;=Grid1[i][j],Grid2[i][j]&lt;=1000,for 0&lt;=i,j</span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Matrix</code>&nbsp;<code>Data Structures</code>&nbsp;