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

   pop() {  // Remove from the end of list and return the removed Node !
      if (!this.head) return undefined;   // if there is empty list, return undefined!

      let current = this.head;   // make variable point to first (head) called current
      let newTail = current;     // make variable point to (current) at the begin the same! (newTail)

      while (current.next) {  // while there is point to next property of current ,, make loop until there is no next for the last Node!
         newTail = current;       // make newTail === current 
         current = current.next;  // update current to be the (current.next) pointer of next Node!!!!!!
      }
      this.tail = newTail;    // Update the Tail to be the (newTail)!
      this.tail.next = null;  // make the next property of tail to be (null) === the last item

      this.length--;   // decrement the length!

      if (this.length === 0) {  // if pop all items on list ,, make head and tail to be null!
         this.head = null;
         this.tail = null;
      }

      return current;    // return removed node !! (current)
   }
}


let list = new SinglyLinkedList();
// list.push("Hello")
// list.push("there")
// list.push(44);

console.log(list.pop());
console.log(list.pop());
console.log(list.pop());

console.log(list);
