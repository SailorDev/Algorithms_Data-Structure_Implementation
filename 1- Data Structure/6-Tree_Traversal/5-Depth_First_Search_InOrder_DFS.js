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
tree.depthFirstSearchPostOrder();





