const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

const chai = {
    name: "adrak chai",
    price: 230,
    isAvalable: true
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    //writable: false,
    //enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

chai.name = "tea"

console.log(chai);
