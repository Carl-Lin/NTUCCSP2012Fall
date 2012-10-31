function funca() {}
var obja = new funca();
console.log('typeof funca = ' + typeof(funca));
console.log('typeof obja = ' + typeof obja);
console.log('obja instanceof funca = ' + (obja instanceof funca));

function Person(name, age) {
    this.name = name;
    this.age = age;
}

var p1 = new Person('Justin', 35);
var p2 = new Person('Momor', 32);
var p3 = new Person('Hamimi', 2);


function Student(school) {
    this.school = school;
}
var stu1 = {school : 'NTU'};
var stu2 = new Student('NCKU');
console.log(typeof stu1);
console.log(typeof stu2);
console.log(stu1 instanceof Student);
console.log(stu2 instanceof Student);

