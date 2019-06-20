function numbersCompare(num1, num2) {
   return num1 - num2;
}

// console.log([5, 2, 8, 10, 15].sort(numbersCompare));



function compareByLen(str1, str2) {
   return str1.length - str2.length;
}


// console.log(["Colt", "Data Structure", "lol"].sort(compareByLen));

//---------------------------------------//

const swap = (arr, ind1, ind2) => {
   [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
}





function swap2(arr, idx1, idx2) {
   var temp = arr[idx1];
   arr[idx1] = arr[idx2];
   arr[idx2] = temp;
}