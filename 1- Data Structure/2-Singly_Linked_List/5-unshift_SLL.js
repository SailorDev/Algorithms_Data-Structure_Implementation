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

   unshift(val) {  // accept val
      let newNode = new Node(val);  // create New node with val according CLASS NODE !

      if (!this.head) {   // if there is empty list ! make Head ana Tail with the same newNode !
         this.head = newNode;
         this.tail = this.head;
      } else {
         newNode.next = this.head;  //Point the newNode (next) to be the Head (first position on list);
         this.head = newNode;    // Update the Head to be newNode (newly created Node)
      }

      this.length++;   // increment the length within added newNode !
      return this;     // return LinkedList
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

list.unshift("Fuck");   // will be added to first item until add another Node.
list.unshift("People"); // will be added to First Position (this.head);

console.log(list)