<h2><a href="https://www.geeksforgeeks.org/problems/count-type-of-characters3635/1?page=4&difficulty=School&sortBy=submissions">Count type of Characters</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p style="font-family: Nunito, Bangla509, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla509, sans-serif;">Given a string S, write a program to count the occurrence of Lowercase characters, Uppercase characters, Special characters and Numeric values in the string.<br style="font-family: Nunito, Bangla509, sans-serif;">
Note: There are no white spaces in the string.</span></p>

<p style="font-family: Nunito, Bangla509, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla509, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla509, sans-serif;">Example 1:</strong></span></p>

<pre style="font-family: Nunito, Bangla509, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla509, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla509, sans-serif;">Input:</strong>
S = "#GeeKs01fOr@gEEks07"
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla509, sans-serif;">Output:
</strong>5
8
4
2
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla509, sans-serif;">Explanation</strong>: There are 5 uppercase characters,
8 lowercase characters, 4 numeric characters
and 2 special characters.
</span>
</pre>

<p style="font-family: Nunito, Bangla509, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla509, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla509, sans-serif;">Example 2:</strong></span></p>

<pre style="font-family: Nunito, Bangla509, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla509, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla509, sans-serif;">Input</strong>: 
S = "*GeEkS4GeEkS*"
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla509, sans-serif;">Output:
</strong>6
4
1
2
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla509, sans-serif;">Explanation</strong>: There are 6 uppercase characters,
4 lowercase characters, 1 numeric characters
and 2 special characters.</span></pre>

<p style="font-family: Nunito, Bangla509, sans-serif;"><br style="font-family: Nunito, Bangla509, sans-serif;">
<span style="font-size: 18px; font-family: Nunito, Bangla509, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla509, sans-serif;">Your Task:</strong><br style="font-family: Nunito, Bangla509, sans-serif;">
You don't need to read input or print anything. Your task is to complete the function&nbsp;<strong style="font-family: &quot;Source Sans 3&quot;, Bangla509, sans-serif;">count()&nbsp;</strong>which takes the string S as input and returns an array of size 4 where arr[0] = number of uppercase&nbsp;characters, arr[1] = number of lowercase&nbsp;characters, arr[2] = number of numeric&nbsp;characters and arr[3] = number of special&nbsp;characters.</span></p>

<p style="font-family: Nunito, Bangla509, sans-serif;"><br style="font-family: Nunito, Bangla509, sans-serif;">
<span style="font-size: 18px; font-family: Nunito, Bangla509, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla509, sans-serif;">Expected Time Complexity:&nbsp;</strong>O(|S|).<br style="font-family: Nunito, Bangla509, sans-serif;">
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla509, sans-serif;">Expected Auxiliary Space:&nbsp;</strong>O(1).</span></p>

<p style="font-family: Nunito, Bangla509, sans-serif;"><br style="font-family: Nunito, Bangla509, sans-serif;">
<span style="font-size: 18px; font-family: Nunito, Bangla509, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla509, sans-serif;">Constraints:</strong><br style="font-family: Nunito, Bangla509, sans-serif;">
1&lt;=|S|&lt;=10<sup style="font-family: Nunito, Bangla509, sans-serif;">5</sup></span></p>

<p style="font-family: Nunito, Bangla509, sans-serif;">&nbsp;</p>
</div><p><span style=font-size:18px><strong>Company Tags : </strong><br><code>Amazon</code>&nbsp;<code>MakeMyTrip</code>&nbsp;<br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Strings</code>&nbsp;<code>Data Structures</code>&nbsp;