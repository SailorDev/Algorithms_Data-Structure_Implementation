// array must be sorted 
// divide and conquer

function binarySearch(arr, elem) {
   let start = 0;
   let end = arr.length - 1;
   let middle = Math.floor((start + end) / 2);

   while (arr[middle] !== elem && start <= end) {
      if (elem < arr[middle]) end = middle - 1;
      else start = middle + 1;
      middle = Math.floor((start + end) / 2);
   }
   return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([2, 3, 4, 6, 8, 10, 22, 40, 50, 100], 50));  // 8

// ----------------------------   The Same Operation With Long Steps ------------- //

function binarySearch_2(arr, elem) {
   let start = 0;
   let end = arr.length - 1;
   let middle = Math.floor((start + end) / 2);

   while (arr[middle] !== elem && start <= end) {
      if (elem < arr[middle]) {
         end = middle - 1;
      } else {
         start = middle + 1;
      }

      middle = Math.floor((start + end) / 2);
   }

   if (arr[middle] === elem) {
      return middle;
   }

   return -1;
}


console.log(binarySearch_2([2, 3, 4, 6, 8, 10, 22, 40, 50, 100], 50));
