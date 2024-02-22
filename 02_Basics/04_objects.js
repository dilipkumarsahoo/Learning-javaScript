// const facebookUser = new Object()
const facebookUser = {}

facebookUser.id = "7887";
facebookUser.name = "Suman";
facebookUser.isLoggedIn = false;
// console.log(facebookUser);

const regularUser = {
    email: "Dilip@gmail.com",
    fullName: {
        firstName: "Dilip",
        lastName: "Sahoo"
    }
}

// console.log(regularUser.fullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}
const obj4 = {7: "a", 8: "b"}

// const obj5 = { obj1, obj2, obj3, obj4}
// const obj5 = Object.assign({}, obj1, obj2, obj3, obj4)
const obj5 = {...obj1,...obj2,...obj3,...obj4}
// console.log(obj5);

const users = [
    {
        id: 1,
        email: "Dilip@gamail,com"
    },
    {
        id: 2,
        email: "Dilip@gamail,com"
    },
    {
        id: 3,
        email: "Dilip@gamail,com"
    },
    {
        id: 4,
        email: "Dilip@gamail,com"
    },
    {
        id: 5,
        email: "Dilip@gamail,com"
    },
]

users[1].email
// console.log(facebookUser);

// console.log(Object.keys(facebookUser));
// console.log(Object.values(facebookUser));
// console.log(Object.entries(facebookUser));

// console.log(facebookUser.hasOwnProperty('isLoggedIn')); //true

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstrucror: "Dilip"
}

// course.courseInstrucror

const {courseInstrucror: instructor} = course
console.log(instructor);

