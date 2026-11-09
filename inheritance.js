class Kucing {
	//Encapsulation
	#makan = "nasi"
	constructor(family_name, foot) {
		this.name = family_name
		this.foot = foot
	}
	info() {
		return `pet name : ${this.name}, foot: ${this.#makan}`
	}
}

class Tiger extends Kucing {
	family() {
		return `tiger is family of : ${this.name}}`
	}
}

const orange = new Kucing("orange", 4)
const yello = new Tiger("Macan", 4)
console.log(orange.info())
console.log(yello.info())
console.log(yello.family())
