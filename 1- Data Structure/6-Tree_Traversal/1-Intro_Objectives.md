[1] Tree Traversal ::

    => TRAVERSING A TREE
            Two ways:

        [A] Breadth-first Search    (BFS)   ---->
        [B] Depth-first Search      (DFS)   |
                                            ^
                    (InOrder - PreOrder - PostOrder)
 
    => For any kind of trees : even BST or any kind of Binary tree with no order 

    => How we can visit every Node one Time ??????? (classic computer science problem)

# // ---------------------------------------- //

[1] Breadth First Search ::

    =>Create a queue (this can be an array) and a variable to store the values of nodes visited

    => Place the root node in the queue

    => Loop as long as there is anything in the queue
        ->Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
        
        ->If there is a left property on the node dequeued - add it to the queue
        -> If there is a right property on the node dequeued - add it to the queue

    => Return the variable that stores the values

    breadthFirstSearch() {
        let node = this.root;
        let data = [];
        let queue = [];

        queue.push(node);

        while(queue.length) {
            node = queue.shift();
            data.push(node.value);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data;
    }

# // ---------------------------------------- //

[2] Depth First Search ::  Vertically to down
    
    [A] PreOrder ::    Steps - Recursively

    => Create a variable to store the values of nodes visited

    => Store the root of the BST in a variable called current

    => Write a helper function which accepts a node
            -> Push the value of the node to the variable that stores the values
        
            -> If the node has a left property, call the helper function with the left property on the node
        
            -> If the node has a right property, call the helper function with the right property on the node

    => Invoke the helper function with the current variable

    => Return the array of values

    =====  The Code =====

    depthFirstSearchPreOrder() {
        let data = [];
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.rigth) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }

# // ---------------------------------------- //

    [B] PostOrder ::    Steps - Recursively

        => Create a variable to store the values of nodes visited

        => Store the root of the BST in a variable called current

        => Write a helper function which accepts a node
            -> If the node has a left property, call the helper function with the left property on the node
            
            -> If the node has a right property, call the helper function with the right property on the node
            
            -> Push the value of the node to the variable that stores the values
            
            -> Invoke the helper function with the current variable

        => Return the array of values

        =====  The Code =====

        depthFirstSearchPostOrder() {
            let data = [];

            function traverse(node) {
                if (node.left) traverse(node.left);
                if (node.rigth) traverse(node.right);
                data.push(node.value);
            }

            traverse(this.root);
            return data;
        }


# // ---------------------------------------- //

    [C] InOrder ::    Steps - Recursively
        
        => Create a variable to store the values of nodes visited
        
        => Store the root of the BST in a variable called current
       
        => Write a helper function which accepts a node
            -> If the node has a left property, call the helper function with the left property on the node
            
            -> Push the value of the node to the variable that stores the values
            
            -> If the node has a right property, call the helper function with the right property on the node
        
        => Invoke the helper function with the current variable
        
        => Return the array of values


    ===== The Code  ======

    depthFirstSearchInOrder() {
        let data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }

            can be write :
         function traverse(node) {
            node.left && traverse(node.left);
            data.push(node.value);
            node.right && traverse(node.right);
        }

# // ---------------------------------------- //

$$ Which Is Better    (((((((  BFS     --    DFS   )))))))
    
    1- Time Complexity : BFS & DFS .. are the same because we search for every single node.

    2- Space Complexity : BFS is more hard, take more space on memory, so DFS is better.

    ----------

    3- InOrder : used Common, because the result will be ordered.

    4- PreOrder : used to export, a tree structure 
# // ---------------------------------------- //

$$ Recap $$

    1- Trees are non-linear data structures that contain a root and child nodes

    2- Binary Trees can have values of any type, but at most two children for each parent

    3- Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater

    4- We can search through Trees using BFS and DFS
# // ---------------------------------------- //

$$ The Final Code 


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
            };

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
            };

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
            };

            breadthFirstSearch() {
                let node = this.root;
                let data = [];
                let queue = [];

                queue.push(node);

                while(queue.length) {
                    node = queue.shift();
                    data.push(node.value);

                    if (node.left) queue.push(node.left);
                    if (node.right) queue.push(node.right);
                }

                return data;
            };

            depthFirstSearchPreOrder() {
                let data = [];

                function traverse(node) {
                    data.push(node.value);
                    if (node.left) traverse(node.left);
                    if (node.right) traverse(node.right);
                }

                traverse(this.root);
                return data;
            };

            depthFirstSearchPostOrder() {
                let data = [];

                function traverse(node) {
                    if (node.left) traverse(node.left);
                    if (node.right) traverse(node.right);
                    data.push(node.value);
                }

                traverse(this.root);
                return data;
            };

            depthFirstSearchInOrder() {
                let data = [];

                function traverse(node) {
                    if (node.left) traverse(node.left);
                    data.push(node.value);
                    if (node.right) traverse(node.right);
                }

                traverse(this.root);
                return data;
            }
        };

        const tree = new BinarySearchTree();
        tree.insert(10);
        tree.insert(6);
        tree.insert(3);
        tree.insert(8);
        tree.insert(15);
        tree.insert(20);

        tree.breadthFirstSearch();
        tree.depthFirstSearchInOrder();
        tree.depthFirstSearchPostOrder();
        tree.depthFirstSearchPreOrder();






