let ch=document.getElementById("result");

let etar=document.getElementById("re");
etar.addEventListener("click",function(e){
    let h=parseInt(document.getElementById("height").value);
    let w=parseInt(document.getElementById("weight").value);
    if(h===''||h<0||isNaN(h)){
        ch.textContent="ter a valid height value"
    }
    if(w===''||w<0||isNaN(w)){
        ch.textContent="enter a valid height value"
    }
    else{
        ch.textContent=(w / (h * h)).toFixed(2);
    }


})
//if we take h and w outsie the function then empty value gets stored