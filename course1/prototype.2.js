function Person(name) {
    this.name = name;
}
function Superman(name, superpower) {
    this.superpower = superpower;
    Person.call(this, name);
}
Superman.prototype.__proto__ = Person.prototype;
Superman.prototype.usesuperpower = function() {
    console.log(this.name + ' use "' + this.superpower + '"');
}
var hulk = new Superman('HULK001', 'green and big');
hulk.usesuperpower();
console.log(hulk.hasOwnProperty('name'));
console.log(hulk.hasOwnProperty('usesuperpower'));
console.log(hulk instanceof Superman);
console.log(Person.prototype.isPrototypeOf(hulk));