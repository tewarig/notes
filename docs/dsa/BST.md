# Binary Search Tree

or bst stands for binary tree

```js
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add = (data) => {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const SearchTree = (data) => {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else {
            return SearchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else {
            return SearchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return SearchTree(node);
    }
  };
}
```
