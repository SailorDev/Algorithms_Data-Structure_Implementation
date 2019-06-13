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

   push(val) {
      const newNode = new Node(val);
      if (!this.head) {
         this.head = newNode;
         this.tail = this.head;
      } else {
         this.tail.next = newNode;
         this.tail = newNode;
      }
      this.length++;
      return this;
   }

   traverse() {
      let current = this.head;
      while (current) {
         console.log(current.val);
         current = current.next;
      }
   }

   pop() {
      if (!this.head) return undefined;
      let current = this.head;
      let newTail = current;
      while (current.next) {
         newTail = current;
         current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
         this.head = null;
         this.tail = null;
      }
      return current;
   }

   shift() {
      if (!this.head) return undefined;

      let currentHead = this.head;
      this.head = currentHead.next;

      this.length--;
      if (this.length === 0) {
         this.head = null;
         this.tail = null;
      }

      return currentHead;
   }

   unshift(val) {
      let newNode = new Node(val);

      if (!this.head) {
         this.head = newNode;
         this.tail = this.head;
      } else {
         newNode.next = this.head;
         this.head = newNode;
      }

      this.length++;
      return this;
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

   set(index, val) {
      let foundNode = this.get(index);

      if (foundNode) {
         foundNode.val = val;
         return true;
      }
      return false;
   }

   insert(index, val) {
      if (index < 0 || index > this.length) return false;
      if (index === this.length) return !!this.push(val);
      if (index === 0) return !!this.unshift(val);

      let newNode = new Node(val);
      let prev = this.get(index - 1);
      let temp = prev.next;

      prev.next = newNode;
      newNode.next = temp;

      this.length++;
      return true;

   }

   remove(index) {
      if (index < 0 || index >= this.length) return false;
      if (index === this.length - 1) return this.pop();
      if (index === 0) return this.shift();

      let prev = this.get(index - 1);
      let removed = prev.next;

      prev.next = removed.next;

      this.length--;
      return removed;
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
list.push("Hello")
list.push("there")
list.push(44);


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


// list.set(0, "Fuck")

// list.insert(1, "Hola");

// list.remove(99);



list.print();
list.reverse();
list.print();

// console.log(list)