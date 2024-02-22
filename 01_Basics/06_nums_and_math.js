const score = 499;
console.log(score);

const balance = new Number(1000);
console.log(balance);

// After converting string using tostring we use string method
console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNumber = 52.9332;
// toPrecision it take of roundup value
console.log(otherNumber.toPrecision(2));

const money = 1000000;
console.log(money.toLocaleString('en-In'));

const events = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
console.log(events)
console.log(events.toLocaleString('en-IN', { timeZone: 'UTC' }));

// ++++++++++++++++++++++++ Maths +++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.3));
console.log(Math.min(4,8,9,6,3));
console.log(Math.max(4,8,9,6,3));

// Generate rendom value
console.log(Math.random());
console.log((Math.random() * 10 ) + 1 );
console.log(Math.floor(Math.random() * 10 ) + 1 );

// Generate rendom value in range
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min +1)) + min);

