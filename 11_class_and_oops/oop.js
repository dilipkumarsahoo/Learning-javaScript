const user = {
    userName: 'Dilip',
    loginCount: 8,
    signedIn: true,

    getUserDetails(){
        // console.log("Got user details from database");  
        // console.log(`Username: ${this.userName}`);
        // console.log(this);
        
    }
}

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);

function User(userName, loginCount, signedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.greeting = function(){
        console.log(`Welcom ${this.userName}`);
        
    }

    return this;
}

const userOne = new User('Dilip',10,true);
const userTwo = new User('Deepak',11,false);
console.log(userOne);
console.log(userTwo);

