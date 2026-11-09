class Data {
	#userName = ""
	infoName() { // getter
		return this.#userName
	}
	setName(newName) { // seeter
		this.#userName = newName
	}
}

const myData = new Data
myData.setName("like")
console.log(myData.infoName())
