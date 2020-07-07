let carnivores = [];
let vegetarians = [];

class Cat {
  constructor(name, color, gender, weight, sound, vegetarian, species, fly) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.sound = sound;
    this.vegetarian = vegetarian;
    this.species = species;
  }
}

let calico = new Cat("Koda", "Orange Black", "F", 10, "Meow", true, "House Cat")
let mountainLion = new Cat("Big Boy", "Brown", "F", 75, "Roar", false, "Lion")
let tabbyCat = new Cat("Jax", "Orange", "M", 10, "Meow", true, "House Cat")
let puma = new Cat("Pumy", "Black", "M", 50, "Roar", false, "Tiger")

class Pen {
  constructor(cat) {
    this.cat = cat
  }
  vegetarian() {
    this.cat.forEach((cat) => {
      if (cat.vegetarian == false) {
        carnivores.push(cat)
      } else if (cat.vegetarian == true)
        vegetarians.push(cat)
    })
  }



}
