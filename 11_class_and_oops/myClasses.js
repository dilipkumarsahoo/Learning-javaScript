class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptedPassword(){
        return `Password is ${this.password}asd`
    }

    changeUserName(){
        return `user name is ${this.username.toUpperCase()}`
    }
}

const chai = new User("dilip", "dks@gmail.com", "sksdh")
console.log(chai.encryptedPassword());
console.log(chai.changeUserName());


// behind the scene
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptedPassword = function(){
    return `Password is ${this.password}asd`
}

User.prototype.changeUserName = function(){
    return `user name is ${this.username.toUpperCase()}`
}

const tea = new User("dilip", "dks@gmail.com", "sksdh")
console.log(tea.encryptedPassword());
console.log(tea.changeUserName());
