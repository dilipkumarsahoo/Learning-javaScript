// Dates

// let myDate = new Date();
// console.log(myDate);      // 2024-02-16T09:45:05.423Z
// console.log(myDate.toString());     //Fri Feb 16 2024 15:15:05 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());   // Fri Feb 16 2024
// console.log(myDate.toLocaleDateString());   //2/16/2024
// console.log(typeof myDate);

// let createDate = new Date(2023, 0, 20);
// let createDate = new Date(2023, 0, 20, 5, 3);
// let createDate = new Date("2023-01-14");
// let createDate = new Date("01-25-2023");
// console.log(createDate.toLocaleDateString());

let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(Math.floor(timeStamp/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleDateString('default',{
    weekday:"long"
})
