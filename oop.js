class Car {
	constructor(label, color) {
		this.label = label
		this.color = color
	}
	sound() {
		return `car name is : ${this.label} color is : ${this.color} `
	}
}
const myCar = new Car("BMW", "Red")
console.log(myCar.sound())
