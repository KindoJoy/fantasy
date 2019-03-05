// inherit

var idSeed = Date.now();

function newId() {
    return (++idSeed).toString(36);
}

function SuperClass(id, name, type) {
    this.id = id;
    this.name = name;
    this.type = type;
}
SuperClass.prototype = {
    getInfo: function () {
        return 'id:' + this.id + ',name:' + this.name + ",type:" + this.type;
    }
};

function SubClass(id, name, type) {
    SuperClass.call(this, id, name, type);
}
SubClass.prototype = Object.create(SuperClass.prototype);
SubClass.prototype.constructor = SubClass;

var first = new SubClass(newId(), 'first', 0);
var second = new SubClass(newId(), 'second', 1);

console.log(first);
console.log(first.getInfo());

console.log(second);
console.log(second.getInfo());