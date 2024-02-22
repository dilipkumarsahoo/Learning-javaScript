function sayMyName() {
    console.log("D");
    console.log("i");
    console.log("l");
    console.log("i");
    console.log("p");

}

// sayMyName();

function addTwoNumber(number1,number2){
    // let sum = number1 + number2
    // return sum;
    return number1 + number2
}

const result = addTwoNumber(5,6)
// console.log(result);

function loginusermessage(username){
    if(!username){
        return "Please enter your name"
    }
    return `${username} is loggedin`
}

// console.log(loginusermessage("Dilip"));


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(22,55,88,99,85,52));


// Object In function
const course = {
    coursename: "python",
    price: 499
}

function handleObject(anyobject){
    return `Course name is ${anyobject.coursename} and price is ${anyobject.price}`
}

// console.log(handleObject(course));
handleObject({
    coursename: "java",
    price: 899
})


// Array In function
const myArray = [200, 900, 800, 700];

function handleArray(getarray) {
    return `your number is ${getarray[0]}`
}

// console.log(handleArray(myArray));
console.log(handleArray([200, 900, 800, 700]));


