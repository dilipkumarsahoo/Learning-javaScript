const accountId = 112233;
let accountEmail = "Bhim@gmail.com"
var accountPassword = "4656"
accountCity = "Dholakpur"

// accountId=3;  // Not Allowed
accountEmail = "tuntun@gmail.com"
accountPassword = "9909"
accountCity = "Banglore"
let accoutState;
console.log(accountId);

/*
Perfer not to use var
because of issue in block scope and function scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accoutState]);