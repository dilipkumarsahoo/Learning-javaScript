class User {
    constructor(username){
        this.username = username
    }

    printMe(){
        console.log(`User name is ${this.username}`);
    }

    static createdId(){
        return `123`
    }
}

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const chai = new  User("Dilip");
chai.printMe()
// console.log(chai.createdId());

const tea = new Teacher("Tea", "Tea@gmail.com")
tea.printMe()
// console.log(tea.createdId());
