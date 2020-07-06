let carnivores = [];
let fliers = [];
let housePets = [];

// push animal attributes to global empty arrays

class Cat {
  constructor(name, color, gender, weight, sound, vegetarian, species, fly) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.sound = sound;
    this.vegetarian = vegetarian;
    this.species = species;
    this.fly = fly;
  }
}

let calico = new Cat("Koda", "Orange Black", "F", 10, "Meow", "Yes", "House Cat")
let mountainLion = new Cat("Big Boy", "Brown", "F", 75, "Roar", "No", "Lion")
let tabbyCat = new Cat("Jax", "Orange", "M", 10, "Meow", "Yes", "House Cat")

// use push method in animal classes?
class Bird {
  constructor(name, color, gender, weight, sound, vegetarian, species, fly) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.sound = sound;
    this.vegetarian = vegetarian;
    this.species = species;
    this.fly = fly;
  }
}

let eagle = new Bird("American", "Brown", "M", 10, "Eee", "No", "Bald", "Yes")
let robin = new Bird("Roby", "White", "F", 1, "Squeak", "Yes", "Ground", "No")

// create function that iterates through global arrays and will group similar animal attributes

function similarAnimals() {
  let
}





