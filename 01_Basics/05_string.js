const name = "Dilip";
const rollNumber = 21;

// console.log(name +  rollNumber + " value");

console.log(`My name is ${name} and  My Roll number is ${rollNumber}`);

const gameName = new String("Player Unknown's BattleGrounds");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('U'));

const newString = gameName.substring(0, 6);
console.log(newString); //Player

const anotherString = gameName.slice(0,7);
console.log(anotherString);

const reverseString = gameName.slice(13,-1);
console.log(reverseString);


const trinString = "      Dilip      ";
console.log(trinString);
console.log(trinString.trim());

const replaceString = "11-12-2023"
console.log(replaceString.replace('-','-','/'));

console.log(gameName.split(' '));