const inputTask = document.getElementById("InputTask");
const btnAdd = document.getElementById("btnAdd");
const div = document.querySelector("div");
const btnDelete = document.getElementById("btnDelete");

btnAdd.addEventListener("click", ()=>{
        const data = inputTask.value ;
        localStorage.setItem("data",data)
        const h2 = document.createElement("h2");
        h2.innerHTML = data;
        div.append(h2);
        inputTask.value = '';
})

btnDelete.addEventListener('click', ()=>{
        div.remove();
})

const savedData = localStorage.getItem("data");
if (savedData){
        const p = document.createElement("p")
        p.innerHTML = savedData;
        div.appendChild(p);
}