function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
};

Cat.prototype.cuteStatement = function() {
  console.log(`${this.owner} loves ${this.name}`);
};

Cat.prototype.cuteStatement = function() {
  console.log(`Everyone loves ${this.name}!`);
};

Cat.prototype.meow = function() {
  console.log(`${this.name} says meooooowwww...FEED ME.`);
}

// Methods defined on the instance takes priority
// over methods defined on the prototype
jerry.meow = function () {
  console.log(`${this.name} says JERRY is MEOWING.`);
}

const jerry = new Cat('Jerry', 'The Man');
const sushi = new Cat('Sushi', 'Joe Kim');
const doggy = new Cat('Doggy', 'Cat');
