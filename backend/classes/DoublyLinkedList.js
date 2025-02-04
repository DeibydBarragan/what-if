class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null; // Referencia al siguiente nodo
    this.prev = null; // Referencia al nodo anterior
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null; // Primer nodo
    this.tail = null; // Último nodo
  }

  // Agregar nodo al final
  append(value) {
    const newNode = new DoublyNode(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  // Agregar nodo al inicio
  prepend(value) {
    const newNode = new DoublyNode(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  // Eliminar un nodo con un valor específico
  delete(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        if (current.prev) current.prev.next = current.next;
        if (current.next) current.next.prev = current.prev;
        if (current === this.head) this.head = current.next;
        if (current === this.tail) this.tail = current.prev;
        return;
      }
      current = current.next;
    }
  }

  // Recorrer hacia adelante
  traverseForward() {
    let current = this.head;
    let output = "";
    while (current) {
      output += current.value + " ⇄ ";
      current = current.next;
    }
    console.log(output + "null");
  }

  // Recorrer hacia atrás
  traverseBackward() {
    let current = this.tail;
    let output = "";
    while (current) {
      output += current.value + " ⇄ ";
      current = current.prev;
    }
    console.log(output + "null");
  }
}