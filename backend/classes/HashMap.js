class HashNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null; // Para manejar colisiones (encadenamiento)
  }
}

class HashMap {
  constructor(size = 10) {
    this.size = size;
    this.buckets = new Array(size).fill(null);
  }

  // Función hash simple
  _hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  // Insertar un par clave-valor
  set(key, value) {
    const index = this._hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = new HashNode(key, value);
    } else {
      let current = this.buckets[index];
      while (current) {
        if (current.key === key) {
          current.value = value; // Sobrescribe si la clave ya existe
          return;
        }
        if (!current.next) break;
        current = current.next;
      }
      current.next = new HashNode(key, value); // Manejo de colisiones (encadenamiento)
    }
  }

  // Obtener un valor por clave
  get(key) {
    const index = this._hash(key);
    let current = this.buckets[index];
    while (current) {
      if (current.key === key) return current.value;
      current = current.next;
    }
    return undefined;
  }

  // Eliminar un par clave-valor
  delete(key) {
    const index = this._hash(key);
    let current = this.buckets[index];
    let prev = null;

    while (current) {
      if (current.key === key) {
        if (prev) prev.next = current.next;
        else this.buckets[index] = current.next;
        return true;
      }
      prev = current;
      current = current.next;
    }
    return false;
  }

  // Mostrar el contenido del HashMap
  display() {
    this.buckets.forEach((node, index) => {
      let values = "";
      let current = node;
      while (current) {
        values += `[${current.key}: ${current.value}] -> `;
        current = current.next;
      }
      console.log(`Bucket ${index}: ${values}null`);
    });
  }
}
