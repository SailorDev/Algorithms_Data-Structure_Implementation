class Node {
   constructor(val, priority) {
      this.val = val;
      this.priority = priority;
   }
}


class PriorityQueue {
   constructor() {
      this.values = [];
   }

   enqueue(val, priority) {
      let newNode = new Node(val, priority);
      this.values.push(newNode);
      this.bubbleUp();
   }

   bubbleUp() {
      let index = this.values.length - 1;
      let element = this.values[index];

      while (index > 0) {
         let parentIndex = Math.floor((index - 1) / 2);
         let parent = this.values[parentIndex];

         if (element.priority >= parent.priority) break;

         this.values[parentIndex] = element;
         this.values[index] = parent;
         index = parentIndex;
      }
   }

   dequeue() {
      const min = this.values[0];
      const end = this.values.pop();
      if (this.values.length > 0) {
         this.values[0] = end;
         this.sinkDown();
      }
      return min;
   }

   sinkDown() {
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];

      while (true) {
         let leftChildIdx = 2 * idx + 1;
         let rightChildIdx = 2 * idx + 2;

         let leftChild, rightChild;
         let swap = null;

         if (leftChildIdx < length) {
            leftChild = this.values[leftChildIdx];
            if (leftChild.priority < element.priority) {
               swap = leftChildIdx;
            }
         }

         if (rightChildIdx < length) {
            rightChild = this.values[rightChildIdx];
            if (
               (swap === null && rightChild.priority < element.priority) ||
               (swap !== null && rightChild.priority < leftChild.priority)
            ) {
               swap = rightChildIdx;
            }
         }

         if (swap === null) break;

         this.values[idx] = this.values[swap];
         this.values[swap] = element;
         idx = swap
      }
   }
};




const HR = new PriorityQueue();
HR.enqueue("fever", 4);
HR.enqueue("broken leg", 2);
HR.enqueue("gun shoot", 1);
HR.enqueue("poison eating", 3);
HR.enqueue("head broken", 5);
HR.enqueue("drink gas", 6);

console.log(HR.dequeue());    // 1

console.log(HR.dequeue());    // 2

console.log(HR.dequeue());    // 3

console.log(HR.dequeue());    // 4

console.log(HR.dequeue());    // 5

console.log(HR.dequeue());    // 6
