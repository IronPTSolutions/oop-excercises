console.log("Ex 1");

const p1 = new Person("John", 30);
const p2 = new Person("Angela", 31);

console.log(p1);
console.log(p2);

console.log("Ex 2");

const theDog = new Dog("Bobby", "Golden");
console.log(theDog);
theDog.setName("Chester");
console.log(theDog);

console.log("Ex 4");

const c1 = new Circle(10);

console.log("area", c1.getArea());
console.log("circumference", c1.getCircumference());

console.log("Ex 6");

const e1 = new Employee("Tom", "Teacher", 100);

console.log(e1);
e1.updateSalary(200);
console.log(e1);
