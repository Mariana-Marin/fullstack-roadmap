/*1. create a function that returns the number of animals that have a specific color, the function should be named "getAnimalsByColor", 
the function should receive only one parameter (the color the animal should have)
if the animal's color is: "White, Brown" and the color that we are searching is "Brown" the animal meets the color requirement.

if the animal's color is "Red-brown" and the color that we are searching is "red" the animal meets the color requirement.

notes:

there are 8 animals with the color "Brown"

there is only 1 animal with the color "Blue"

there are 2 animals with the color "Red"*/

const animals = [
  { name: "Dog", color: "White, Brown" },
  { name: "Lion", color: "Brown" },
  { name: "Tiger", color: "Orange, Brown" },
  { name: "Tiger2", color: "Orange, Brown" },
  { name: "Cat", color: "Black" },
  { name: "Parrot", color: "Green, Red" },
  { name: "Fish", color: "Blue" },
  { name: "Hamster", color: "Golden, Brown" },
  { name: "Rabbit", color: "White" },
  { name: "Turtle", color: "Green, Brown" },
  { name: "Horse", color: "Black, White" },
  { name: "Pig", color: "Pink" },
  { name: "Cow", color: "Black, White" },
  { name: "Sheep", color: "White" },
  { name: "Goat", color: "Brown, White" },
  { name: "Duck", color: "Yellow, Brown" },
  { name: "Chicken", color: "White, Red" },
  { name: "Frog", color: "Green" },
];

function getAnimalsByColor(searchColor) {
  let count = 0;

  for (let i = 0; i < animals.length; i++) {
    const animalColor = animals[i].color;
    if (animalColor.includes(searchColor)) {
      count++;
    }
  }
  return count;
}

console.log(getAnimalsByColor("Brown"));
console.log(getAnimalsByColor("Red"));
console.log(getAnimalsByColor("Blue"));
