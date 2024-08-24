// let myName = "Dilip     "
// let myCompany = "ICT     "

// console.log(myName.trim().length);
// console.log(myName.trueLength);

let myHero = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`); 
    }
}

Array.prototype.heydilip = function(){
    console.log(`dilip is present in array also`);
    
}

Object.prototype.dilip = function(){
    console.log(`dilip is present in all object`);   
}

// heroPower.dilip();
// myHero.dilip();
// myHero.heydilip();
// // heroPower.heydilip();

//inheritance

const User = {
    name: "Dilip",
    email: "dilip@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

//Teacher.__proto__ = User;

// modern syntex
Object.setPrototypeOf(TASupport,TeachingSupport)


let anotherName = "chaiAurCode      "

String.prototype.trimLength = function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}

anotherName.trimLength();
"dilip      ".trimLength();