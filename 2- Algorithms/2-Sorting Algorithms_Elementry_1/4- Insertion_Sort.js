function insertionSort(arr) {
   for (let i = 1; i < arr.length; i++) {   // loop from second element !
      let currentVal = arr[i];

      for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {   // second loop from element before i ; and check for this!
         arr[j + 1] = arr[j];    // update value of (j+1) to be arr[j]
      }

      arr[j + 1] = currentVal;
   }

   return arr;
}


console.log(insertionSort([2, 1, 9, 76, 4]));