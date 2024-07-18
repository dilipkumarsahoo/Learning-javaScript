// for of
const myArray = [1, 2, 3, 4, 5]

for (const iterator of myArray) {
    // console.log(iterator);
}

const greetings ="Hello World!";
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Map 
const map = new Map();
map.set("IN","India")
map.set("UK","United Kingdom")
map.set("USA","United State of Amarica")

for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
}

// console.log(map);