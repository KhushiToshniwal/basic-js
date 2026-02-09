let but=document.querySelectorAll('.button');
const body=document.querySelector(".main");
but.forEach(function(button){
    button.addEventListener("click",function(e){
          body.style.backgroundColor = button.id;
    })
})