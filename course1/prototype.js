function Person(name) {
    this.name = name;
}
var p1 = new Person('Steven');
console.log(p1);
console.log(p1.__proto__);
console.log(p1.__proto__ === Person.prototype);
console.log(p1.__proto__.__proto__);
console.log(p1.__proto__.__proto__ === Object.prototype);