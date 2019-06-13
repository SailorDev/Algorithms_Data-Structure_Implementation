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

   shift() {   // Remove Node From The Beginning
      if (!this.head) return undefined;

      let currentHead = this.head;  // make currentHead is point to the first Head ! (removed item)
      this.head = currentHead.next; // update the head to the next Node! (will be the first Head) after remove the currentHead!

      this.length--;   // decrement the length;
      if (this.length === 0) {
         this.head = null;
         this.tail = null;
      }

      return currentHead;
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

list.shift()
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());


console.log(list)