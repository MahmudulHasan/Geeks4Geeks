<h2><a href="https://www.geeksforgeeks.org/problems/game-with-nos3123/1?page=2&category=Arrays&difficulty=Basic&sortBy=submissions">Game with nos</a></h2><h3>Difficulty Level : Difficulty: Basic</h3><hr><div class="problems_problem_content__Xm_eO"><p style="font-family: Nunito, Bangla614, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla614, sans-serif;">You are given an array <strong style="font-family: &quot;Source Sans 3&quot;, Bangla614, sans-serif;">arr[]</strong>, and you have to re-construct an&nbsp;array <strong style="font-family: &quot;Source Sans 3&quot;, Bangla614, sans-serif;">arr[]</strong>.<br style="font-family: Nunito, Bangla614, sans-serif;">
The values in <strong style="font-family: &quot;Source Sans 3&quot;, Bangla614, sans-serif;">arr[]</strong> are obtained by doing Xor of consecutive elements in the array.</span></p>

<p style="font-family: Nunito, Bangla614, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla614, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla614, sans-serif;">Example 1:</strong></span></p>

<pre style="font-family: Nunito, Bangla614, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla614, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla614, sans-serif;">Input :</strong> n=5, arr[ ] = {10, 11, 1, 2, 3}
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla614, sans-serif;">Output :</strong> 1 10 3 1 3
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla614, sans-serif;">Explanation:</strong>
At index 0, arr[0] xor arr[1] = 1
At index 1, arr[1] xor arr[2] = 10
At index 2, arr[2] xor arr[3] = 3
...
At index 4, No element is left So, it will remain as
it is.
New Array will be {1, 10, 3, 1, 3}.</span></pre>

<p style="font-family: Nunito, Bangla614, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla614, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla614, sans-serif;">Example 2:</strong></span></p>

<pre style="font-family: Nunito, Bangla614, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla614, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla614, sans-serif;">Input :</strong> n=4, arr[ ] = {5, 9, 7, 6}
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla614, sans-serif;">Output :</strong>  12 14 1 6
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla614, sans-serif;">Explanation:</strong>
At index 0, arr[0] xor arr[1] = 12
At index 1, arr[1] xor arr[2] = 14
At index 2, arr[2] xor arr[3] = 1
At index 3, No element is left So, it will remain as it is.
New Array will be {12, 14, 1, 6}.</span></pre>

<p style="font-family: Nunito, Bangla614, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla614, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla614, sans-serif;">Your Task:</strong><br style="font-family: Nunito, Bangla614, sans-serif;">
This is a function problem. The input is already taken care of by the driver code. You only need to complete the function <strong style="font-family: &quot;Source Sans 3&quot;, Bangla614, sans-serif;">game_with_number()</strong> that takes an array <strong style="font-family: &quot;Source Sans 3&quot;, Bangla614, sans-serif;">(arr)</strong>, sizeOfArray <strong style="font-family: &quot;Source Sans 3&quot;, Bangla614, sans-serif;">(n)</strong>&nbsp;and return the array re-constructed array <strong style="font-family: &quot;Source Sans 3&quot;, Bangla614, sans-serif;">arr</strong>. The driver code takes care of the printing.</span></p>

<p style="font-family: Nunito, Bangla614, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla614, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla614, sans-serif;">Expected Time Complexity:</strong>&nbsp;O(N).<br style="font-family: Nunito, Bangla614, sans-serif;">
<strong style="font-family: &quot;Source Sans 3&quot;, Bangla614, sans-serif;">Expected Auxiliary Space:</strong>&nbsp;O(1).</span></p>

<p style="font-family: Nunito, Bangla614, sans-serif;"><span style="font-size: 18px; font-family: Nunito, Bangla614, sans-serif;"><strong style="font-family: &quot;Source Sans 3&quot;, Bangla614, sans-serif;">Constraints:</strong><br style="font-family: Nunito, Bangla614, sans-serif;">
1 ≤ N ≤ 10<sup style="font-family: Nunito, Bangla614, sans-serif;">5</sup><br style="font-family: Nunito, Bangla614, sans-serif;">
1 ≤ arr[i] ≤ 10<sup style="font-family: Nunito, Bangla614, sans-serif;">7</sup></span></p>
</div><br><p><span style=font-size:18px><strong>Topic Tags : </strong><br><code>Arrays</code>&nbsp;<code>Bit Magic</code>&nbsp;<code>Data Structures</code>&nbsp;