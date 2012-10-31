function Person(name) {
    this.name = name;
    this.like = like;
    return this;
}
//Person.prototype.like = function(another) {
//    if(!(another instanceof Person)) throw new 
//    ('Not Person');
//    if(another == this) throw new Error('can not like myself');
//    this.likewith = another;
//    another.likewith = this;
//};

var like = function(another) {
    if(!(another instanceof Person)) throw new 
    ('Not Person');
    if(another == this) throw new Error('can not like myself');
    this.likewith = another;
    another.likewith = this;
};

//var p1 = Person('Steven');
var p1 = Person.call('Steven');
var p2 = new Person('Jobs');
p1.like(p2);
console.log(p1);
console.log(p2);

try {
    p2.like(p2);
} catch (err) {
    console.log(err.stack);
}
try {
    p2.like('I AM NOT PERSON');
} catch (err) {
    console.log(err);
}