const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addtask(){
    if(inputBox.value === ''){ /* esto es para leer el value dentro del input */
        alert("Debes rellenar este campo!")
    }
    else{
        let li = document.createElement("li");
        /* li.innerhtml es el texto dentro de li */
        li.innerHTML = inputBox.value;
        /* appendChild es para agregar nuevos elementos a un documento existente o mover un elemento */
        listContainer.appendChild(li);
        /* agregamos la "x" */
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    /* esto es para quitar el texto del value del input */
    inputBox.value = ""
    saveData();
}

/* Esta funcion es para eliminar tareas de la lista */
listContainer.addEventListener("click", function(e){
    /* aqui lo que hace es leer donde se clikea */
    /* Si se clickea en LI (la lista) se pone en estado checked */
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    /* Si se clickea en la x (SPAN) se remueve la tarea */
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

/* guardar las tareas en el browser */
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

/* cargamos la data */
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();