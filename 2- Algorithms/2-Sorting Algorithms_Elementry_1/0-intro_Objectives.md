#  Elementary Sorting Algorithms  #

=== Objectives ===
 
[1] Implement bubble sort.
[2] Implement selection sort.
[3] Implement insertion sort.
[4] Understand why it is important to learn these simpler sorting algorithms.


# What is sorting?

-> Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.

(Examples)

Sorting numbers from smallest to largest
Sorting names alphabetically
Sorting movies based on release year
Sorting movies based on revenue

# Why do we need to learn this?

=>Sorting is an incredibly common task, so it's good to know how it works

=>There are many different ways to sort things, and different techniques have their own advantages and disadvantages

=>Sorting sometimes has quirks, so it's good to understand how to navigate them

=> In Interview Q.


# JavaScript has a sort method...
Yes, it does!

...but it doesn't always work the way you expect.

#Telling JavaScript how to sort

-> The built-in sort method accepts an optional comparator function
-> You can use this comparator function to tell JavaScript how you want it to sort
-> The comparator looks at pairs of elements (a and b), ->determines their sort order based on the return value
   => If it returns a negative number, a should come before b
   => If it returns a positive number, a should come after b,
   => If it returns 0, a and b are the same as far as the sort is concerned


# Site: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

# //-------------------------------------------------------

# SWAP 
=> First You could swap before sorting !

const swap = (arr, ind1, ind2) => {
   [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
}
---- or -----
function swap2(arr, idx1, idx2) {
   var temp = arr[idx1];
   arr[idx1] = arr[idx2];
   arr[idx2] = temp;
}

-------------------------------------------------------

#  Bubble Sort Overview  #

A sorting algorithm where the largest values bubble up to the top!


# BubbleSort Pseudocode #

-> Start looping from with a variable called i the end of the array towards the beginning
-> Start an inner loop with a variable called j from the beginning until i - 1
-> If arr[j] is greater than arr[j+1], swap those two values!
-> Return the sorted array

#Link:
https://visualgo.net/en/sorting


# Big O 
==== Time Complexity ====

O(n^2)  => Not Good at all

O(n)    => best case scenario if -> array already sorted and using noSwap as i did .




-------------------------------------------------------

#  Selection Sort Overview  #

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

# Selection Pseudocode #

-> Store the first element as the smallest value you've seen so far.

-> Compare this item to the next item in the array until you find a smaller number.

-> If a smaller number is found, designate that smaller number to be the new "minimum" and              continue until the end of the array.

-> If the "minimum" is not the value (index) you initially began with, swap the two values.

-> Repeat this with the next element until the array is sorted.

#Link: 
https://visualgo.net/en/sorting

# Big O 

O (n^2); 

=> better than bubble sort if i want to minmize the Swaps 
=> One Swap of each Loop .


-------------------------------------------------------

# Insertion Sort Overview #

Builds up the sort by gradually creating a larger left half which is always sorted

# Insertion Sort Pseudocode #

-> Start by picking the second element in the array

-> Now compare the second element with the one before it and swap if necessary.

-> Continue to the next element and if it is in the incorrect order, iterate through the sorted          portion (i.e. the left side) to place the element in the correct place.

-> Repeat until the array is sorted.

# Link :
https://visualgo.net/en/sorting



# Big O Notation :

worst : O(n^2)

best(almost sorted) : O(n)


-------------------------------------------------------

# Comparing  ( Bubble & Selection & Insertion )

#Link :
https://www.toptal.com/developers/sorting-algorithms



# Big O Notation : 

=== Time Complexity :->
   ( Bubble + Insertion + Selection )

      1- Average : O(n^2)  all 3

      2- Worst   : O(n^2)  all 3

      3- Best    : O(n) -- (Bubble and Insertion) but Selection is : O(n^2)


=== Space Complexity :->
      (Bubble + Insertion + Selection)

         O (1)    all 3



         

