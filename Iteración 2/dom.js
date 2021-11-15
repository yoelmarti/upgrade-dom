// Iteración#2

window.onload = function(){
    insertDivVacio();
    divConP();
    div6P();
    paragraConText();
    insertTitle();
    listArray(apps);
    removeNodes();
    insertP();
    insertPWithText();
};

// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const insertDivVacio = () =>{
    let newDiv = document.createElement("div");    
    let parentDiv = document.querySelector('h2.fn-insert-here');
    
    document.body.insertBefore(newDiv, parentDiv);
};

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divConP = () =>{
    let container = document.getElementById("exercise-2-2");
    container.innerHTML = "<div><p>Esto es un div y un paragrafo creado dinamicamente</p></div>";
    
};

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div6P = () => {
    let container = document.createElement("div")
    let parentDiv = document.querySelector("div.exercise-2-3");
    parentDiv.appendChild(container);
    for(let i = 0; i<6; i++){
        let p = document.createElement("p");
        let text = document.createTextNode(`Elemento paragrafo, añadido dinamicamente, numero ${i+1}`)
        p.appendChild(text)
        container.appendChild(p);
    }
};

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const paragraConText = () =>{
    let p = document.createElement("p");
    let content = document.createTextNode("Soy dinámico!");
    p.appendChild(content);

    let container = document.querySelector("div.exercise-2-4");
    container.appendChild(p);
};

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const insertTitle = () =>{
    let titleContainer = document.querySelector("h2.fn-insert-here")
    let text = document.createTextNode("Wubba Lubba dub dub");

    titleContainer.appendChild(text)
};

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const listArray = (arr) =>{
    let container = document.querySelector("div.exercise-2-6");
    let listContainer = document.createElement("ul");
    container.appendChild(listContainer);
    for(let i=0; i<arr.length; i++){
        let li = document.createElement("li");
        let arrText = document.createTextNode(arr[i]);
        li.appendChild(arrText);
        listContainer.appendChild(li)
    };
};

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const removeNodes = () => {
    let element = document.querySelectorAll(".fn-remove-me")
    for(let i=0; i<element.length;i++){
        element[i].remove();
    }
};

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const insertP = () => {
    let p = document.createElement("p");
    let content = document.createTextNode("Voy en medio!");
    p.appendChild(content);
    let div = document.getElementById("exercise-2-8");
    document.body.insertBefore(p, div);
};

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const insertPWithText = () => {
    let element = document.querySelectorAll("div.fn-insert-here");
    for (let i = 0; i < element.length; i++) {
        let p = document.createElement("p");
        p.innerText = "Voy dentro!"
        element[i].appendChild(p);
    }
    
    console.log(element)
};
