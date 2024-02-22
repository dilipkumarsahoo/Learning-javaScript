const marvel_hero = ["IronMan","Thor","Hulk"];
const dc_hero = ["SuperMan","Batman","Flash","WanderWoman"];

// marvel_hero.push(dc_hero);
// console.log(marvel_hero);
// console.log(marvel_hero[3][1]);

// const all_heros =  marvel_hero.concat(dc_hero);
// console.log(all_heros);

// Spread
const all_new_hero = [...marvel_hero,...dc_hero];
console.log(all_new_hero);  //['IronMan','Thor','Hulk','SuperMan','Batman','Flash','WanderWoman']


// Nested array to normal array
const nestedArray = [1,2,3, [4,5,6] ,7, [6,7,[4,5]]];
const flatArray = nestedArray.flat(Infinity);
console.log(flatArray);


console.log(Array.isArray("DilipKumar")); //false

// String to Array
console.log(Array.from("DilipKumar")); // ['D''i''l''i','p''K''u''m','a','r']

// from is not working in key value pair
console.log(Array.from({name :"DilipKumar"})); //interesting


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]

