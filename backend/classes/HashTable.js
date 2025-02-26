class HashTable {
  constructor(size = 53) {
      this.keyMap = new Array(size);
  }

  _hash(key) {
      let total = 0;
      let PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
          let char = key[i];
          let value = char.charCodeAt(0) - 96;
          total = (total * PRIME + value) % this.keyMap.length;
      }
      return total;
  }

  set(key, value) {
      let index = this._hash(key);
      if (!this.keyMap[index]) {
          this.keyMap[index] = [];
      }
      this.keyMap[index].push([key, value]);
  }

  get(key) {
      let index = this._hash(key);
      if (this.keyMap[index]) {
          for (let pair of this.keyMap[index]) {
              if (pair[0] === key) {
                  return pair[1];
              }
          }
      }
      return undefined;
  }

  delete(key) {
      let index = this._hash(key);
      if (this.keyMap[index]) {
          this.keyMap[index] = this.keyMap[index].filter(pair => pair[0] !== key);
      }
  }

  keys() {
      let keysArr = [];
      for (let bucket of this.keyMap) {
          if (bucket) {
              for (let pair of bucket) {
                  keysArr.push(pair[0]);
              }
          }
      }
      return keysArr;
  }

  values() {
      let valuesArr = new Set();
      for (let bucket of this.keyMap) {
          if (bucket) {
              for (let pair of bucket) {
                  valuesArr.add(pair[1]);
              }
          }
      }
      return [...valuesArr];
  }

  entries() {
    let entriesArr = [];
    for (let bucket of this.keyMap) {  // Recorre cada índice de la tabla
        if (bucket) {
            for (let pair of bucket) { // Recorre cada elemento en la lista enlazada
                entriesArr.push(pair);
            }
        }
    }
    return entriesArr;
   }

}

module.exports = HashTable;