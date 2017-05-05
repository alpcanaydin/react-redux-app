class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class ExamplePerson extends Person {
  constructor(name, lastName) {
    super(name);

    this.lastName = lastName;
  }

  getLastName() {
    return this.lastName;
  }

  getFullName() {
    return `${this.getName()} ${this.getLastName()}`;
  }
}

const person = new ExamplePerson('Alpcan', 'Aydın');
console.log(person.getFullName());
