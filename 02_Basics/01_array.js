// Array

const myArray = [0,3,4,7,9];
const myHerros = ["DareDevil","Ironman","Hulk"];

const newArray = new Array(4, 8, 9, 2);

// console.log(myArray[1]);

// Array method

// newArray.push(7);
// newArray.push(0);
// newArray.pop();

// newArray.unshift(3)
// newArray.shift();

// console.log(newArray.includes(3)); // avale in array or not
// console.log(newArray.indexOf(9)); //place of value

// const arrayString = newArray.join();

// console.log(newArray); 
// console.log(arrayString); 

console.log("A ", myArray);

const myn1 = myArray.slice(1,3) //Not take rang(last value) and did not manipulate original array
console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1,3) //Take rang(last value),but it manipulate original array 
console.log(myn2);
console.log("C ", myArray);