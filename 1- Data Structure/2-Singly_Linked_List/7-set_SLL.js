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

   get(index) {
      if (index < 0 || index >= this.length) return null;

      let counter = 0;
      let current = this.head;

      while (counter !== index) {
         current = current.next;
         counter++;
      }

      return current;
   }

   set(index, val) {  // change the value of indexed value
      let foundNode = this.get(index);    // ny using the get method !! to find the indexed node !

      if (foundNode) {   // if it found !
         foundNode.val = val;   // update the value of founded Node === to be value required !
         return true; // return true
      }
      return false;
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


// console.log(list.get(0))
// console.log(list.get(1))


list.set(0, "Fuck")
list.set(1, "changed!")


console.log(list)