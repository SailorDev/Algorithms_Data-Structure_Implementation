# Objectives # 
[1] Describe what a searching algorithm is.
[2] Implement linear search on arrays.
[3] Implement binary search on sorted arrays.
[4] Implement a naive string searching algorithm.
[5] Implement the KMP string searching algorithm.

#How do we search?
Given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want.


#JavaScript has search!
There are many different search methods on arrays in JavaScript:

[1] indexOf
[2] includes
[3] find
[4] findIndex

------------------------------------------------------------------
#Linear Search Pseudocode
-> This function accepts an array and a value
-> Loop through the array and check if the current array element is equal to the value
-> If it is, return the index at which the element is found
-> If the value is never found, return -1


#Linear Search Big O
=== Best    === O(1) ... rare, if found item in array at the beginning!
=== Average === O(n)
=== Worst   === O(n)
------------------------------------------------------------------

#Binary Search    ======   Must be Sorted arrays !!

[1] Binary search is a much faster form of search
[2] Rather than eliminating one element at a time, you can eliminate half of the remaining            elements at a time
[3] Binary search only works on sorted arrays!


-->  Divide and Conquer  <--  Let's search for 15:

[ 1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19 ]
      

Left             Too Small                  Right



# Binary Search Pseudocode
-> This function accepts a sorted array and a value.
-> Create a left pointer at the start of the array, and a right pointer at the end of the array
-> While the left pointer comes before the right pointer:
      -> Create a pointer in the middle
      -> If you find the value you want, return the index
      -> If the value is too small, move the left pointer up
      -> If the value is too large, move the right pointer down
-> If you never find the value, return -1

 
# Binary Search Big O
=== Best Case              === O(1)

=== average and worst case === O(log n)    .. it's good also !


=> 16 elements = 4 "steps"
=> 32 elements = 5 "steps" (worst case)

=> To add another "step", we need to double the number of elements <=
------------------------------------------------------------------


# Naive String Search

[1] Suppose you want to count the number of times a smaller string appears in a longer string
[2] A straightforward approach involves checking pairs of characters individually



# Naive String Search
Long string:      Short string: 

wowomgzomg           omg
------------
=> Make loop from short to loop long to find matches ! and encounter the matches !
===
wowomgzomg
omg
===
------------
=== -> find 1 match
wowomgzomg
   omg
===
------------
=== -> find 2 match
wowomgzomg
       omg
===


# Naive String Search Pseudocode

-> Loop over the longer string
-> Loop over the shorter string
-> If the characters don't match, break out of the inner loop
-> If the characters do match, keep going
-> If you complete the inner loop and find a match, increment the count of matches
-> Return the count

------------------------------------------------------------------

# KMP String Search #

[1] The Knutt-Morris-Pratt algorithm offers an improvement over the naive approach
[2] Published in 1977
[3] This algorithm more intelligently traverses the longer string to reduce the amount of redundant searching



-> In order to determine how far we can shift the shorter string, we can pre-compute the length of the longest (proper) suffix that matches a (proper) prefix
-> This tabulation should happen before you start looking for the short string in the long string

------------------------------------------------------------------



###########      Big O of Search Algorithms       ################

[1]  Linear Search - O(n)

[2]  Binary Search - O(log n)

[3]  Naive String Search - O(nm)

[3]  KMP - O(n + m) time, O(m) space

------------------------------------------------------------------


###########      Recap      ################
=== Searching is a very common task that we often take for granted

=== When searching through an unsorted collection, (linear search) is the best we can do

=== When searching through a sorted collection, we can find things very quickly with (binary search)

=== KMP provides a linear time algorithm for searches in strings