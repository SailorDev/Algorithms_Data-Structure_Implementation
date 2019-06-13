class Node {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}

class SinglyLinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }

   get(index) {   // get the node according the (index) position on list!
      if (index < 0 || index >= this.length) return null;  // if index less than Zero (or) greater than the length of list  return NULL!! 

      let counter = 0;    // MAKE variable counter to make loop through to check if index !== coutner
      let current = this.head;  // MAKE variable current to be HEAD !

      while (counter !== index) {   // 1- MAKE LOOP if (counter !== index)
         current = current.next;  //--> update the current to be next pointer of next node !
         counter++;  // increment the counter!
      }

      return current;     // return node within index required!
   }
}




let list = new SinglyLinkedList();

// list.push("Hello")
// list.push("there")
// list.push(44);


// list.pop()
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());

// list.shift()
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());

// list.unshift("Fuck");   
// list.unshift("People"); 

console.log(list.get(0))
console.log(list.get(1))

// console.log(list)