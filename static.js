class Data {
  static help() {
    return `Data basic Example`;
  }
}

const dataone = new Data();
//console.log(dataone.help()) // this is not work
console.log(Data.help());
