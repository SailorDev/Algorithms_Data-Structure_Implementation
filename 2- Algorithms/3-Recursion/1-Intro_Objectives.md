Recursion ::

    => It's different way of thinking a solution.

    Objectives ::
        1- define what recursion is and how it can be used.
        2- Understand the two essential components of recursive function
        3- Visualize the call stack to better debug and understand recursive functions
        4- Use helper method recursion and pure recursion to solve more difficult problems.


    ===> What is recursion?
            A process (a function in our case) that calls itself

    ===> It's EVERYWHERE!
            JSON.parse / JSON.stringify
            document.getElementById and DOM traversal algorithms
            Object traversal
            Very common with more complex algorithms
            It's sometimes a cleaner alternative to iteration


    ===> Firs Implement example of Call Stack
        
        function takeShower() {
            return "Showering";
        }

        function cookFood() {
            let items = ['eggs', 'bread', 'milk'];
            return items[Math.floor(Math.random() * items.length)];
        };

        function eatBreakfast() {
            let meal = cookFood();
            return `Eating ${meal}`;
        };

        function wakeUp() {
            takeShower();
            eatBreakfast();
            console.log('Okey ready to go to work.')
        }

        wakeUp();

# // ------------------------------------------------- //

=> How recursive functions work ::
        
        Invoke the same function with a different input until you reach your base case!

        Base Case
            => The condition when the recursion ends.

            => This is the most important concept to understand

=> Two essential parts of a recursive function!
           [1] Base Case
           [2] Different Input

# // ----------------------------------------- //
=> First Recursion Function ::

    function countDown(num) {
        if (num <= 0) {
            console.log('All Done!');
            return;
        }

        console.log(num);
        num--;
        countDown(num);
    };

    countDown(4);
# // ----------------------------------------- //
    -> Second Recursion 

        = Can you spot the base case?
        = Do You Notice the different input?
        = What would happen if we didn't return?

    function sumRange(num) {
        if (num === 1) return 1;
        return num + sumRange(num - 1);
    }
    sumRange(3);    // 6
# // ----------------------------------------- //

function factorial(num) {
    let total = 1;

    for (let i = num; i > 0; i--) {
        total *= i;
    }
    return total;
};

factorial(3);


// ---//

function factorialRecursive(num) {
    if (num === 1) return 1;
    return num * factorialRecursive(num - 1);
}

factorialRecursive(4);


# // ----------------------------------------- //

$$ Where Things go Wrong $$

    => No Base Case.
    => Forgetting to return or Returning the wrong thing.
    => Stack Overflow.


# // ----------------------------------------- //

$$ Helper METHOD recursion $$
    function collectOddValues(arr) {
        let result = [];

        function helper(helperInput) {
            if (helperInput.length === 0) return;

            if (helperInput[0] % 2 !== 0) {
                result.push(helperInput[0])
            }

            helper(helperInput.slice(1));
        }

        helper(arr);

        return result;
    };


    collectOddValues([1,2,3,4,5,6,7,8,9,10]);


# // ----------------------------------------- //
    
$$ pure Recursion $$

    => Without Using nested functions as before 
    => without using any data structure like []

    function collectOddValuesPurely(arr) {
        let newArr = [];

        if (arr.length === 0) return newArr;

        if (arr[0] % 2 !== 0) {
            newArr.push(arr[0]);
        }

        newArr = newArr.concat(collectOddValuesPurely(arr.slice(1)));

        return newArr;
    }

    collectOddValuesPurely([1,2,3,4,5,6,7,8,9,10]);

# // ----------------------------------------- //

$$ Pure Recursion Tips $$

==> For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them

==> Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings

==> To make copies of objects use Object.assign, or the spread operator

# // ----------------------------------------- //

$$ What about big O? $$

    ==> Measuring time complexity is relatively simple. You can measure the time complexity of a recursive function as then number of recursive calls you need to make relative to the input

    ==> Measuring space complexity is a bit more challenging. You can measure the space complexity of a recursive function as the maximum number of functions on the call stack at a given time, since the call stack requires memory.

# // ----------------------------------------- //
$$ Tail Call Optimization $$

    => ES2015 allows for tail call optimization, where you can make some function calls without growing the call stack.

    => By using the return keyword in a specific fashion we can extract output from a function without keeping it on the call stack.

    => Unfortunately this has not been implemented across multiple browsers so it is not reasonable to implement in production code. 

# // ----------------------------------------- //

$$ Recap $$

    => A recursive function is a function that invokes itself

    => Your recursive functions should always have a base case and be invoked with different input each time

    => When using recursion, it's often essential to return values from one function to another to extract data from each function call

    => Helper method recursion is an alternative that allows us to use an external scope in our recursive functions

    => Pure recursion eliminates the need for helper method recursion, but can be trickier to understand at first

// -------------------------------------------- //

POWER SOLUTION
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}


FACTORIAL SOLUTION
function factorial(x){
   if (x < 1 ) return 0;
   if (x === 1 ) return 1;
   return x * factorial(x-1);
}


PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}


RECURSIVE RANGE SOLUTION
function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}


FIBONACCI SOLUTION
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
