function Person(name) {
    if(name) this.name = name;
}
Person.prototype.name = 'ONE MAN';

var p1 = new Person();
console.log(p1.name);
p1.name = 'Mike';
console.log(p1.name);
var p2 = new Person();
console.log(p2.name);