class Stack {
  constructor() {
    this.top = null;
    this.count = 0;
  }

  // Método para agregar un elemento a la pila
  push(element) {
    const newNode = { value: element, next: this.top };
    this.top = newNode;
    this.count++;
  }

  // Método para eliminar y devolver el elemento en la cima de la pila
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.top.value;
    this.top = this.top.next;
    this.count--;
    return value;
  }

  // Método para ver el elemento en la cima sin eliminarlo
  peek() {
    return this.isEmpty() ? null : this.top.value;
  }

  // Método para verificar si la pila está vacía
  isEmpty() {
    return this.top === null;
  }

  // Método para obtener el tamaño de la pila
  size() {
    return this.count;
  }

  // Método para vaciar la pila
  clear() {
    this.top = null;
    this.count = 0;
  }

  // Método para recorrer la pila sin modificarla
  traverse() {
    let current = this.top;
    const elements = [];
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    return elements;
  }
}

module.exports = Stack;