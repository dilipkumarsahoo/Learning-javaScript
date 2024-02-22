const user = {
    userName: "kumar",
    price: "299",

    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome to website`);
        // console.log(this);
    }

}

// console.log(user.welcomeMessage());
// user.userName = "Dilip"
// console.log(user.welcomeMessage());
// console.log(this);

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

const addtwo = (num1, num2) =>  num1 + num2;

console.log(addtwo(8, 9));


