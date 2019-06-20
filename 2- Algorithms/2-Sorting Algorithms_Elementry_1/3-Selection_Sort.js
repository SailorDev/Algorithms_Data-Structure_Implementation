function selectionSort(arr) {
   const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
   }

   for (let i = 0; i < arr.length; i++) {
      let lowest = i;    // 0 : first element on arr.

      for (let j = i + 1; j < arr.length; j++) {    // make j === the element after i;
         if (arr[lowest] > arr[j]) {
            lowest = j;
         }
      }

      if (i !== lowest) swap(arr, i, lowest);
   }

   return arr;
}


console.log(selectionSort([34, 22, 10, 19, 17]));