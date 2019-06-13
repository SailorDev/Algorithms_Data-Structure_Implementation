class Node {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}

class SinglyLinkedList {
   constructor() {  // this is at the beginning!
      this.head = null;     // make the (first) item on list === null ;
      this.tail = null;     // make the (last) item on list === null ;
      this.length = 0;      // make the length of list === Zero ;
   }

   push(val) {  // Add Node to the End of List ! .. accept val
      const newNode = new Node(val);  // create newNode within CLASS NODE (val)

      if (!this.head) {    // if there is empty List .. make the head and tail to be the (newNode)!
         this.head = newNode;
         this.tail = this.head;
      } else {   // if the list not empty !
         this.tail.next = newNode;    //1- Point the tail -> next -> to be (newNode) created Node !
         this.tail = newNode;         //2- Update the tail to be === newNode !
      }

      this.length++;    // increment the length within added Node At the end of list !

      return this;      // return linkedList!
   }
}


let list = new SinglyLinkedList();
list.push("Hello")
list.push("there")
list.push(44);

console.log(list);














