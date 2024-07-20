import { Dog } from "./js/Dog.js";

const rexas = new Dog ('Rexas', "black", 6);
console.log(rexas);

console.log(rexas.hi());
console.log(rexas.think());
console.log(rexas.addNumbers(2,3));
console.log(rexas.addNumbers(-2,-8));
console.log(rexas.manyChickenLeg(15));

console.clear();

const brisius = new Dog ('Brisius', "red", 8);
console.log(brisius);
brisius.legsCount =4;
console.log(brisius);

console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius);

console.log(brisius.birthday());

console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius);