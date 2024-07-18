// const isUserLoggedIn = true
// const temperature = 41
// if (temperature < 50) {
//     console.log("less than 5o");
// }else{
//     console.log("Greater then 50");
// }
// <, >, <=,>=, ==, !=, ===, !==
const score = 200

if (score > 100){
    const power = "Fly"
    // console.log(`User power: ${power}`);
}

// const balance = 1000;

// if(balance < 500){
//     console.log("less then 500");
// }else if(balance < 750){
//     console.log("less then 750");
// }else if(balance < 900){
//     console.log("less then 900");
// }else{
//     console.log("less then 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}