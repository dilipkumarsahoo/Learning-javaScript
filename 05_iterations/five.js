const coding = ["js", "python", "java", "ruby","php"];

//Using call back function
coding.forEach( function (item){
    // console.log(item);
})

//Using arrow function
coding.forEach( (item) => {
    // console.log(item);
})

//Using Function
function printMe(item) {
    // console.log(item);
}

coding.forEach( printMe);

//Object inside array
const myObject = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
];

myObject.forEach( (item) => {
    console.log(item.languageName);
})