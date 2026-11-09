class NewCar {
  sound() {
    console.log("sound good");
  }
}
class OldCar {
  sound() {
    console.log("sound old");
  }
}

const newcar = new NewCar();
const oldcar = new OldCar();
newcar.sound();
oldcar.sound();
