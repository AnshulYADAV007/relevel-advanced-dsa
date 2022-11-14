class HashTable {
    constructor() {
        this.CAPACITY = 255
        this.hashTable = new Array(this.CAPACITY).fill(undefined);
        this.size = 0; // (this.size/this.CAPACITY) = Load Factor
    }

    _hash(key) { // key is a string
        let hash = 0;
        for(let i = 0; i< key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.CAPACITY;
    }

    set(key, value) {
        const index = this._hash(key)
        if(this.hashTable[index] == undefined) {
            this.hashTable[index] = new Array();
        }
        this.hashTable[index].push([key, value]);
        this.size++;
    }

    get(key) {
        const index = this._hash(key);
        
        if(this.hashTable[index] == null) return undefined

        for(let [currentKey, currentValue] of this.hashTable[index]) {
            if(currentKey == key) return currentValue
        }
        
        return undefined
    }

    remove(key) {
        const index = this._hash(key)

        if(this.hashTable[index] == null) return false;

        for(let i = 0; i < this.hashTable[index].length ; i++) {
            let [currentKey, currentValue] = this.hashTable[index][i];
            if(currentKey == key) {
                this.hashTable[index].splice(i, 1);
                this.size--;
                return true;
            }
        }

        return false;
    }

    rehash() {
        let prevHashTable = this.hashTable;

        this.elementSize = 0
        this.CAPACITY *= 2

        this.hashTable = new Array(this.CAPACITY)
        for(let row = 0; row < prevHashTable.length; row++) {
            if(prevHashTable[row] == undefined) {
                continue;
            }else {
                for(let [key, value] of prevHashTable[row]) {
                    this.set(key, value)
                }
            }
        }
    }
}

// ascii

const hash = new HashTable()
hash.set("Archit", "Singhal")
hash.set("Aparna", "Mehta")
hash.set("Kushall", "Jain")
console.log(`Archit : ${hash.get("Archit")}`)