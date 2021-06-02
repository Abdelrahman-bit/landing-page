const btn = document.querySelectorAll('.button');
const screen = document.querySelectorAll(".resArea");

btn[0].addEventListener("click",()=>{
    screen.innerHTML = 9;
})

console.log(btn);
console.log(screen.innerHTML);