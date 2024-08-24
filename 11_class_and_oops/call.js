function setUserName(username) {
    this.username = username;
}

function createUser(username, email, password) {
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("dilip", "dk@gmail.com", 1234)
console.log(chai);

const tea = new createUser("deepak", "deepak@gmail.com", 7784)
console.log(tea);
