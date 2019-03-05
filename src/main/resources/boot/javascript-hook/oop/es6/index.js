let idSeed = Date.now();
let newId = () => (++idSeed).toString(36);

class SuperClass {
    constructor(id, name, type) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
    getInfo() {
        return 'id:' + this.id + ',name:' + this.name + ",type:" + this.type;
    }
}

class SubClass extends SuperClass {
    constructor(id, name, type) {
        super(id, name, type);
    }
}

let first = new SubClass(newId(), 'first', 0);
let second = new SubClass(newId(), 'second', 1);

console.log(first);
console.log(first.getInfo());

console.log(second);
console.log(second.getInfo());