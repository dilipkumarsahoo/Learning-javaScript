class User {
    constructor(username){
        this.username = username
    }

    logMe(username){
        console.log(`User name is ${this.username}`);
        
    }
}

// extends use for extend the class
class Teacher extends User {
    constructor(username, email, password){
        //super keyword use for override the value
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const users = new User("Dilip")
users.logMe()


const teacher = new Teacher("Dikhit", "abc@gmail", "ohiuiuh")
teacher.addCourse()
teacher.logMe()
// console.log(user);
// console.log(teacher);

// addCourse();

