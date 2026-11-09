class Calc {
	constructor() {
		this.num = 0
	}
	tambah(number) {
		this.num += number
		return this
	}
	kurang(number) {
		this.num -= number
		return this
	}
	hasil() {
		console.log(`hasil adalah: ${this.num}`)
	}
}

const sumCalc = new Calc()
sumCalc.tambah(20).kurang(10).hasil()
