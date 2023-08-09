class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(person) {
        if (person.age > this.age) {
            return person.name + " is older than me.";
        } else if (person.age < this.age) {
            return person.name + " is younger than me.";
        } 
        return person.name + " is the same age as me.";
    }
}

let p1 = new Person("Samuel", 24);
let p2 = new Person("Joel", 36);
let p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2));