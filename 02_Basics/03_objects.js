// Single eton
// Object.create

//object literals
const mySym = Symbol("key1")

const JsUser ={
    name: "Dilip",
    "full name": "Dilip Sahoo",
    [mySym]: "mykey1",
    age: 20,
    location: "Rourkela",
    email: "dilip@gmail.com",
    isLoggedIn: false,
    lostLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "dilip@yahoo.com"
// console.log(JsUser);
// Object.freeze(JsUser); // after freeze you can't changes property
JsUser.email = "dilip@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Mr. ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());