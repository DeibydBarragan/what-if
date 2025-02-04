class NaryTreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}

class NaryTree {
  constructor(rootValue) {
    this.root = new NaryTreeNode(rootValue);
  }

  traverse(node = this.root, depth = 0) {
    if (!node) return;
    console.log(' '.repeat(depth * 2) + node.value);
    for (let child of node.children) {
      this.traverse(child, depth + 1);
    }
  }
}
