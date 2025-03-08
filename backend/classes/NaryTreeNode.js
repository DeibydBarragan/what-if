const { DoublyLinkedList } = require("./DoublyLinkedList");

class NaryTreeNode {
  constructor(value) {
    this.value = value;
    this.children = new DoublyLinkedList();
  }

  addChild(node) {
    this.children.append(node);
  }

  getChild(index) {
    let childNode = this.children.head;
    let currentIndex = 0;
    
    while (childNode && currentIndex < index) {
      childNode = childNode.next;
      currentIndex++;
    }

    return childNode ? childNode.value : null;
  }

  getNodeByPath(pathArray) {
    let node = this;
    for (let index of pathArray) {
      node = node.getChild(index);
      if (!node) return null;
    }
    return node;
  }

  // Método para serializar a JSON evitando referencias circulares
  toJSON() {
    return {
      value: this.value,
      children: [...this.children].map(child => child.toJSON()) // Convertimos la lista a array
    };
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

module.exports = { NaryTree, NaryTreeNode };
