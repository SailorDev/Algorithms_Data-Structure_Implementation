function bubbleSort(arr) {
   const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
   }

   for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
         if (arr[j] > arr[j + 1]) {
            swap(arr, j, j + 1);
         }
      }
   }
   return arr;
}

console.log(bubbleSort([33, 11, 22, 55, 5, 4, 1]));



// --------------------- //
// with noSwap

function bubbleSort_2(arr) {
   let noSwap;

   for (let i = arr.length; i > 0; i--) {
      noSwap = true;
      for (let j = 0; j < i - 1; j++) {
         if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;

            noSwap = false;
         }
      }

      if (noSwap) break;
   }
   return arr;
}

console.log(bubbleSort_2([33, 11, 22, 55, 5, 4, 1]));
