//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const name = "Dilip"

    function two(){
        let website="Youtube"
        console.log(name);
    }

    // console.log(website);
    two();
    
}

// one();

if(true){
    const userName = "Dilip"
    if(userName === "Dilip"){
        const website = " youtube"
        // console.log(userName + website);
    }
    // console.log(website);
}
// console.log(website);


//  ++++++++++++++++++++++++ interesting ++++++++++++++++++++++

console.log(addone(10));
function addone(num){
    return num + 1
}



const addtwo = function(num){
    return num + 1
}
console.log(addtwo(20));
