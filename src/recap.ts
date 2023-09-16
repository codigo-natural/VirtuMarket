// Safe type

const myName = 'Camilo';
const myAge = 12;
const suma = (a: number, b: number) => {
	return a + b;
}
suma(12 + 4)

// Classes

class Persona {

	constructor(private age: number, private name: string) {}

	getSumary() {
		return `my name is ${this.name}, ${this.age}`;
	}
}

const camilo = new Persona(15, 'camilo');
camilo.getSumary();