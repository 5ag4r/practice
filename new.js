var box = document.querySelector('.box1');

function f(){
    alert("dont click here");
}

box.addEventListener('click',() => {
    alert("dont click idiot!");
})