class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(otherPerson) {
    if (this.age > otherPerson.age) {
      return `${this.name} è più vecchio di ${otherPerson.name}.`;
    } else if (this.age < otherPerson.age) {
      return `${this.name} è più giovane di ${otherPerson.name}.`;
    } else {
      return `${this.name} ha la stessa età di ${otherPerson.name}.`;
    }
  }
}

const p1 = new Person("Andrea", 30);
const p2 = new Person("Lorenzo", 25);
const p3 = new Person("Carla", 30);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));
