

const ad=document.querySelector(".add");
const taski=document.querySelector(".taskinput");
const tasksss=document.querySelector(".list");
const createform=(msg,...classes)=>{
    const el = document.createElement("form");
    el.classList.add(...classes);
    el.innerHTML = `
        <input type="checkbox" >
        <label for="listt">${msg}</label>
        <button type="button" class="but">
            <span class="material-symbols-outlined">
                close_small
            </span>
        </button>
    `;
    return el;
}

const addinglist=(msg)=>{
    const newel=createform(msg,"listi");
    tasksss.appendChild(newel);
    taski.value = "";
}
taski.addEventListener("keydown",(e)=>{
  const newtask=e.target.value.trim();
  if(e.key=="Enter"&&newtask){
    e.preventDefault();
    addinglist(newtask);
    
  }
});
ad.addEventListener("click", () => {
    const newtask = taski.value.trim();

    if (newtask) {
        
    addinglist(newtask);
    
    }
});
tasksss.addEventListener("click", (e) => {
    if (e.target.closest(".but")) {
        e.target.closest(".listi").remove();
    }
});
tasksss.addEventListener("change", (e) => {
    if (e.target.type === "checkbox") {
        const listItem = e.target.closest(".listi");
        const label = listItem.querySelector("label");

        label.style.textDecoration = e.target.checked? "line-through": "none";
    }
});
