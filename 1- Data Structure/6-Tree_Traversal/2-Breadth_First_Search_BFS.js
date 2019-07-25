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
	}
};

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(20);
tree.insert(9);
tree.insert(7);
tree.insert(2);

tree.breadthFirstSearch();
