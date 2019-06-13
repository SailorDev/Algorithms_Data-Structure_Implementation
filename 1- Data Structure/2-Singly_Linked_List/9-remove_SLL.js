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

   remove(index) {   // remove node at index position !
      if (index < 0 || index >= this.length) return false;   // if index less than Zero or greater than length  === return false !
      if (index === this.length - 1) return this.pop();    // if index === last item >> return pop method
      if (index === 0) return this.shift();   // if index === first item >> return shift method!

      let prev = this.get(index - 1);    // make prev var. to be get method (index - 1) last item!
      let removed = prev.next;     // make variable for removed item which will return it at end ! (prev.next)!

      prev.next = removed.next;   // >>>> make pointer next of  (prev) to be the next property of removed item.

      this.length--;
      return removed;
   }
}


let list = new SinglyLinkedList();
list.push("Hello")
list.push("there")
list.push(44);


list.remove(99);

console.log(list)