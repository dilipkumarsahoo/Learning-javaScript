const userEmail = "Dilip.ai"

if (userEmail) {
    console.log("Got your user Email");
}else{
    console.log("Don't have user email");
}

// falsy value
// false, 0, "", null, undefined, NaN

// Truthy value
// "0", 'false', " ", [], {}, function() {}

const emptyArray = []
if(emptyArray.length == 0){
    console.log("Array is empty");
}

const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefine

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 15
// val1 = undefined ?? 30
val1 = null ?? 50 ?? 20
// console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <=80 ? console.log("less then 80") : console.log("more then 80");

const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"

function getFee(isMember) {
    return isMember ? '$2.00' : '$10.00';
  }
  
  console.log(getFee(true));
  // Expected output: "$2.00"