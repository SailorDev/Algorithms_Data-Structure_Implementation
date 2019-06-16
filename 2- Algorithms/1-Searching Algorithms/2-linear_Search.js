// like indexOf()
// loop through all elements of arrays to find if value match one of them!

function linearSearch(array, value) {
   for (let i = 0; i < array.length; i++) {
      if (array[i] === value) return i;
   }
   return -1;
}

console.log(linearSearch([1, 2, 3, 5, 6, 8], 5));


