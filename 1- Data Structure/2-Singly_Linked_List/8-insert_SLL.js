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

   insert(index, val) {   //insert newNode in index position with certain value;
      if (index < 0 || index > this.length) return false;  // if index less than 0 or greater than length >>> return false!
      if (index === this.length) return !!this.push(val);  // if index === the last item >>> use push method(val) !
      if (index === 0) return !!this.unshift(val);         // if index === first item >>>> use unshift method(val) !

      let newNode = new Node(val);     // make newNode using class NODE;
      let prev = this.get(index - 1);  // make prev to GET the prev Node of indexed required !
      let temp = prev.next;            // make temp to be === next of prev !

      prev.next = newNode;    // update (prev.next) to be newNode ! 
      newNode.next = temp;    // update (newNode.next) to be temp (prev.next)

      this.length++;
      return true;

   }
}


let list = new SinglyLinkedList();
list.push("Hello")
list.push("there")
list.push(44);

list.insert(1, "Hola");


console.log(list)