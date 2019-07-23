=== Objectives ===

[1] Define what a tree is.
[2] Compare and contrast trees and lists.
[3] Explain the differences between trees, binary trees, and binary search trees.
[4] Implement operations on binary search trees.

# WHAT IS A TREE?
    => A data structure that consists of nodes in a parent / child relationship.
    => Branches.

-> Lists === Linear
-> Trees === NonLinear

-> Singly Linked List (Sort of special case of a tree)

2  ->   12   ->  11

-> But if i added another branch it became Tree.
2   ->   12   ->  11
  \> 44

# //-------------------------------------------------------

 -> TREE TERMINOLOGY

[1] Root - The top node in a tree.

[2] Child -A node directly connected to another node when moving away from the Root.

[3] Parent - The converse notion of a child.

[4] Siblings -A group of nodes with the same parent.

[5] Leaf - A node with no children.

[6] Edge - The connection between one node and another.


# //-------------------------------------------------------

-> Uses Of Trees ::

    => HTML DOM
    => Network Routing
    => Abstract Syntax tree
    => Artificial Interligance
    => Folder on OS.
    => Computer OS.
    => JSON 

-> Uses Of Binary Trees ::
    
    => Decision Trees (true / false)
    => Database Indicies
    => Sorting Algorithms

# //-------------------------------------------------------

-> Kinds Of Trees ::  There are many many types of trees.  But i will focus 3
    
    => Tree
    => Binary Tree  (only parent-root have 2 nodes at most, may be 1)
    => Binary Search Tree (same as Binary Tree + Sorted in particlar way)


    *How Binary Search Trea Word*   ( BST )
    
        => Every parent node has at most two children
        
        => Every node to the (left) of a parent node is always less than the parent
        
        => Every node to the (right) of a parent node is always greater than the parent

    -> check wikipedia for Binary Search Tree.
    -> It makes it fast look up
    -> Easy to insert


# //-------------------------------------------------------

-> Our Tree Classes ::

    class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

    class BinarySearchTree {
        constructor() {
            this.root = null;
        }
    };

    let tree = new BinarySearchTree();
    tree.root = new Node(10);
    tree.root.right = new Node(15);
    tree.root.left = new Node(7);
    tree.root.left.right = new Node(9);

# //-------------------------------------------------------

 -> INSERTING A NODE Steps ::

    [1] Create a new node
    
    [2] Starting at the root
            [A]-> Check if there is a root, if not - the root now becomes that new node!
        
            [B]-> If there is a root, check if the value of the new node is greater than or less than the value of the root

            [C] If it is greater 
                    -> Check to see if there is a node to the right:
                            => If there is, move to that node and repeat these steps

                            => If there is not, add that node as the right property

            [D] If it is less
                    -> Check to see if there is a node to the left
                            => If there is, move to that node and repeat these steps.
                            
                            => If there is not, add that node as the left property

# // ------------------------------------------------- //

-> Finding a Node in a BST :: Steps - Iteratively or Recursively

    Starting at the root
        -> Check if there is a root, if not - we're done searching!
        
        -> If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
        
        -> If not, check to see if the value is greater than or less than the value of the root
        
        -> If it is greater 
            Check to see if there is a node to the right
                If there is, move to that node and repeat these steps
                If there is not, we're done searching!
        
        -> If it is less
            Check to see if there is a node to the left
                If there is, move to that node and repeat these steps
                If there is not, we're done searching!

# // -------------------------------------- //

-> Big O Notation for ((  BST  ))

    Insertion === O(log n)

    Searching === O(log n)

    === These are So good as Time Complexity...

    => But not gurnteed.

# // --------------------------------------- //
 
    => The Code 

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;

            while(true) {
                if (value === current.value) return undefined;

                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }

    find(value) {
        if (this.root === null) return undefined;

        let current = this.root;
        let found = false;

        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }

        if (!found) return undefined;

        return current;
    }

    contains(value) {
        if (this.root === null) return undefined;

        let current = this.root;
        let found = false;

        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true
            }
        }
        return false;
    }

};

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(20);
tree.insert(5);


tree.find(20);    // {}

tree.contains(20);  // true




