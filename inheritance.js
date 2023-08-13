class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    console.log(this.sound);
  }
  fetch() {
    console.log("Fetching the ball!");
  }
}


const cat = new Animal("Cat", "Meow");
cat.makeSound();
cat.fetch();