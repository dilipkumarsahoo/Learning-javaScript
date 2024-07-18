const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach((button) => {
    // console.log(button);
    document.addEventListener(('click') , function(e){
        console.log(e);
        console.log(e.target);
        console.log(e.target.id);
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'green') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'pink') {
            body.style.backgroundColor = e.target.id;
        }

        
    })
}) 
    
