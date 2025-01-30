<h2><a href="https://www.geeksforgeeks.org/problems/check-perfect-square2503/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab">Check perfect square</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p style="font-family: Nunito, Bangla583, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla583, sans-serif;">Given a positive integer n, check if it is perfect square or not.</span><br style="font-family: Nunito, Bangla583, sans-serif;">
<span style="font-size: 18px; font-family: Nunito, Bangla583, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla583, sans-serif;">NOTE: </strong>Try to solve the question using only addition and subtraction operation.</span><br style="font-family: Nunito, Bangla583, sans-serif;">
<br style="font-family: Nunito, Bangla583, sans-serif;">
<span style="font-size: 18px; font-family: Nunito, Bangla583, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla583, sans-serif;">Example 1:</strong></span></p>

<pre style="font-family: Nunito, Bangla583, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla583, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla583, sans-serif;">Input</strong>: n = 35
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla583, sans-serif;">Output:</strong>&nbsp;0&nbsp;
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla583, sans-serif;">Explanation</strong>: 35 is not perfect
square because sqrt(35) = 5 but
5*5 !=35.</span>
</pre>

<p style="font-family: Nunito, Bangla583, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla583, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla583, sans-serif;">Example 2:</strong></span></p>

<pre style="font-family: Nunito, Bangla583, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla583, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla583, sans-serif;">Input: </strong>n = 49
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla583, sans-serif;">Output:&nbsp;</strong>1
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla583, sans-serif;">Explanation</strong>: sqrt(49) = 7 and 
7*7 = 49, Hence 49 is perfect square. </span>
</pre>

<p style="font-family: Nunito, Bangla583, sans-serif;"><br style="font-family: Nunito, Bangla583, sans-serif;">
<span style="font-size: 18px; font-family: Nunito, Bangla583, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla583, sans-serif;">Your Task:&nbsp;&nbsp;</strong><br style="font-family: Nunito, Bangla583, sans-serif;">
You dont need to read input or print anything. Complete the function <strong style="font-family: &quot;Source Sans 3&quot;, Bangla583, sans-serif;">isPerfectSquare()&nbsp;</strong>which takes n&nbsp;as input parameter and returns&nbsp;1 if n is a perfect square else return&nbsp;0.</span><br style="font-family: Nunito, Bangla583, sans-serif;">
<br style="font-family: Nunito, Bangla583, sans-serif;">
<span style="font-size: 18px; font-family: Nunito, Bangla583, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla583, sans-serif;">Expected Time Complexity:</strong> O(sqrt(n))<br style="font-family: Nunito, Bangla583, sans-serif;">
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla583, sans-serif;">Expected Auxiliary Space:</strong> O(1)<br style="font-family: Nunito, Bangla583, sans-serif;">
<br style="font-family: Nunito, Bangla583, sans-serif;">
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla583, sans-serif;">Constraints:</strong><br style="font-family: Nunito, Bangla583, sans-serif;">
1&lt;= n&nbsp;&lt;=10<sup style="font-family: Nunito, Bangla583, sans-serif;">5</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Mathematical</code>&nbsp;<code>Algorithms</code>&nbsp;