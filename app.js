let carnivores = [];
let fliers = [];
let housePets = [];


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
let puma = new Cat("Fast Cat", "Black", "F", 50, "Roar", "No", "Puma")
let tabbyCat = new Cat("Jax", "Orange", "M", 10, "Meow", "Yes", "House Cat")

class Pen {
  constructor(cats) {
    this.cats = cats
  }
  similarCats() {
    let catDisplay = ""
    this.cats.forEach()
  }
}




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

class Cage {
  constructor() {

  }
}

let parrot = new Bird("Pirate", "Green", "M", 1, "Squak", "Yes", "Bird", "Yes")
let eagle = new Bird("American", "Brown", "M", 10, "Eee", "No", "Bald", "Yes")
let robin = new Bird("Roby", "White", "F", 1, "Squeak", "Yes", "Ground", "No")









