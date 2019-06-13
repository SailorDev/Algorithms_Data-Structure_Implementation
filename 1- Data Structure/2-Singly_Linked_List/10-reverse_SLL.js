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

   reverse() {
      let node = this.head;
      this.head = this.tail;
      this.tail = node;

      let next = null;
      let prev = null;

      for (let i = 0; i < this.length; i++) {
         next = node.next;
         node.next = prev;
         prev = node;
         node = next;
      }

      return this;
   }


   print() {
      let arr = [];
      let current = this.head;
      while (current) {
         arr.push(current.val);
         current = current.next;
      }
      console.log(arr);
   }

}


let list = new SinglyLinkedList();
// list.push("Hello")
// list.push("there")
// list.push(44);


list.print();
list.reverse();
list.print();
